import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/login/Login';
import LoginIn from '../components/common/login/page/LoginIn';
import Register from '../components/common/login/page/Register'

Vue.use(Router)

export default new Router({
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
        },{
          path:'/resgister',
          component:Register
        }
      ]
    }
  ]
})
