import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const User = () => import('views/user/User')
const Detail = () => import('views/detail/Detail')

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      title:'商品页'
    }
  },
  {
    path:'/shopcart',
    component:Shopcart,
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/user',
    component:User,
    meta:{
      title:'我的'
    }
  },
  {
    path:'/detail/:iid',
    component:Detail,
    meta:{
      title:'详情页'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) =>{
  document.title = to.meta.title;
  next()
})

export default router