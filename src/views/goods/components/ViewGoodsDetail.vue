<template>
  <div class="app-container">
    <el-descriptions title="用户信息">
      <el-descriptions-item label="标题：">{{ postForm.title }}</el-descriptions-item>
      <el-descriptions-item label="价格：">{{ postForm.price }}</el-descriptions-item>
      <el-descriptions-item label="大小：">{{ displaySize(postForm.size) }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'
import { getGoodsDetail } from '@/api/goods'
import { sizeStatusMap } from '../options'

const defaultPostForm = {
  title: '',
  price: 0,
  size: '',
}

export default {
  data() {
    return {
      postForm: _cloneDeep(defaultPostForm),
      loading: false,
    }
  },
  created() {
    const id = this.$route.query.id
    this.postForm.id = id
    this.getDetail(this.postForm.id)
  },
  methods: {
    async getDetail(id) {
      this.loading = true
      try {
        const res = await getGoodsDetail(id)
        this.postForm = res.data
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    displaySize(size) {
      return sizeStatusMap[size] || ''
    },
  },
}
</script>
