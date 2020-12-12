<template>
  <div class="layout">
    <Topnav toggle-menu-button-visible class="nav" />
    <div class="content">
      <aside :class="{ open: asideVisible }">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible') // get
    return {
      asideVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
$aside-index: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    display: flex;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    > aside {
      flex-shrink: 0;
      background: #f9f9f9;
      width: 150px;
      position: fixed;
      top: 50px;
      left: 0;
      bottom: 0;
      overflow-x: hidden;
      overflow-y: auto;
      height: 100%;
      z-index: $aside-index;
      transition: 0.4s cubic-bezier(0.4, 0, 0, 1);

      @media (max-width: 500px) {
        transform: translateX(-150px);
        &.open {
          transform: translateX(0);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
      }

      > h2 {
        padding: 0 16px;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
      }
      > ol {
        > li {
          height: 40px;
          line-height: 40px;
          &:hover {
            color: $main-color;
          }
          > a {
            font-size: 14px;
            display: block;
            padding: 0 16px;
            text-decoration: none;
          }
          .router-link-active {
            position: relative;
            color: $main-color;
            background: linear-gradient(90deg, rgba(223, 229, 246, 1) 0%, rgba(183, 193, 249, 1) 100%);
            &::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              border-right: 3px solid $main-color;
            }
          }
        }
      }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      overflow: auto;
    }
  }
}
</style>
