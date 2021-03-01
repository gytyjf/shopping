<template>
  <div class="total" v-show="isShow">
     {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      isShow:false,
      message:'',
    }
  },
  methods:{
     show(message,duration = 2000) {
       this.message = message;
       this.isShow = true;
       setTimeout( () => {
         this.message = '';
         this.isShow = false
       },duration)
     }
  }
}
</script>

<style scoped>
  .total {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    padding: 8px 15px;
    z-index: 999;
  }
</style>
