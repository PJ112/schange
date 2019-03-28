import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/common/login/Login';
import LoginIn from '../common/login/page/LoginIn';
import My from '../pages/my/My'
import Register from '../common/login/page/Register'
import MyData from '../pages/my/pages/MyData/MyData'
import MyMall from '../pages/my/pages/MyMall/MyMall'
import MyCollection from '../pages/my/pages/MyCollection/MyCollection'
import MyBuy from '../pages/my/pages/MyBuy/MyBuy'
import MyHJudge from '../pages/my/pages/MyHJudge/MyHJudge'
import MyOrder from '../pages/my/pages/MyOrder/MyOrder'
import MyPublish from '../pages/my/pages/MyPublish/MyPublish'

import SellersMes from '../pages/sellers/SellersMes'
import SellersPublish from '../pages/sellers/pages/SellersPublish'
import SellersHJudge from '../pages/sellers/pages/SellersHJudge'

import test from '../pages/test'
import Index from '../pages/index/Index'
import IndexShopping from '../pages/index/components/Shopping'
import IndexCollection from '../pages/index/components/Collection'
import IndexIntegral from '../pages/index/components/Integral'
import IndexProfile from '../pages/index/components/Profile'
import IndexOrdering from '../pages/index/components/Ordering'
import IndexPrivateLetter from '../pages/index/components/PrivateLetter'

import ConfirmOrdering from '../pages/index/pages/ConfirmOrdering'

import Publish from '../pages/index/pages/Publish'

import SaleProduct from '../pages/index/pages/SaleProduct'

import Detail from '../pages/index/pages/Detail'

import ContactSeller from '../pages/index/pages/ContactSeller'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:`/test`,
      component:test
    },
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
     },
    {
     path:'/index-shopping',
     component:IndexShopping

    },
    {
     path:'/index-collection',
     component:IndexCollection
    },
    {
     path:'/index-integral',
     component:IndexIntegral
    },
    {
     path:'/index-profile',
     component:IndexProfile
    },
    {
     path:'/index-private-letter',
     component:IndexPrivateLetter
    },
    {
     path:'/index-ordering',
     component:IndexOrdering
    },
    {
     path:'/confirm-ordering',
     component:ConfirmOrdering
    },
    {
     path:'/publish',
     component:Publish
    },
    {
     path:'/sale-product',
     component:SaleProduct
    },
    {
     path:'/detail',
     component:Detail
    },
    {
     path:'/contact-seller',
     component:ContactSeller
    },
    {
     path:'/sellersmes',
     component:SellersMes,
     redirect:'/sellerspublish',
     children:[
       {
         path:'/sellershjudge',
         component:SellersHJudge,
       },
       {
         path:'/sellerspublish',
         component:SellersPublish,
       }
     ]
    },
  ]
})
