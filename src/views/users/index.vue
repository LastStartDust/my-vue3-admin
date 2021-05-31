<template>
  <div>
    <div>
      用户列表页面
    </div>
    <div>
      <p v-if="list">{{ list }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      return new Promise((resolve, reject) => {
        const mockList = new Array(10).fill(1).map((_, index) => index +1)
        this.list = Object.assign([], mockList)
        resolve(mockList)
      })
    }
  }
}
</script>
