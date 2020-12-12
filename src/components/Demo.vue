<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <div v-if="!codeVisible" @click="showCode">
        <span class="text">显示代码</span>
      </div>
      <div v-else @click="hideCode">
        <span class="text">收起代码</span>
      </div>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-css" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import { computed, ref } from 'vue'
const Prism = (window as any).Prism
export default {
  props: {
    component: Object
  },
  components: { Button },
  setup(props) {
    const codeVisible = ref(false)
    const showCode = () => (codeVisible.value = true)
    const hideCode = () => (codeVisible.value = false)
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    return {
      Prism,
      codeVisible,
      showCode,
      hideCode,
      html
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
$border-color: #ebebeb;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    text-align: center;
    padding: 8px 16px;
    border-top: 1px solid $border-color;
    background: #f9fafc;
    color: $main-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px solid $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
