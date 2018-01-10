import Vue from 'vue'
import Router from 'vue-router'
import TypeScale from '../pages/typography/type-scale.vue'
import Measure from '../pages/typography/measure.vue'
import LineHeight from '../pages/typography/line-height.vue'

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
      name: 'Measure',
      component: Measure
    },
    {
      path: '/line-height',
      name: 'LineHeight',
      component: LineHeight
    }
  ]
})
