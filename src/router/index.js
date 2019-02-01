import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/common/login/Login';
import LoginIn from '../common/login/page/LoginIn';
import Register from '../common/login/page/Register'
import Index from '../common/index/Index'


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
      ],
    },
    {
      path:'/index',
      component:Index
    }
  ]
})
