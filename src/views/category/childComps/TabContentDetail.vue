<template>
  <div>
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods="item"></goods-list-item>
  </div>
</template>

<script>
  // import GridView from 'components/common/gridView/GridView'
  import GoodsListItem from 'views/home/childCom/GoodsListItem'

  export default {
    name: "TabContentDetail",
    components: {
      // GridView,
      GoodsListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
