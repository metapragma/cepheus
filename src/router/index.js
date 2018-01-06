import Vue from 'vue'
import Router from 'vue-router'
import TypeScale from '../pages/type-scale.vue'
import Test from '../pages/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/type-scale',
      name: 'TypeScale',
      component: TypeScale
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
