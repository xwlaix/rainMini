function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function e() {
    for (var t = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ], e = "", n = 0; n < 32; n++) e += t[parseInt(61 * Math.random())];
    return e;
}

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), u = e.getMinutes(), g = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ a, u, g ].map(t).join(":");
    },
    randomJudgeDo: function(t) {
        var e = Math.floor(Math.random() * t) + 1;
        return console.log("====randomJudgeDo===" + t + "|" + e), e == t;
    },
    getRandomCode: e,
    getRandomNum: e,
    isNull: function(t) {
        return null == t || void 0 == t || "" == t;
    },
    getDays: function(t, e) {
        var n, r;
        n = t.split("-"), r = e.split("-");
        var o = new Date(n[0], n[1] - 1, n[2]), a = new Date(r[0], r[1] - 1, r[2]);
        return parseInt(Math.abs(o - a) / 1e3 / 60 / 60 / 24);
    },
    dateToString: function(t) {
        var e = t.getFullYear(), n = (t.getMonth() + 1).toString(), r = t.getDate().toString();
        return 1 == n.length && (n = "0" + n), 1 == r.length && (r = "0" + r), e + "-" + n + "-" + r;
    },
    formatDate: function(e) {
        return [ e.getFullYear(), e.getMonth() + 1, e.getDate() ].map(t).join("-");
    }
};