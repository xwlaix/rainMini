var t = require("../../utils/util.js"), a = getApp();

Page({
    data: {
        input_answer_list: [],
        default_input_answer_list: {},
        name: "",
        flg: 0,
        colorArr: [ "#83ecc6", "#ec807a", "#9beaea", "#66BB6A", "#f8e4ad", "#5dcbc7", "#e4d571", "#7ecad8", "#d2718c", "#73cac3", "#6cb1d5", "#864284", "#efb5a4", "#ec81a6", "#e6ada1", "#f8e4ad", "#83ecc6", "#ec807a", "#9beaea", "#f8e4ad", "#5dcbc7", "#e4d571", "#7ecad8", "#d2718c", "#73cac3", "#6cb1d5", "#864284", "#efb5a4", "#ec81a6", "#e6ada1", "#f8e4ad" ]
    },
    onLoad: function(a) {
        var e = this, n = {}, s = wx.getStorageSync("myJuedin"), i = [], r = (wx.getStorageSync("all"), 
        e.data.default_input_answer_list), o = wx.getStorageSync("num");
        if (void 0 != a) {
            if (2 == a.flg) return r.id = o, r.num = o, void e.setData({
                default_input_answer_list: r
            });
            n = JSON.parse(a.item), 1 == a.flg && (t.isNull(s) ? (i.push(n), wx.setStorageSync("myJuedin", i)) : (s.push(n), 
            wx.setStorageSync("myJuedin", s)), e.setData({
                flg: 1
            })), e.setData({
                input_answer_list: n.awards,
                default_input_answer_list: n,
                name: n.option
            });
        }
    },
    checkQuestion: function(t) {
        var a = this, e = t.detail.value, n = a.data.default_input_answer_list;
        n.option = e, a.setData({
            name: e,
            default_input_answer_list: n
        });
    },
    checkAnswer: function(t) {
        var a = this, e = t.detail.value, n = t.currentTarget.dataset.index, s = a.data.input_answer_list, i = a.data.default_input_answer_list;
        for (var r in s) n == r && (s[r].name = e);
        i.awards = s, a.setData({
            input_answer_list: s,
            default_input_answer_list: i
        });
    },
    addAnswer: function() {
        var t = this, a = t.data.input_answer_list, e = t.data.colorArr, n = {};
        17 != a.length ? (n = {
            name: "",
            color: e[a.length]
        }, a.push(n), t.setData({
            input_answer_list: a
        })) : wx.showToast({
            title: "选项长度最多17项",
            icon: "none",
            mask: !1
        });
    },
    subAnswer: function(t) {
        var a = this, e = t.currentTarget.dataset.index, n = a.data.input_answer_list, s = a.data.default_input_answer_list, i = a.data.colorArr;
        for (var r in n) if (r == e) {
            n.splice(r, 1);
            break;
        }
        for (var o in n) n[o].color = i[o];
        s.awards = n, a.setData({
            input_answer_list: n,
            default_input_answer_list: s
        });
    },
    saveQA: function() {
        var e = this, n = wx.getStorageSync("myJuedin"), s = e.data.default_input_answer_list, i = e.data.input_answer_list, r = wx.getStorageSync("all"), o = [];
        if ("" == e.data.name) wx.showToast({
            title: "名称不能为空",
            icon: "none",
            mask: !1
        }); else {
            for (var l in i) if ("" == i[l].name) return void wx.showToast({
                title: "选项不能为空",
                icon: "none",
                mask: !1
            });
            if (i.length < 2) return void wx.showToast({
                title: "选项最少填2个",
                icon: "none",
                mask: !1
            });
            if (t.isNull(n)) return a.globalData.myJueding = !0, o.push(s), wx.setStorageSync("myJuedin", o), 
            wx.setStorageSync("switchTab", s.id), r.push(s), wx.setStorageSync("all", r), wx.setStorageSync("num", wx.getStorageSync("num") + 1), 
            void wx.showToast({
                title: "保存成功",
                icon: "success",
                mask: !1,
                success: function() {
                    setTimeout(function() {
                        wx.switchTab({
                            url: "../index/index"
                        });
                    }, 1500);
                }
            });
            for (var u in n) if (s.num == n[u].num) {
                n[u] = s, wx.setStorageSync("myJuedin", n);
                for (var c in r) if (r[c].id == s.id) {
                    r[c] = s, wx.setStorageSync("all", r);
                    break;
                }
                a.globalData.myJueding = !0, wx.setStorageSync("switchTab", s.id), 1 == e.data.flg && e.setData({
                    flg: 0
                }), wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    mask: !1,
                    success: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: "../index/index"
                            });
                        }, 1500);
                    }
                });
            } else a.globalData.myJueding = !0, wx.setStorageSync("switchTab", s.id), n.push(s), 
            wx.setStorageSync("myJuedin", n), r.push(s), wx.setStorageSync("all", r), wx.setStorageSync("num", wx.getStorageSync("num") + 1), 
            wx.showToast({
                title: "保存成功",
                icon: "success",
                mask: !1,
                success: function() {
                    setTimeout(function() {
                        wx.switchTab({
                            url: "../index/index"
                        });
                    }, 1500);
                }
            });
        }
    },
    onUnload: function() {
        function t(t) {
            for (var a = [], e = {}, n = 0; n < t.length; n++) e[t[n].id] || (a.push(t[n]), 
            e[t[n].id] = !0);
            return a;
        }
        var a = this.data.flg, e = wx.getStorageSync("myJuedin"), n = wx.getStorageSync("all");
        1 == a && (e.splice(e.length - 1, 1), wx.setStorageSync("myJuedin", e));
        var s = t(e), i = t(n);
        wx.setStorageSync("myJuedin", s), wx.setStorageSync("all", i);
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