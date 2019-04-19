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
import Assess  from '../pages/my/pages/MyBuy/pages/asseess.vue'
import GoAssess  from '../pages/my/pages/MyBuy/pages/go-assess.vue'

import MyHJudge from '../pages/my/pages/MyHJudge/MyHJudge'

import MyOrder from '../pages/my/pages/MyOrder/MyOrder'
import NoPay from '../pages/my/pages/MyOrder/pages/no-pay.vue'
import NoSend from '../pages/my/pages/MyOrder/pages/no-send.vue'
import Send from '../pages/my/pages/MyOrder/pages/send.vue'

import MyPublish from '../pages/my/pages/MyPublish/MyPublish'
import NoBuy from '../pages/my/pages/MyPublish/pages/no-buy.vue'
import WaitSend from '../pages/my/pages/MyPublish/pages/wait-send.vue'
import AlSend from '../pages/my/pages/MyPublish/pages/al-send.vue'
import AlBuy from '../pages/my/pages/MyPublish/pages/al-buy.vue'

import SellersMes from '../pages/sellers/SellersMes'
import SellersPublish from '../pages/sellers/pages/SellersPublish'
import SellersHJudge from '../pages/sellers/pages/SellersHJudge'

import Index from '../pages/index/Index'
import IndexShopping from '../pages/index/components/Shopping'


import ConfirmOrdering from '../pages/index/pages/ConfirmOrdering'

import Publish from '../pages/index/pages/Publish'

import SaleProduct from '../pages/index/pages/SaleProduct'

import Detail from '../pages/index/pages/Detail'

import ContactSeller from '../pages/index/pages/ContactSeller'

import ContactBuyer from '../pages/index/pages/ContactBuyer'
import SearchDetail from '../pages/index/pages/SearchDetail'

import Line1 from '../pages/index/components/Line1'
import Line2 from '../pages/index/components/Line2'
import Line3 from '../pages/index/components/Line3'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      redirect:'/resgister',
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
          redirect:'/assess',
          meta:{
            requireAuth:true,
            active:'/assess'
          },
          children:[{
            path:'/assess',
            component:Assess,
          },
            {
              path:'/goassess',
              component:GoAssess,
            }]
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
          redirect:'/nopay',
          meta:{
            requireAuth:true,
            active:'/nopay'
          },
          children:[{
            path:'/nopay',
            component:NoPay,
          },
            {
              path:'/nosend',
              component:NoSend,
            },
            {
              path:'/send',
              component:Send,
            }]
        },
        {
          path:'/mypublish',
          component:MyPublish,
          redirect:'/nobuy',
          meta:{
            requireAuth:true,
            active:'/mypublish'
          },
          children:[{
            path:'/waitsend',
            component:WaitSend,
          },{
            path:'/alsend',
            component:AlSend,
          },{
            path:'/albuy',
            component:AlBuy,
          },{
            path:'/nobuy',
            component:NoBuy,
          }]
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
      path:'/contact-buyer',
      component:ContactBuyer
    },
    {
      path:'/search-detail',
      component:SearchDetail
    },
    {
      path:'/line-1',
      component:Line1
    },
    {
      path:'/line-2',
      component:Line2
    },
    {
      path:'/line-3',
      component:Line3
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
