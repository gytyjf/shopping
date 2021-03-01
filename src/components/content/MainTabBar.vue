<template>
  <tab-bar>
    <tab-bar-item path='/home'>
      <img slot="tab-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot='tab-icon-active' src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="tab-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <img slot="tab-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot='tab-icon-active' src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="tab-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/shopcart'>
      <img slot="tab-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot='tab-icon-active' src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="tab-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/user'>
      <img slot="tab-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot='tab-icon-active' src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="tab-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scpoed>
  
</style>