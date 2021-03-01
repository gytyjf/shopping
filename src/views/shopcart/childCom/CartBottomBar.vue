<template>
  <div class="check-bottom">
    <div class="check-content">
      <!-- <check-button class="check-button" @click.native="checkBtnClick" v-model="isSelectAll" /> -->
      <check-button class="check-button" @click.native="checkBtnClick" :ischecked='isSelectAll' />
      <span>全选</span>
    </div>
    <span class="check-add">合计￥{{totalPrice}}</span>
    <span class="check-end">去结算({{checkLength}})</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

import { mapGetters } from 'vuex'
export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),

    totalPrice() {
      return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
          }, 0).toFixed(2)    
    },
    checkLength() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
      // isSelectAll: function () {
      //   return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
      // }
    isSelectAll() {
      if(this.cartList.length === 0) return false;
      return !(this.cartList.find(item => !item.checked))
    }
  },
    methods: {
      checkBtnClick() {
        // 1.判断是否有未选中的按钮
        // let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);

        // 2.有未选中的内容, 则全部选中
        if (!this.isSelectAll) {
          this.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.cartList.forEach(item => {
            item.checked = false;
          });
        }
      }
    }
}
</script>

<style scoped>
  .check-bottom {
    height: 40px;
    background-color: #eee;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .check-content {
    display: flex;
    flex: 1;
  }
  .check-button {
    margin-left: 20px;
  }
  .check-add {
    flex: 1;
  }
  .check-end {
    flex: 1;
    padding: 10px 0;
    background-color: orangered;
  }
</style>




