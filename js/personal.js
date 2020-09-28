var top_view = new Vue({
    el:"#main",
    data :{
            a:234324,
            flag:true,
            hexagon:[
                {id:2,level:2,wdc:10},
                {id:3,level:3,wdc:20},
                {id:4,level:4,wdc:40},
                {id:5,level:5,wdc:80},
                {id:6,level:6,wdc:160},
                {id:7,level:7,wdc:320},
                {id:8,level:8,wdc:640},
                {id:9,level:9,wdc:1280},
                {id:10,level:10,wdc:2560},
                {id:11,level:11,wdc:5120},
                {id:12,level:12,wdc:10240},
                {id:13,level:13,wdc:20480},
                {id:14,level:14,wdc:40960},
                {id:15,level:15,wdc:81920},
                {id:16,level:16,wdc:163840},],
            flash:1,
            vip:2342,
            vip_sum:23432,
            wdc_sum:3423423,
                
    },
    methods: {
        
        right:function(){
            if (this.flag) {
                this.$refs.left.style.transform = "translateX(0%)";
                this.flag = !this.flag;

            }else{
                this.$refs.left.style.transform = "translateX(-100%)";
                this.flag = !this.flag;
            }


            
        }
    }
})
