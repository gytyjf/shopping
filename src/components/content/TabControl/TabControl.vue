<template>
  <div class="tabc">
    <div v-for="(item,index) in controls" :key="index" class="tabco" @click="btncolor(index)">
      <span :class="{active : contronum == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      contronum: 0
    }
  },
  props:{
    controls:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    btncolor(index){
      this.contronum = index;
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style scoped>
  .tabc{
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    background: #fff;
  }
  .tabco{
    flex: 1;
    text-align: center;
  }
  .tabco span{
     padding: 10px;
  }
  .active{
    color: red;
    border-bottom: 3px solid red;
  }
</style>