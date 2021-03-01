<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.image" alt="" @load="imageload">
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  props:{
    banner:{
      type:Array,
       default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false
    }
  },
  methods:{
    imageload(){
      if(!this.isLoad) {
        this.$emit('swiperImgLoad');
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
  .mint-swipe {
      height: 200px;
      color: #fff;
    }
  .mint-swipe-items-wrap img {
      width: 100%;
      height: 100%;
    }
</style>