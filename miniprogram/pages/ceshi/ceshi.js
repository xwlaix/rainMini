var t, a = wx.createCanvasContext("canvasI"), e = wx.createCanvasContext("bgCanvas"), s = 0;

Page({
    data: {
        itemsNum: 6,
        itemsArc: 0,
        color: [ "#FFB932", "#ffd57c" ],
        text: [ "一等奖", "二等奖", "三等奖", "四等奖", "五等奖", "六等奖" ],
        isRotate: 60
    },
    start: function() {
        console.log("start");
        var t = this, a = t.data.isRotate, e = 1e3 * Math.random();
        a = a + e - e % 60 + 1440, console.log(a % 360), t.setData({
            isRotate: a
        });
    },
    onLoad: function(a) {
        var e = this, s = 360 / e.data.itemsNum;
        e.setData({
            itemsArc: s
        }, function() {
            e.Items(s), t = setInterval(e.light, 1e3);
        });
    },
    onReady: function() {
        this.light();
    },
    light: function() {
        var t = this.data.itemsNum;
        ++s >= 2 && (s = 0), e.beginPath(), e.arc(150, 150, 150, 0, 2 * Math.PI), e.setFillStyle("#DF1E14"), 
        e.fill(), e.beginPath(), e.arc(150, 150, 135, 0, 2 * Math.PI), e.setFillStyle("#F5AD26"), 
        e.fill();
        for (var a = 0; a < 2 * t; a++) e.save(), e.beginPath(), e.translate(150, 150), 
        e.rotate(30 * a * Math.PI / 180), e.arc(0, -135, 8, 0, 2 * Math.PI), 0 == s ? a % 2 == 0 ? e.setFillStyle("#FBF1A9") : e.setFillStyle("#fbb936") : a % 2 == 0 ? e.setFillStyle("#fbb936") : e.setFillStyle("#FBF1A9"), 
        e.fill(), e.restore();
        e.draw();
    },
    Items: function(t) {
        console.log(t);
        for (var e = this, s = t, l = e.data.itemsNum, i = e.data.text, o = 0; o < l; o++) a.beginPath(), 
        a.moveTo(125, 125), a.arc(125, 125, 120, s * o * Math.PI / 180, (s + s * o) * Math.PI / 180), 
        a.closePath(), o % 2 == 0 ? a.setFillStyle(e.data.color[0]) : a.setFillStyle(e.data.color[1]), 
        a.fill(), a.save(), a.beginPath(), a.setFontSize(12), a.setFillStyle("#000"), a.setTextAlign("center"), 
        a.setTextBaseline("middle"), a.translate(125, 125), a.rotate(s * (o + 2) * Math.PI / 180), 
        a.fillText(i[o], 0, -90), a.restore();
        e.Images(), a.draw(!0);
    },
    Images: function() {
        for (var t = this, e = t.data.itemsArc, s = t.data.itemsNum, l = 0; l < s; l++) a.save(), 
        a.beginPath(), a.translate(125, 125), a.rotate(e * (l + 2) * Math.PI / 180), a.restore();
    },
    onShow: function() {}
});