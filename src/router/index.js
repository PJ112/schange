import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/common/login/Login';
import LoginIn from '../common/login/page/LoginIn';
import Register from '../common/login/page/Register';
import My from '../pages/my/My'

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
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    }
  ]
})
