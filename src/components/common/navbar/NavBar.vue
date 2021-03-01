<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>
  .navbar{
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    /* position: fixed;
    top: 0;
    right: 0;
    left: 0;*/
    position: relative;
    z-index: 10; 
    box-shadow: 0 0 1px #ccc;
  }
  .left, .right{
    flex: 1;
  }
  .center{
    flex: 4;
    text-align: center;
    font-family: '微软雅黑';
    font-size: 18px;
  }
</style>