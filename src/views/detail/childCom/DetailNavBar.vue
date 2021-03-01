<template>
  <div id="detailnav">
    <nav-bar>
      <div slot="left" @click="btnback" class="backslot">
        <div class="back"></div>
      </div>
      <div slot="center" class="detailnav">
        <div v-for="(item,index) in title" 
        :key="index" 
        class="detailitem"
        :class="{active: current == index}" 
        @click="btndetail(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return{
       title:['商品','参数','评论','推荐'],
       current:0
    }
  },
  methods:{
    btnback(){
      this.$router.back()
    },
    btndetail(index) {
      this.current = index;
      this.$emit('btnNavbar', index)
    }
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .detailnav{
    display: flex;
  }
  .detailitem{
    flex: 1;
    font-size: 15px;
  }
  .backslot{
    position: relative;
  }
  .back{
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    margin-left: 10px;
  }
  .active{
    color: #FF69B4;
  }
</style>