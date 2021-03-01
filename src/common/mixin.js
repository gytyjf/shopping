import {debounce} from './debounce'
export const itemListMixin = {
  data() {
    return {
      itemList: null
    }
  },
  mounted() {
     //3.监听(GoodsItem) item中图片加载完成
     const refresh = debounce(this.$refs.scroll.refresh,200);
     this.itemList = () => {
      refresh()
    }
      this.$bus.$on('itemImageLoad', this.itemList)  
  }
}

export const backTopMixin = {
  data() {
    return {
      isshow:false
    }
  },
  methods:{
     backclick(){
       this.$refs.scroll.scrollTo(0,0,1000)
     }
  }
}
