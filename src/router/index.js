import Vue from 'vue'
import Router from 'vue-router'
import Typography from '../pages/typography/typography.vue'
import TypeScale from '../pages/typography/type-scale.vue'
import Measure from '../pages/typography/measure.vue'
import LineHeight from '../pages/typography/line-height.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/typography', component: Typography,
      children: [
        {
          path: 'type-scale',
          name: 'Type Scale',
          component: TypeScale
        },
        {
          path: 'measure',
          name: 'Measure',
          component: Measure
        },
        {
          path: 'line-height',
          name: 'Line Height',
          component: LineHeight
        }
      ]
    }
  ]
})
