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
          component:MyData
        },
        {
          path:'/mymall',
          component:MyMall
        },
        {
          path:'/mycollection',
          component:MyCollection
        }
      ]
    },
    {
      path:'/index',
      component:Index
    }
  ]
})
