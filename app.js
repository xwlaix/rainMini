App({
    onLaunch: function(e) {
        this.globalData.scene = e.scene, 1011 != e.scene && 1012 != e.scene && 1013 != e.scene || (this.globalData.fromCodeFlag = !0), 
        console.log("=============app.onlaunch===============");
        var o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o);
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