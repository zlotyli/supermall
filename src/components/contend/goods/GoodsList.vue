<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style>
.goods{
  display: flex;
  /*不包裹 使它自动决定一行要加多少个 */
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>