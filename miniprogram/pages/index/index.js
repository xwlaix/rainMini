var a = require("../../utils/util.js"), e = getApp(), t = require("../../utils/xiaojueding.js");

wx.setStorageSync("all", t), wx.setStorageSync("num", 100);

var n = {
    data: {
        size: {
            w: 600,
            h: 600
        },
        musicflg: !0,
        fastJuedin: !1,
        repeat: !1,
        xiaojuedingArr: t.sort(function(a, e) {
            return Math.random() > .5 ? -1 : 1;
        }),
        s_awards: "🐾  ▒▒▒▒  🐾",
        share: !0,
        canvasWidth: 400,
        canvasHeight: 650,
        showCanvasFlag: !1,
        colorArr: [ "#83ecc6", "#ec807a", "#9beaea", "#66BB6A", "#f8e4ad", "#5dcbc7", "#e4d571", "#7ecad8", "#d2718c", "#73cac3", "#6cb1d5", "#864284", "#efb5a4", "#ec81a6", "#e6ada1", "#f8e4ad", "#83ecc6", "#ec807a", "#9beaea", "#f8e4ad", "#5dcbc7", "#e4d571", "#7ecad8", "#d2718c", "#73cac3", "#6cb1d5", "#864284", "#efb5a4", "#ec81a6", "#e6ada1", "#f8e4ad" ],
        fontArr: [ "italic", "oblique", "normal" ],
        sizeArr: [ 12, 14, 16, 18, 20, 22, 24, 26, 28 ],
        eweimaUrl: "../../images/erweima.jpg",
        shengchengUrl: "",
        saveFrameFlag: !1
    },
    getData: function(a) {
        this.setData({
            awardsConfig: a.detail
        });
    },
    getAwards: function(a) {
        var e = this;
        console.log("结果 " + a.detail.s_awards), this.setData({
            s_awards: a.detail.end ? "🐾  ▒▒▒▒  🐾" : a.detail.s_awards,
            share: !!a.detail.end
        }), console.log("结果 " + this.data.s_awards), console.log("旋转结果 " + a.detail + "  " + a.detail.end), 
        a.detail.end || setTimeout(function() {
            e.result.show();
        }, 100);
    },
    startZhuan: function(a) {
        this.setData({
            zhuanflg: !!a.detail
        });
    },
    onReady: function() {
        this.result = this.selectComponent("#result");
    },
    onLoad: function(a) {
        console.log("=========onload============"), this.zhuanpan = this.selectComponent("#zhuanpan");
    },
    handleCancelDialog: function() {
        this.dialog.hide();
    },
    xiaojueding: function(a) {
        var e = this, t = a.currentTarget.dataset.idx, n = e.data.xiaojuedingArr;
        if (!e.data.zhuanflg) for (var s in n) if (t == s && n[s].option != e.data.awardsConfig.option) return void e.zhuanpan.switchZhuanpan(n[s]);
    },
    onShow: function(t) {
        console.log("============onShow============");
        var n = this, s = wx.getStorageSync("switchTab"), i = wx.getStorageSync("all"), o = n.data.xiaojuedingArr;
        i = e.globalData.defaultJueding ? o : e.globalData.myJueding ? i : o, n.setData({
            musicflg: !e.globalData.musicflg,
            fastJuedin: !!e.globalData.juedin,
            repeat: !!e.globalData.repeat
        }), a.isNull(s) || (wx.showLoading({
            title: "加载中"
        }), s = "00" == s ? "0" : s, setTimeout(function() {
            for (var a in i) if (i[a].id == s) {
                n.zhuanpan.switchZhuanpan(i[a], !0), n.setData({
                    zhuanflg: !1
                });
                break;
            }
            wx.hideLoading();
        }, 500));
    },
    closeSaveFrame: function() {
        var a = this;
        a.zhuanpan.reset(), a.setData({
            saveFrameFlag: !1
        });
    },
    saveImage: function() {
        var a = this.data.shengchengUrl;
        wx.saveImageToPhotosAlbum({
            filePath: a,
            success: function(a) {
                wx.showToast({
                    title: "保存图片成功！",
                    icon: "none",
                    duration: 1e3,
                    mask: !0
                });
            }
        });
    },
    generate: function() {
        wx.showLoading({
            title: "正在生成中"
        });
        var a = this;
        a.setData({
            showCanvasFlag: !0
        });
        for (var e = [], t = 0; t < a.data.awardsConfig.awards.length; t++) e.push(a.data.awardsConfig.awards[t].name);
        a.makeImageCanvas("shareCanvas", a.data.awardsConfig.option, e, a.data.colorArr, a.data.fontArr, a.data.sizeArr, 600, 20, 20, 40, a.data.canvasWidth, a.data.canvasHeight, 120, 400, a.data.eweimaUrl), 
        setTimeout(function() {
            wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: a.data.canvasWidth,
                height: a.data.canvasHeight,
                canvasId: "shareCanvas",
                success: function(e) {
                    console.log(e.tempFilePath), a.setData({
                        showCanvasFlag: !1,
                        saveFrameFlag: !0,
                        shengchengUrl: e.tempFilePath
                    }), wx.hideLoading();
                }
            });
        }, 2e3);
    },
    onShareAppMessage: function() {
        mta.Event.stat("share", {
            time: "1"
        });
        Math.floor(4 * Math.random() + 1);
        return {
            title: a.isNull(e.globalData.shareTitle) ? "一起来玩'" + e.globalData.title + "'吧" : e.globalData.shareTitle,
            path: "/pages/index/index",
            success: function(a) {
                console.log("成功进入分享==========", a);
            },
            fail: function(a) {
                console.log("进入分享失败==========", a);
            }
        };
    },
    makeImageCanvas: function(a, e, t, n, s, i, o, l, r, d, c, h, g, u, f) {
        for (var v = this, w = [], m = 0; m < o; m++) {
            var p = v.arrayRandomTakeOne(t);
            w.push(p);
        }
        var x = wx.createCanvasContext(a);
        x.clearRect(0, 0, c, h), x.setFillStyle("white"), x.fillRect(0, 0, c, h);
        for (var b = [], A = 0; A < w.length; A++) {
            var C = parseInt(A / l) + 1, D = A % l, T = n[A], S = v.arrayRandomTakeOne(s), y = v.arrayRandomTakeOne(i);
            b.push(y);
            var F = 0, z = C * d;
            if (0 == D) F = 0; else if (D > 0) {
                for (var j = 1; j < D + 1; j++) F += w[A - j].length * b[A - j];
                F += r * D;
            }
            x.fillStyle = T, x.font = S + " small-caps normal " + y + "px Arial", x.fillText(w[A], F, z);
        }
        x.setFillStyle("white"), x.fillRect((c - g) / 2, (h - u) / 2, g, u);
        for (var I = [], k = 0; k < e.length; k++) I.push(e[k]);
        var R = u - 10 - g, M = parseInt(R / e.length);
        M = M > 50 ? 50 : M;
        for (var P = 0; P < I.length; P++) x.fillStyle = "#000000", x.font = "normal small-caps normal " + M + "px Arial", 
        x.setTextAlign("center"), x.fillText(I[P], c / 2, (h - u) / 2 + 5 + M * (P + 1));
        x.drawImage(f, (c - g) / 2 + 5, h - (g + (h - u) / 2), g - 10, g - 10), wx.drawCanvas({
            canvasId: a,
            actions: x.getActions()
        });
    },
    arrayRandomTakeOne: function(a) {
        return a[Math.floor(Math.random() * a.length + 1 - 1)];
    }
};

Page(n);