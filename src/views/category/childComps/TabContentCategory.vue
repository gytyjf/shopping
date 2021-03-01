<template>
  <div>
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
  // import GridView from 'components/common/gridView/GridView'

  export default {
    name: "TabContentCategory",
    components: {
      // GridView
    },
    props: {
      subcategories: {
        type: Object,
        default() {
          return []
        }
      }
    },
    created() {
      // console.log(this.subcategories)
    }
  }
</script>

<style scoped>
  .item {
    width: 30%;
    font-size: 12px;
    margin-top: 15px;
  }
  a {
    text-decoration:none;
  }
  .item-img {
    width: 80%;
    margin-left: 10px;
  }
  .item-text {
    text-align: center;
    color: #666;
  }
</style>
