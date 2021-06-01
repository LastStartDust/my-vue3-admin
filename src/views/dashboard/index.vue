<template>
  <div class="dashboard-container">
    <div>首页</div>
    <div>设备：{{ device }}</div>
    <!-- <div class="dashboard-text">用户名: {{ name }}</div>
    <div class="dashboard-text">角色列表: <span v-for="role in roles" :key="role">{{ role }}</span></div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      // 'name',
      // 'roles',
      'device'
    ])
  },
  created() {

  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
