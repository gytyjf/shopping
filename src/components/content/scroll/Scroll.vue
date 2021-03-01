<template>
  <div ref="wrapper" id="wrap">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{ 
      click:true,
      observeDOM:true,
      pullUpLoad:this.pullUpLoad,
      probeType:this.probeType
    }),
    this.scroll.on('scroll',(position) => {
    //  if(this.scroll.probeType == 2 || this.scroll.probeType == 3) {
       this.$emit('btnscroll',position)
    // }
    })
    this.scroll.on('pullingUp',() => {
      // if(this.scroll.pullUpLoad) {
       this.$emit('btnpull')
      // }
    })
  },
  methods:{
    scrollTo(x,y,time=300){
     this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    },
    getscrollY(){
      return  this.scroll ? this.scroll.y : 0 
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>

</style>