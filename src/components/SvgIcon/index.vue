<template>
  <svg class="app-svg-icon" v-bind="$attrs" aria-hidden="true">
    <use class="use" :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  inheritAttrs: false,
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  }
})
</script>
<style lang="scss" scoped>
.app-svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 10px;
}
</style>
