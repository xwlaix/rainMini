var a = wx.createInnerAudioContext(),
  t = wx.createInnerAudioContext(),
  e = wx.createInnerAudioContext(),
  n = getApp(),
  o = null;

Component({
  options: {
    multipleSlots: !0,
  },
  properties: {
    myProperty: {
      type: String,
      value: "",
      observer: function (a, t, e) {},
    },
    probability: {
      type: Boolean,
      value: !1,
    },
    musicflg: {
      type: Boolean,
      value: !0,
    },
    fastJuedin: {
      type: Boolean,
      value: !1,
    },
    repeat: {
      type: Boolean,
      value: !1,
    },
    size: {
      type: Object,
      value: {
        w: 659,
        h: 660,
      },
    },
    zhuanpanArr: {
      type: Array,
      value: [
        {
          id: 0,
          option: "转盘的标题名称",
          awards: [
            {
              id: 0,
              name: "最多17个选项",
              color: "red",
              probability: 0,
            },
            {
              id: 1,
              name: "选项最多填13字",
              color: "green",
              probability: 0,
            },
          ],
        },
      ],
    },
    awardsConfig: {
      type: Object,
      value: {
        option: "我的小决定？",
        awards: [
          {
            id: 0,
            name: "最多17个选项",
            color: "red",
            probability: 0,
          },
          {
            id: 1,
            name: "选项最多填13字",
            color: "green",
            probability: 0,
          },
        ],
      },
    },
  },
  data: {
    animationData: {},
    zhuanflg: !1,
    fastTime: 7600,
    slowTime: 3900,
    block1: "block",
    block2: "none",
    block3: "none",
    block4: "none",
  },
  created: function () {
    console.log("==========created==========");
  },
  attached: function () {},
  observers: {
    zhuanpanArr: function () {
      console.log("==========attached=========="),
        (a.src =
          "https://6465-decidecatcloud-ty1p2-1300990487.tcb.qcloud.la/start.mp3?sign=01546fece10657a49d60a462a33ee6f1&t=1578019078"),
        (t.src =
          "https://6465-decidecatcloud-ty1p2-1300990487.tcb.qcloud.la/mid.mp3?sign=cec94bae51f5d753f78e037c452f070a&t=1578019126"),
        (e.src =
          "https://6465-decidecatcloud-ty1p2-1300990487.tcb.qcloud.la/stop.mp3?sign=7815739b97e40d1a7e1d76d642a8011c&t=1578019142"),
        this.setData({
          awardsConfig: this.data.zhuanpanArr[0],
        });
        if(this.data.zhuanpanArr[0]){
          this.initAdards();
        }
    },
  },
  methods: {
    isNull: function (a) {
      return null == a || void 0 == a || "" == a;
    },
    initAdards: function () {
      for (
        var a = this,
          t = a.data.awardsConfig,
          e = t.awards.length,
          n = 1 / e,
          o = 360 / e,
          r = o - 90,
          i = 0;
        i < e;
        i++
      )
        (t.awards[i].item2Deg = i * o + 90 - o / 2 + "deg"),
          (t.awards[i].afterDeg = r + "deg");
      a.setData({
        turnNum: n,
        awardsConfig: t,
      }),
        a._change();
    },
    reset: function () {
      var a = this,
        t = a.data.awardsConfig;
      console.log(t);
      var e = wx.createAnimation({
        duration: 1,
        timingFunction: "linear",
      });
      (a.animation = e),
        e.rotate(0).step(),
        (n.runDegs = 0),
        a.setData({
          animationData: e.export(),
          block4: "block",
        });
      for (var o in t.awards) t.awards[o].opacity = "1";
      setTimeout(function () {
        a.setData({
          block1: "block",
          block2: "none",
          block3: "none",
          block4: "none",
          awardsConfig: t,
        }),
          a._myAwards(!0);
      }, 300);
    },
    switchZhuanpan: function (n, r) {
      this.setData({
        awardsConfig: n,
        block1: "block",
        block3: "none",
        zhuanflg: !1,
      }),
        this.initAdards(),
        r &&
          (this.reset(),
          clearTimeout(o),
          a.stop(),
          t.stop(),
          e.stop(),
          wx.removeStorageSync("repeatArr"));
    },
    _zhuan: function () {
      var r = this,
        i = r.data.awardsConfig,
        s = (Math.random() * i.awards.length) >>> 0;
      r.data.repeat
        ? (s = r._queryRepeat(s))
        : (wx.removeStorageSync("repeatArr"),
          console.log("是否开启了概率？？？", r.data.probability),
          r.data.probability && (s = r._openProbability())),
        console.log("当前答案选项的下标==", s),
        setTimeout(function () {
          r.data.musicflg && (r.data.fastJuedin ? t.play() : a.play()),
            (n.runDegs = n.runDegs || 0),
            (n.runDegs =
              n.runDegs +
              (360 - (n.runDegs % 360)) +
              (2160 - s * (360 / i.awards.length)));
          var e = wx.createAnimation({
            duration: r.data.fastJuedin ? r.data.slowTime : r.data.fastTime,
            timingFunction: "ease",
          });
          (r.animation = e),
            e.rotate(n.runDegs).step(),
            0 == s && (n.runDegs = 0),
            r.setData({
              animationData: e.export(),
              block1: "none",
              block2: "block",
              block3: "none",
              zhuanflg: !0,
            }),
            r._setatZhuan(!0);
        }, 100),
        (o = setTimeout(
          function () {
            for (var a in i.awards) i.awards[a].opacity = a != s ? "0.7" : "1";
            r.data.musicflg && e.play(),
              r.setData({
                animationData: {},
                s_awards: i.awards[s].name,
                awardsConfig: i,
                block1: "none",
                block2: "none",
                block3: "block",
                zhuanflg: !1,
              }),
              r._myAwards(!1),
              r._setatZhuan(!1);
          },
          r.data.fastJuedin ? r.data.slowTime : r.data.fastTime
        ));
    },
    _openProbability: function () {
      var a = this.data.awardsConfig.awards,
        t = [];
      for (var e in a)
        if (0 != a[e].probability)
          for (var n = 0; n < a[e].probability; n++) t.push(e);
      return t[Math.floor(Math.random() * t.length)];
    },
    _queryRepeat: function (a) {
      var t = this,
        e = !0,
        n = wx.getStorageSync("repeatArr"),
        o = [],
        r = t.data.awardsConfig;
      if (t.isNull(n)) return o.push(a), wx.setStorageSync("repeatArr", o), a;
      var i = r.awards.length,
        a = (Math.random() * i) >>> 0;
      for (var s in n)
        if (a == n[s])
          return (
            (e = !1),
            n.length == i
              ? (wx.removeStorageSync("repeatArr"),
                o.push(a),
                wx.setStorageSync("repeatArr", o),
                a)
              : t._queryRepeat()
          );
      return e ? (n.push(a), wx.setStorageSync("repeatArr", n), a) : void 0;
    },
    _change: function () {
      this.triggerEvent("myData", this.data.awardsConfig);
    },
    _myAwards: function (a) {
      this.triggerEvent("myAwards", {
        s_awards: this.data.s_awards,
        end: a,
      });
    },
    _setatZhuan: function (a) {
      this.triggerEvent("startZhuan", a);
    },
  },
});
