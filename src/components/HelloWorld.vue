<template>
  <el-button type="primary" @click="handleClick">测试element-plus按钮</el-button>
  
  <el-form ref="form" :model="postForm" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="postForm.usename"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="postForm.password"></el-input>
    </el-form-item>
    <p class="message">
      <span>测试文本</span>
    </p>
  </el-form>

</template>

<script>
export default {
  data() {
    return {
      postForm: {
        usename: '',
  password: ''
      }
    }
  },
  methods: {
    handleClick(v) {
      console.log(v)
      // Element Plus 为 app.config.globalProperties 添加了全局方法 $message
      this.$message({
        type: "success",
        message: JSON.stringify(this.postForm) 
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.message {
  span {
    color: skyblue;
  }
}
</style>
