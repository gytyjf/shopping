<template>
  <div id="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'tab'
}
</script>

<style scoped>
    #tab{
    height: 49px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 2px reba(100,100,100,.5);
  }
</style>