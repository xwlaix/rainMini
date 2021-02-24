Component({
    properties: {
        title: {
            type: String,
            value: "请确认提交信息"
        },
        content: {
            type: Array
        },
        result: {
            type: String,
            value: "**"
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        cancelText: {
            type: String,
            value: "取消"
        }
    },
    data: {
        showDialog: !1
    },
    methods: {
        show: function() {
            this.setData({
                showDialog: !0
            });
        },
        hide: function() {
            this.setData({
                showDialog: !1
            });
        },
        _cancel: function() {
            this.triggerEvent("cancel");
        },
        _confirm: function() {
            this.triggerEvent("confirm");
        }
    }
});