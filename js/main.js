// wow使用
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
                "FireBee是什么？",
                "谁拥有FireBee？",
                "注册FireBee 需要多少WDC？",
                "我能赚到WDC最少是多少？",
                "我可以有多个账户吗？",
                "FireBee 会崩溃吗？",
                "FireBee 和forsage有什么区别？",
                "我推荐几人可收回本金？",
                "怎样才能开通更高级的矩阵？",
                "怎样提取法定货币？"
            ],
            // 控制的参数设置
            question_list_word: [
                "FireBee目前是一个去中心化的智能合约，直接运行在区块链上。这个智能合约可以帮助你获得财富，100%拨出，没有风险.",
                "FireBee不归任何人所有。它是通过智能合约创建的，可以为你提供最大的安全性和可持续性。智能合约是一种自动执行的算法。它存在于Wisdom Chain区块链网络中，实现了真正的去中心化。",
                "实际注册为10WDC，但你至少需要准备10个以上，这取决于注册时WDC的交易费用。",
                "你无法从FireBee明确知道能赚取的最低收益或最高收益。所有你购买的FireBee矩阵都为你永久开放，只要你还在努力，就一定可以赚到足以满足你所有需求的金额。这一切都取决于你的勤奋和努力以及对成长策略的使用。",
                "可以。你可以直接联系你的领导人，他们很乐于帮助你，或者你可以开通更高级别的账户。",
                "FireBee 智能合约永远不会崩溃。智能合约建立在区块链网络上，而区块链的网络是目前为止，世界上最安全，最安全的加密网络。",
                "Forsage为FireBee 提供了很好的方向与实验。FireBee 在其基础之上，将智能合约迁移手续费降至更低，交易速度更快、市值更有潜力的Wisdom Chain区块链网络上。保证真正去中心化时，还为参与者提供了更多额外收益。",
                "这取决于你的选择。你可以选择依次升级若干矩阵，或者只花10WDC开通一个矩阵，在获得收益之后，用收益去开通更多矩阵。",
                "这取决于您的选择。您可以选择依次升级若干矩阵，或只花10WDC开通一个矩阵，在获得收益之后，用收益去开通更多矩阵。。",
                "这个问题与FireBee 智能合约无关，取决于你自己是否想要把自己钱包里的钱兑换成法定货币。",
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