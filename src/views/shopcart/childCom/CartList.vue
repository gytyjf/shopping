<template>
  <div id="cartlist">
    <scroll :pull-up-load="true" class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info='item' />
    </scroll>
  </div>
</template>

<script>
import scroll from 'components/content/scroll/Scroll'
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  computed:{
    ...mapGetters(['cartList'])
  },
  components:{
    scroll,
    CartListItem
  }
}
</script>

<style scoped>
  #cartlist {
    height: calc(100% - 44px - 49px - 40px);
  }
  .content {
    overflow: hidden;
    height: 100%;
  }
</style>