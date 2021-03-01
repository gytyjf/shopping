<template>
  <div id="detail">
    <detail-nav-bar class="detailnavbar" @btnNavbar="btnNavbar" ref="nav"/>
    <scroll class="content" 
    :pull-up-load="true" 
    :probeType="3" 
    ref="scroll" 
    @btnscroll="contentScroll">
      <detail-swiper :tapImg='tapImg'/>
      <detail-base-info :goods='goods'  />
      <detail-shop-info :shop='shop' />
      <detail-goods-info :detail-info='detailInfo' @imginfo='imginfo' />
      <detail-param-info ref="params" :paramInfo='goodsparams' />
      <detail-comment-info ref="comment" :commentInfo='commentInfo' />
      <goods-list ref="list" :goods='recommendInfo' />
    </scroll>
    <back-top @click.native="backclick" v-show="isshow" />
    <detail-bottom-bar @addToCart='addToCart' class="bottom"/>
  </div>
</template>

<script>
import DetailNavBar from './childCom/DetailNavBar'
import DetailSwiper from './childCom/DetailSwiper'
import DetailBaseInfo from './childCom/DetailBaseInfo'
import DetailShopInfo from './childCom/DetailShopInfo'
import DetailGoodsInfo from './childCom/DetailGoodsInfo'
import DetailParamInfo from './childCom/DetailParamInfo'
import DetailCommentInfo from './childCom/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childCom/DetailBottomBar'


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
import {itemListMixin,backTopMixin} from 'common/mixin'
import { mapActions } from 'vuex'
import { debounce } from 'common/debounce'

import scroll from 'components/content/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

export default {
  name:'Detail',
  mixins:[itemListMixin],
  mixins:[backTopMixin],
  data(){
    return{
      iid:null,
      tapImg:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsparams:{},
      commentInfo:{},
      recommendInfo: [],
      themeTopYs: null,
      currentIndex: 0
    }
  },
  created() {
    //保存传入到iid
    this.iid = this.$route.params.iid;

    //根据iid请求详情页的数据
    getDetail(this.iid).then(res => {
      //获取顶部图片轮播的数据
      const data = res.data.result;
      this.tapImg = data.itemInfo.topImages;
      
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //获取店铺信息对象
      this.shop = new Shop(data.shopInfo)

      //获取商品信息
      this.detailInfo = data.detailInfo
      
      //获取参数信息
      this.goodsparams = new GoodsParam(data.itemParams.info, data.itemParams.rule) 
      
      //获取评论信息
      if(data.rate.cRate !== 0) {
         this.commentInfo = data.rate.list[0];
      }
    })
    //请求推荐数据
    getRecommend().then(res => {
      this.recommendInfo = res.data.data.list;
    })

    // this.themeTopYs=debounce( () => {
    //   this.themeTopYs = [],
    //   this.themeTopYs.push(0),
    //   this.themeTopYs.push(this.$refs.params.$el.offsetTop),
    //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop),
    //   this.themeTopYs.push(this.$refs.list.$el.offsetTop),
    //   this.themeTopYs.push(Number.MAX_VALUE),
    //   console.log(this.themeTopYs)    
    // },200)
 },
  methods:{
     ...mapActions(['addCar']),
     
    btnNavbar(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    imginfo() {
      // this.themeTopYs()
      this.themeTopYs = [],
      this.themeTopYs.push(0),
      this.themeTopYs.push(this.$refs.params.$el.offsetTop),
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop),
      this.themeTopYs.push(this.$refs.list.$el.offsetTop),
      this.themeTopYs.push(Number.MAX_VALUE),
      console.log(this.themeTopYs)
    },
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for(let i = 0; i <length - 1; i++) {
        if(this.currentIndex !== i &&  positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]
        ){
          this.currentIndex = i;
          this.$refs.nav.current = this.currentIndex;
        }
      }

       //回到顶部是否出现
      this.isshow = (-position.y) > 100;
  },
  addToCart() {
    const product = {};
    product.image = this.tapImg[0];
    product.title = this.goods.title;
    product.desc = this.goods.desc;
    product.price = this.goods.realPrice;
    product.iid = this.iid;

    this.addCar(product).then(res => {
      this.$toast.show(res) 
    })
    // this.$store.dispatch('addCar', product).then(res => {
    //   console.log(res)
    // })
  }
  },
  destroyed() {
    this.$bus.$off('itemImageLoad')
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  }
}
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    /* position: absolute;
    top: 44px;
    bottom: 60px;
    left: 0;
    right: 0; */
    height: calc(100% - 44px - 58px);
    overflow: hidden;
  }
  .detailnavbar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>