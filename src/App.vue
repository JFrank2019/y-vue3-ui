<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import router from './router'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)
    provide('asideVisible', asideVisible) // set
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false
      }
    })
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: rgba(144, 147, 153, 0.3);
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
}
</style>
