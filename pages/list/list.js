var t = require("../../utils/util.js"), e = require("../../utils/xiaojueding.js"), a = getApp();

Page({
    data: {
        xiaojueding: e,
        myxiaojueding: [],
        tab_index: 1
    },
    officialQToKeep: function(e) {
        var a = this, i = e.currentTarget.dataset.index, n = wx.getStorageSync("myJuedin"), o = a.data.xiaojueding, r = !0;
        n = t.isNull(n) ? [] : n;
        for (var s in o) if (s == i) {
            if (0 == n.length) n.push(o[s]), wx.setStorageSync("myJuedin", n), wx.showToast({
                title: "收藏成功",
                icon: "success",
                mask: !1
            }); else {
                for (var u in n) if (n[u].id == o[s].id) {
                    r = !1;
                    break;
                }
                r && (n.push(o[s]), wx.setStorageSync("myJuedin", n), wx.showToast({
                    title: "收藏成功",
                    icon: "success",
                    mask: !1
                }));
            }
            break;
        }
        a.setData({
            xiaojueding: o
        });
    },
    personalQToDelete: function(t) {
        var e = this, a = t.currentTarget.dataset.index, i = wx.getStorageSync("myJuedin");
        for (var n in i) if (a == n) {
            i.splice(n, 1), wx.showToast({
                title: "删除成功",
                icon: "success",
                mask: !1
            });
            break;
        }
        e.setData({
            myxiaojueding: i
        }), wx.setStorageSync("myJuedin", i);
    },
    onLoad: function(t) {},
    tabSwitch: function(t) {
        var e = this, a = t.currentTarget.dataset.flg, i = wx.getStorageSync("myJuedin");
        2 == a && e.setData({
            myxiaojueding: i
        }), e.setData({
            tab_index: 1 == a ? "1" : "2"
        });
    },
    addPersonalQ: function(t) {
        wx.navigateTo({
            url: "../edit/edit?flg=2"
        });
    },
    personalQToRevise: function(t) {
        var e = wx.getStorageSync("myJuedin"), a = t.currentTarget.dataset.index;
        for (var i in e) if (i == a) return void wx.navigateTo({
            url: "../edit/edit?item=" + JSON.stringify(e[i])
        });
    },
    officialQToRevise: function(t) {
        var e = this.data.xiaojueding, a = t.currentTarget.dataset.index;
        for (var i in e) if (i == a) return void wx.navigateTo({
            url: "../edit/edit?flg=1&item=" + JSON.stringify(e[i])
        });
    },
    personalQToControl: function(t) {
        var e, a = this, i = t.currentTarget.dataset.index, n = a.data.myxiaojueding;
        for (var o in n) o == i ? (e = void 0 == n[o].num1 ? i : void 0, n[o].num1 = e) : n[o].num1 = void 0;
        a.setData({
            myxiaojueding: n
        });
    },
    officialQToControl: function(t) {
        var a, i = this, n = t.currentTarget.dataset.index;
        for (var o in e) o == n ? (a = void 0 == e[o].num ? n : void 0, e[o].num = a) : e[o].num = void 0;
        i.setData({
            xiaojueding: e
        });
    },
    officialQToRun: function(t) {
        var e = t.currentTarget.dataset.id;
        a.globalData.defaultJueding = !0, e = 0 == e ? "00" : e, wx.setStorageSync("switchTab", e), 
        wx.switchTab({
            url: "../index/index"
        });
    },
    personalQToRun: function(t) {
        var e = t.currentTarget.dataset.id;
        a.globalData.myJueding = !0, wx.setStorageSync("switchTab", e), wx.switchTab({
            url: "../index/index"
        });
    },
    onShow: function() {
        console.log("=========onShow============");
        var e = this, i = wx.getStorageSync("myJuedin");
        a.globalData.defaultJueding = !1, a.globalData.myJueding = !1, t.isNull(i) || e.setData({
            myxiaojueding: i
        }), wx.removeStorageSync("switchTab");
    },
    onShareAppMessage: function() {
        return mta.Event.stat("share", {
            time: "1"
        }), Math.floor(4 * Math.random() + 1), {
            title: t.isNull(a.globalData.shareTitle) ? "一起来玩'" + a.globalData.title + "'吧" : a.globalData.shareTitle,
            path: "/pages/index/index",
            success: function(t) {
                console.log("成功进入分享==========", t);
            },
            fail: function(t) {
                console.log("进入分享失败==========", t);
            }
        };
    }
});