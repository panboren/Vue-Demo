export default {
    data(){
        return {
            message:"home",
        }
    },
    template:'#Home',//写在首页
    methods:{
        show(){
            alert(this.message);
        }
    }
}




/*
export default {
    data(){
        return {
            flag:true,
            list:[
                {aa:555,bb:"dbdhgdhg1"},
                {aa:555,bb:"dbdhgdhg2"},
                {aa:555,bb:"dbdhgdhg3"},
                {aa:555,bb:"dbdhgdhg1"}
            ]
        }
    },
    template:'<div v-show="flag" @click="hide"><ul><li v-for="(item,index) in list" :key="index">{{item.bb}}</li></ul></div>',
    methods:{
        hide(){
            console.log(885);
            this.flag = false;
        }
    }
}
*/
