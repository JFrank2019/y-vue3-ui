<template>
  <div>
    <h1>导航栏</h1>
    <router-link to="/">Frank</router-link> |
    <router-link to="/frank2">Frank2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
