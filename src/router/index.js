import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/header'
import bookinfo from '../components/bookinfo'
import Bookreading from '../components/Bookreading'
import Catalog from '../components/Catalog'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
      //首页
    {
    	path:'/',
    	name:'home',
    	component:home,

    },
      //详情
      {
        path:'/xq:bookid',
        name:'bookinfo',
        component:bookinfo,

      },
      //阅读
      {
        path:'/reader',
        name:'reader',
        component:Bookreading
      },
      //目录
      {
        path:'/Catalog/:bookid',
        name:'Catalog',
        component:Catalog
      }
  ]
})
