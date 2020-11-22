
import VueRouter from 'vue-router'
import Login from './components/login.vue'
//1、定义路由组件
//可以从其他文件 import 进来

// const Foo = {template:'<div>foo</div>'}
// const Bar = {template:'<div>Bar</div>'}
//2’定义路由
//每个路由应该映射一个组件，其中‘component’可以是通过Vue.extend()创建的组件构造器
//或者，只是一个组件配置对象
const routes=[
    { path:'/login',component:Login}
]

//3‘创建router实例，然后传’routes'配置
//可以传其他的配置参数
const router = new VueRouter({
    routes      //(缩写)相当于routes:routes
})

//4、创建和挂载根实例
//记得要通过router配置参数注入路由
//从而让整个应用都有路由功能

export default router