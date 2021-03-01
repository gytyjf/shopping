<template>
  <div id="goodslist">
    <goods-item :goods="item" v-for="(item,index) in goods" :key="index" />
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  },
   components:{
   GoodsItem
 },
 
}
</script>

<style scoped>
 #goodslist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
 }
</style>