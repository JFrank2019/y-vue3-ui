<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>咕噜UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav }
}
</script>

<style lang="scss" scoped>
$white: #f6f8fb;
$border-radius: 4px;
$color: #f0fbff;

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(149, 178, 253, 1) 0%, rgba(98, 100, 249, 1) 100%);
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $white;
      color: #6762fa;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>
