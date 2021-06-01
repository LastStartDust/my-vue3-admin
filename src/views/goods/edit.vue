<template>
  <div>
    <EditGoodsDetail :is-edit="true" />
  </div>
</template>
<script>
import EditGoodsDetail from './components/EditGoodsDetail.vue'
export default {
  name: 'EditGoods',
  components: {
    EditGoodsDetail
  }
}
</script>
