export default {
    data(){
        return {
            message:"detail",

        }
    },
    template:'#detail',//写在首页
    methods:{
        show(){
            alert(this.message);
        }
    }
}
