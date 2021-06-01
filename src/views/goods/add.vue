<template>
  <div>
    <EditGoodsDetail :is-edit="false" />
  </div>
</template>
<script>
import EditGoodsDetail from './components/EditGoodsDetail.vue'
export default {
  name: 'AddGoods',
  components: {
    EditGoodsDetail
  }
}
</script>
