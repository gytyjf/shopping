<template>
  <div class="tab-item" @click="btn">
    <div v-if="!isActive">
    <slot name="tab-icon"></slot>
    </div>
    <div v-else>
    <slot name="tab-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-text"></slot>
    </div>   
  </div>
</template>

<script>
export default {
   data(){
     return{
      //  isActive: true
     }
   },
   computed:{
     isActive(){
       return this.$route.path.indexOf(this.path) !== -1
     },
     activeStyle(){
       return this.isActive ? {color: this.activeColor} : {}
     }
   },
   props:{
     path: String,
     activeColor:{
       type: String,
       default: "red"
     }
   },
   methods:{
     btn(){
       this.$router.replace(this.path)
     }
   }
}
</script>

<style scoped> 
   .tab-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
  }
  .tab-item img{
    width: 22px;
    height: 22px;
  }
</style>