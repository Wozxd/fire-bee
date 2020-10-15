// wow初始化，配合animate使用，做滚动过渡动画
wow = new WOW({
    animateClass: 'animated',
});
wow.init();




// 问题解答界面
var questione = new Vue({
    el: "#main",
    data() {
        return {
            // 这是问题列表控制参数
            if_show: [
                false, false, false, false, false,
                false, false, false, false, false,
            ],

            // end: "",
            // 这是控制列表的文字内容
            question_list_head: [
                "What is FireBee?？",
                "Who owns Firebee?",
                "How many WDC does it take to register FireBee?",
                "What is the minimum amount of WDC I can earn?",
                "Can I have more than one account?",
                "Will FireBee crash?",
                "What is the difference between FireBee and forsage?",
                "How many people do I recommend to recover the principal?",
                "How can I open a more advanced matrix?",
                "How to extract legal currency?"
            ],
            // 控制的参数设置
            question_list_word: [
                "Firebee is currently a decentralized smart contract that runs directly on the blockchain. This smart contract can help you get wealth, 100% allocation, no fundraising, no risk, pure community.",
                "FireBee is not owned by anyone.It is created through smart contracts and provides you with the greatest security and sustainability.Smart contracts are automated algorithm.It exists in the Wisdom Chain block chain network and achieves true de-centralization.",
                "The actual registration is 10WDC, but you need to prepare at least 10 or more, depending on the transaction cost of WDC at the time of registration.",
                "You can not know clearly from FireBee the lowest or maximum income that can be earned.All the FireBee matrices you buy are open permanently, and as long as you keep working hard, you will be able to earn enough to meet all your needs.It all depends on your diligence and effort, as well as your use of growth strategies.",
                "Yes.You can contact your leaders directly, they are happy to help you, or you can open a higher-level account.",
                "The FireBee smart contract never crashes.Smart contracts are built on block chain networks, which are by far the safest encrypted networks in the world.",
                "Forsage provides great direction and experimentation for FireBee.FireBee builds on this by migrating smart contracts to Wisdom Chain block chain networks that have lower handling costs, faster transactions, and higher market potential.Ensuring true de-centralization also provides additional benefits to participants.",
                "Successfully invited two people to recover the principal.In the F6 matrix, you may get the benefit of slipping, which is directly transferred to your wallet. Of course, it depends on whether you have purchased the right matrix.",
                "It depends on your choice.You can choose to upgrade several matrices in turn, or you can just open one matrix with 10WDC, and then use the benefits to open more.",
                "This issue is not related to the FireBee smart contract, but depends on whether you want to convert the money in your wallet into legal currency.",
            ],
            // 蜂窝矩形界面的参数，接口出来之后就使用AJAX请求数据
            id: 2343,
            usdt: 2343,
            wdc: 2343,
        }
    },



    

    methods: {
        // 控制列表是否显示
        show: function (i) {
            Vue.set(this.if_show, i, !this.if_show[i]);
            console.log("fsdafds")
        },
        // 点击回到顶部按钮
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
        },


    },

})