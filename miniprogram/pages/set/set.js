require("../../utils/util.js");

var t = getApp();

Page({
    data: {
        custom_sound_default: !0,
        custom_fast_select_default: !1,
        custom_no_repetition_select_default: !1,
        gdhw: [ {} ]
    },
    onLoad: function(t) {},
    switchChangeSound: function() {
        var a = this, e = a.data.custom_sound_default;
        t.globalData.musicflg = !t.globalData.musicflg, a.setData({
            custom_sound_default: !e
        });
    },
    switchChangeFastSelect: function() {
        var a = this, e = a.data.custom_fast_select_default;
        t.globalData.juedin = !t.globalData.juedin, a.setData({
            custom_fast_select_default: !e
        });
    },
    switchChangeNoRepetitionSelect: function() {
        var a = this, e = a.data.custom_no_repetition_select_default;
        t.globalData.repeat = !t.globalData.repeat, a.setData({
            custom_no_repetition_select_default: !e
        });
    },
    onShareAppMessage: function() {}
});