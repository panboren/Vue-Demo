import home from '../view/home.js'
import detail from '../view/detail.js'
import profile from '../view/profile.js'
import about from '../view/about.js'
console.log(home);
/*  let home = {template:'<div>home</div>'};*/
/*let detail = {template:'#detail'};
let profile = {template:'<div>profile</div>'};
let about = {template:'<div>about</div>'};*/
let routes = [
    {
        path:'/home',
        component:home},
    {
        path:'/detail',
        component:detail,
        children:[ // children中的路径永远不带，如果带/表示是1级路由
            {path:'profile',component:profile},
            {path:'about',component:about}
        ]
    },
];
let router = new VueRouter({
    routes
});
let vm = new Vue({
    el:'#app',
    router,
    data:{

    }
});

