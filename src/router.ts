import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue'

const history = createWebHashHistory()

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'

const md = fileName => {
  return h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName })
}

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md('intro') },
        { path: 'get-started', component: md('get-started') },
        { path: 'install', component: md('install') },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo }
      ]
    }
  ]
})

router.afterEach(() => {
  console.log('路由切换了')
})

export default router
