import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import huangShan from '../eidts/huangShan'
import Admin from '../views/admin'

import Logins from '../login_register/logins'
import Register from '../login_register/register'

import Ehrn  from '../eidts/hotel_reservation'
import Etis  from '../eidts/ticket_inquires'
import Ehcy  from '../eidts/hot_city'
import Epas  from '../eidts/partners'
import Echl  from '../eidts/common_hotel'
import Ehgg  from '../eidts/hotel_groupbuying'

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
      path:'/huangShan',
      name:'huangShan',
      component:huangShan
    },
    {
    	path:'/logins',
    	name:'logins',
    	component:Logins
    },
    {
    	path:'/register',
    	name:'register',
    	component:Register
    },
    {
      path: '/eidts',
      name: 'eidts',
      component: Admin,
      children:[
        {path:'hotel_reservation',name:'hotel_reservation',alias:'酒店预订',component:Ehrn,hidden:true},
        {path:'ticket_inquires',name:'ticket_inquires',alias:'机票查询',component:Etis,hidden:true},
        {path:'hotel_groupbuying',name:'hotel_groupbuying',alias:'酒店团购',component:Ehgg,hidden:true},
        {path:'hot_city',name:'hot_city',alias:'热门城市',component:Ehcy,hidden:true},
        {path:'partners',name:'partners',alias:'合作伙伴',component:Epas,hidden:true},
        {path:'common_hotel',name:'common_hotel',alias:'常见酒店',component:Echl,hidden:true}
      ]
    }
  ]
})
export default router;