// 初始化过渡插件ss
wow = new WOW({
    animateClass: 'animated',
});
wow.init();

var top_view = new Vue({
    el: "#main",
    data: {
        imgsrc:"../static/img/up.png",
        a: 234324,
        flag: true,
        // 十六个矩阵的数据，后期通过接口调用,不晓得是什么接口
        hexagon: [{
                id: 2,
                level: 2,
                wdc: 10
            },
            {
                id: 3,
                level: 3,
                wdc: 20
            },
            {
                id: 4,
                level: 4,
                wdc: 40
            },
            {
                id: 5,
                level: 5,
                wdc: 80
            },
            {
                id: 6,
                level: 6,
                wdc: 160
            },
            {
                id: 7,
                level: 7,
                wdc: 320
            },
            {
                id: 8,
                level: 8,
                wdc: 640
            },
            {
                id: 9,
                level: 9,
                wdc: 1280
            },
            {
                id: 10,
                level: 10,
                wdc: 2560
            },
            {
                id: 11,
                level: 11,
                wdc: 5120
            },
            {
                id: 12,
                level: 12,
                wdc: 10240
            },
        ],
        flash: 1,
        vip: 2342,
        vip_sum: 23432,
        wdc_sum: 3423423,


        // 单纯的是定时器变量
        timer: null,

    },
    methods: {
        // 侧滑栏的调用
        right: function () {
            if (this.flag) {
                this.$refs.left.style.transform = "translateX(0%)";
                this.flag = !this.flag;
            } else {
                this.$refs.left.style.transform = "translateX(-100%)";
                this.flag = !this.flag;
            }
        },
    },

// 数字自增效果
    mounted() {
        const timer = setInterval(() => {
            this.a++;
        }, 1000);
        // 在beforeDestroy钩子触发时清除定时器
        this.$once('hook:beforeDestroy', () => {
            clearInterval(timer);
        })
    }
})


// 底部示例
// 点击回到顶部按钮
var bottom = new Vue({
    el: "#bottom",
    methods: {
        backtop: function () {
            var timer = setInterval(function () {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                let ispeed = Math.floor(-osTop / 5);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                this.isTop = true;
                if (osTop === 0) {
                    clearInterval(timer);
                }
            }, 30)
        }
    }
})