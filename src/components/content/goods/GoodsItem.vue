<template>
  <div id="goodsitem" @click="ItemClick">
    <img v-lazy="showimg" alt="" @load="imageLoad" >
    <div class="goodsinfo">
      <p>{{goods.title}}</p>
        <span class="price">{{goods.price}}</span>
        <span>收藏</span>
        <span class="cfav">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  props:{
   goods:{
     type: Object,
     default() {
      return {}
    }
   }
  },
  methods:{
    imageLoad() {
      this.$bus.$emit('itemImageLoad');
    },
    ItemClick() {
      this.$router.push('/detail/' + this.goods.iid)
    }
  },
  computed:{
    showimg() {
      return this.goods.image || this.goods.show.img
    }
  }
}
</script>

<style scoped>
  #goodsitem {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  #goodsitem img {
    width: 100%;
    border-radius: 8px;
  }
  .goodsinfo {
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
    text-align: center;
  }
  .goodsinfo p {
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* .price-star {
    display: inline-block;
  } */
  .price{
    color: #FF69B4;
  }
</style>