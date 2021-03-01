<template>
  <div class="recom">
    <div v-for="(item,index) in recommend" :key="index" class="recommend">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recom{
    display: flex;
    width: 100%;
    padding: 15px 0;
    border-bottom: 10px solid #F5F5F5;
  }
  .recommend{
    flex: 1;
    text-align: center;
  }
  .recommend img{
    width: 65px;
    height: 65px;
  }
</style>