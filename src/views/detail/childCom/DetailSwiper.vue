<template>
     <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in tapImg" :key="item">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  props:{
    tapImg:{
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
  .mint-swipe {
      height: 400px;
      color: #fff;
    }
  .mint-swipe-items-wrap img {
      width: 100%;
      height: 100%;
    }
</style>