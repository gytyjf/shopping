<template>
  <div id="shopcart">
    <nav-bar class="navbar">
      <div slot="center" class="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childCom/CartList'
import CartBottomBar from './childCom/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name:'Shopcart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
 #shopcart {
   height: 100vh;
 }
 .navbar{
     background-color: #FF69B4;
     color: #fff;
 }
</style>