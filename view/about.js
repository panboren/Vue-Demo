export default {
    data(){
        return {
            message:"about",

        }
    },
    template:'#about',//写在首页
    methods:{
        show(){
            alert(this.message);
        }
    }
}
