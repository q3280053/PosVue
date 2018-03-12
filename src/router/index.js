import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/pos'
import Page1 from '@/components/page/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component:Pos
    },
    {
      path: '/page1',
      name:'page1',    
      component: Page1
    }
  ]
})
