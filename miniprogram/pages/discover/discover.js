Page({
    data: {
        items: [ {
            appid: "wx6d38f58cf9444e51",
            img: "../../images/icon_cutenotch.png",
            title: "Cute Notch",
            desc: "刘海壁纸制作,给壁纸加上小耳朵"
        }, {
            appid: "wx886ce37e0790c2e7",
            img: "../../images/icon_touxiang.png",
            title: "头像角标制作器",
            desc: "给你的头像加上VIP、标签等"
        } ]
    },
    itemClick: function(e) {
        console.log("index--\x3e" + e.currentTarget.id);
    },
    onShareAppMessage: function() {}
});