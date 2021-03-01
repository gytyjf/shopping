<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center" class="center">购物街</div>
    </nav-bar>
    <tab-control 
     :controls="['流行','新款','精选']" 
     class="tabControl" 
     @tabclick='btnclick' 
     v-show="isFixed"
     ref="tabControl1"
     />
   <scroll class="content" ref="scroll" :probeType="3" :pull-up-load="true" @btnscroll="btnscroll" @btnpull="btnpull">
    <swiper :banner='banner' @swiperImgLoad='swiperImgLoad'/>
    <recommend-view :recommend='recommend' />
    <tab-control 
    :controls="['流行','新款','精选']" 
    @tabclick='btnclick' 
    ref="tabControl2"/>
    <goods-list :goods="goods[current].list" />
   </scroll>
   <back-top @click.native="backclick" v-show="isshow" />
  </div>
</template>

<script>
import swiper from './childCom/swiper'
import RecommendView from './childCom/RecommendView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import scroll from 'components/content/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {itemListMixin, backTopMixin} from 'common/mixin'
export default {
  name:'home',
  mixins:[itemListMixin],
  mixins:[backTopMixin],
  data(){
    return{
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      current: 'pop',
      tabOffsetTop: 0,
      isFixed:false,
      saveY:0
    }
  },
  methods:{
     btnclick(index){
       switch(index){
         case 0:
           this.current = 'pop'
           break
         case 1:
           this.current = 'new'
           break
         case 2:
           this.current = 'sell' 
       }
      this.$refs.tabControl1.contronum = index;
      this.$refs.tabControl2.contronum = index
     },
     btnscroll(position){
       //回到顶部是否出现
       this.isshow = (-position.y) > 100;

       this.isFixed = (-position.y) > this.tabOffsetTop
     },
     btnpull(){
       this.getHomeGoods(this.current)
       this.$refs.scroll.finishPullUp()
     },
    /** 
     * 网络请求的方法
    */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list);        
        this.goods[type].page += 1 ;
        this.$refs.scroll.finishPullUp()
      })
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop)
    }
  },
  created(){
    //1.请求多个数据
    this.getHomeMultidata();
    
    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  activated(){
     this.$refs.scroll.scrollTo(0,this.saveY,0);
     this.$refs.scroll.refresh()
  },
  deactivated() {
     this.saveY = this.$refs.scroll.getscrollY();
     this.$bus.$off('itemImageLoad')
  },
  components: {
    NavBar,
    swiper,
    RecommendView,
    TabControl,
    GoodsList,
    scroll,
    BackTop
  }
}
</script>

<style scoped>
 #home{
   height: 100vh;
   position: relative;
 }
 /* .tab-control {
  position: sticky;
  top: 44px;
 } */
 .navbar{
     background-color: #FF69B4;
 }
 .center{
   color: #fff;
 }
 .content{ 
   /* position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0; */
   height: calc(100% - 44px - 49px);
   overflow: hidden;
 }
 .tabControl{
   position: relative;
   z-index: 9;
 }
</style>