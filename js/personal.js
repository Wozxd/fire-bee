// 初始化过渡插件ss
wow = new WOW({
    animateClass: 'animated',
});
wow.init();

var top_view = new Vue({
    el: "#main",
    data: {
        // 这里数据规定是否升级按钮是否显示的问题
        imgsrc:"../static/img/up.png",
        imgsrc1:"../static/img/false_up.png",
        // 已经赚取WDC数量的数据
        a: 234324,
        flag: true,
        // 十五个矩阵的数据，后期通过接口调用,不晓得是什么接口形式，因为现在没有规范,x3与X6的登记可以单独登录，后续可能还会增加变量
        hexagon: [{
                id: 2,
                level: 2,
                wdc: 10,
                update:false,
            },
            {
                id: 3,
                level: 3,
                wdc: 20,
                update:false,

            },
            {
                id: 4,
                level: 4,
                wdc: 40,
                update:false,

            },
            {
                id: 5,
                level: 5,
                wdc: 80,
                update:false,

            },
            {
                id: 6,
                level: 6,
                wdc: 160,
                update:false,

            },
            {
                id: 7,
                level: 7,
                wdc: 320,
                update:false,

            },
            {
                id: 8,
                level: 8,
                wdc: 640,
                update:false,

            },
            {
                id: 9,
                level: 9,
                wdc: 1280,
                update:false,

            },
            {
                id: 10,
                level: 10,
                wdc: 2560,
                update:false,

            },
            {
                id: 11,
                level: 11,
                wdc: 5120,
                update:false,

            },
            {
                id: 12,
                level: 12,
                wdc: 10240,
                update:false,

            },
        ],
        flash: 1,
        vip: 2342,
        vip_sum: 23432,
        wdc_sum: 3423423,
        // 单纯的是定时器变量,用来虚假表示数值的增长
        timer: null,

    },
    methods: {
        // 侧滑栏的调用，默认使用的是CSS那一套的transform调用，也就是JS改变样式
        right: function () {
            if (this.flag) {
                this.$refs.left.style.transform = "translateX(0%)";
                this.flag = !this.flag;
            } else {
                this.$refs.left.style.transform = "translateX(-100%)";
                this.flag = !this.flag;
            }
        },
        // 左右滑动侧滑视窗关闭
        moverl:function(){

        }
    },

// 数字自增效果，使用的是定时器效果
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