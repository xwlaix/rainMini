// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init();

const db = cloud.database({
  env: "rain-8gz4veqh7583d611",
});

const { OPENID } = cloud.getWXContext();
const MAX_LIMIT = 100
// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.action) {
    case "homeDecision": {
      return homeDecision(event);
    }
    // case "updateHomeDecision": {
    //   return updateHomeDecision(event);
    // }
    // case "getWXACode": {
    //   return getWXACode(event);
    // }
    // case "getOpenData": {
    //   return getOpenData(event);
    // }
    default: {
      return;
    }
  }
};

//** 首页默认转盘决定 */


async function homeDecision(event) {
  const parmas = {
    home: event.data.home,
    openid: event.data.openid===''?'':OPENID,
    hot: event.data.hot,
    last: event.data.last,
    _id: event.data._id,
  }
  const countResult = await db.collection('decisionList').where(parmas).count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('decisionList').where(parmas).skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data)||[],
      errMsg: acc.errMsg,
    }
  })
}
