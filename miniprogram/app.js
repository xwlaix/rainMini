App({
    onLaunch: function(e) {
        this.globalData.scene = e.scene, 1011 != e.scene && 1012 != e.scene && 1013 != e.scene || (this.globalData.fromCodeFlag = !0), 
        console.log("=============app.onlaunch===============");
        var o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o);
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
          } else {
            wx.cloud.init({
              // env 参数说明：
              //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
              //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
              //   如不填则使用默认环境（第一个创建的环境）
              // env: 'my-env-id',
              traceUser: true,
            })
          }
    },
    onHide: function() {
        wx.pauseBackgroundAudio();
    },
    onShow: function(e) {
        console.log("=============app.onShow==============="), null != e.shareTicket && "" != e.shareTicket && void 0 != e.shareTicket && (this.globalData.shareTicket = e.shareTicket), 
        console.log("-=====app.globalData.shareTicket:" + this.globalData.shareTicket + "|ops.shareTickets:" + e.shareTicket), 
        "true" == wx.getStorageSync("ban") && wx.reLaunch({
            url: "/pages/index/index?closeFlag=1"
        });
    },
    getUserInfo: function(e) {},
    getHeighestScore: function(e) {
        this.globalData.heighestScore = wx.getStorageSync("heighestScore"), "function" == typeof e && e(this.globalData.heighestScore);
    },
    globalData: {
        userInfo: null,
        heighestScore: 0,
        systemInfo: null,
        zhuan: 0
    }
});