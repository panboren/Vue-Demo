export default {
    data(){
        return {
            message:"profile",

        }
    },
    template:'#profile',//写在首页
    methods:{
        show(){
            alert(this.message);
        }
    }
}
