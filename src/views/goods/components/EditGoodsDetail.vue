<template>
  <div class="app-container">
    <el-form ref="postFormRef" :model="postForm" :rules="postFormRules" label-width="120px" label-suffix="：">
    <el-form-item label="标题" prop="title">
        <el-input v-model="postForm.title" />
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input-number v-model="postForm.price" />
      </el-form-item>
      <el-form-item label="大小">
        <el-select v-model="postForm.size" placeholder="请输入大小">
          <el-option
            v-for="item in sizeStatusOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button :loading="loading" type="primary" @click="handleSumbit">提 交</el-button>
        <el-button @click="handleCancel">取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createGoods, updateGoods, getGoodsDetail } from '@/api/goods'
import { isEmpty } from '@/utils'
import _cloneDeep from 'lodash/cloneDeep'
import { sizeStatusOptions } from '../options'

const defaultPostForm = {
  title: '',
  price: 0,
  size: ''
}

export default {
  name: 'EditGoodsDetail',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sizeStatusOptions,
      postForm: _cloneDeep(defaultPostForm),
      postFormRules: {
      },
      loading: false
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.query.id
      this.postForm.id = id
      this.getDetail(this.postForm.id)
    }
  },
  methods: {
    showLoading() {
      this.loading = true
    },
    hideLoading() {
      this.loading = false
    },
    handleSumbit() {
      this.$refs.postFormRef.validate()
      .then(() => {
        // 全部验证通过
        const requestApi = this.isEdit ? updateGoods : createGoods
        let postFormCopy = _cloneDeep(this.postForm)
        this.showLoading()
        requestApi(postFormCopy)
          .then(res => {
            this.$message.success(`${this.isEdit ? '编辑成功' : '新增成功'}`)
            this.$router.push({ name: 'GoodsList', params: { flush: true }})
          })
          .finally(() => {
            this.hideLoading()
          })
      })
      .catch(err => {
        console.log(err)
        return false
      })
    },
    handleCancel() {
      this.$router.back()
    },
    async getDetail(id) {
      const res = await getGoodsDetail(id)
      this.postForm = res.data
    }
  }
}
</script>
