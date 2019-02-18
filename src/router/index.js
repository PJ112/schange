import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/common/login/Login';
import LoginIn from '../common/login/page/LoginIn';
import My from '../pages/my/My'
import Register from '../common/login/page/Register'
import Index from '../common/index/Index'
import MyData from '../pages/my/pages/MyData/MyData'
import MyMall from '../pages/my/pages/MyMall/MyMall'
import MyCollection from '../pages/my/pages/MyCollection/MyCollection'
import MyBuy from '../pages/my/pages/MyBuy/MyBuy'
import MyHJudge from '../pages/my/pages/MyHJudge/MyHJudge'
import MyOrder from '../pages/my/pages/MyOrder/MyOrder'
import MyPublish from '../pages/my/pages/MyPublish/MyPublish'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      redirect:'/loginin',
      children:[
        {
          path:'/loginin',
          component:LoginIn
        },
        {
          path:'/resgister',
          component:Register
        }
      ]
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      redirect:'/mydata',
      children:[
        {
          path:'/mydata',
          component:MyData,
        },
        {
          path:'/mymall',
          component:MyMall,
          meta:{
            requireAuth:true,
            active:'/mymall'
          }
        },
        {
          path:'/mycollection',
          component:MyCollection,
          meta:{
            requireAuth:true,
            active:'/mycollection'
          }
        },
        {
          path:'/mybuy',
          component:MyBuy,
          meta:{
            requireAuth:true,
            active:'/mybuy'
          }
        },
        {
          path:'/myhjudge',
          component:MyHJudge,
          meta:{
            requireAuth:true,
            active:'/myhjudge'
          }
        },
        {
          path:'/myorder',
          component:MyOrder,
          meta:{
            requireAuth:true,
            active:'/myorder'
          }
        },
        {
          path:'/mypublish',
          component:MyPublish,
          meta:{
            requireAuth:true,
            active:'/mypublish'
          }
        },
      ]
    },
    {
      path:'/index',
      component:Index
    }
  ]
})
