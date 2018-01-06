import Vue from 'vue'
import Router from 'vue-router'
import TypeScale from '../pages/type-scale.vue'
import Measure from '../pages/measure.vue'

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
      path: '/measure',
      name: 'Test',
      component: Measure
    }
  ]
})
