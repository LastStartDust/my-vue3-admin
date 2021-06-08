<script>
import { h } from 'vue';
export default {
  render() {
    return h() // avoid warning message
  },
  beforeRouteEnter (to, from, next) {
    const { path, params, query } = from
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.$router.replace({
        path: path,
        params,
        query
      })
    })
  }
}
</script>
