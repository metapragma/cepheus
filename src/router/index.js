import Vue from 'vue'
import Router from 'vue-router'

import Typography from '../pages/typography/typography.vue'
import TypeScale from '../pages/typography/type-scale.vue'
import Measure from '../pages/typography/measure.vue'
import LineHeight from '../pages/typography/line-height.vue'
import Tracking from '../pages/typography/tracking.vue'
import FontWeight from '../pages/typography/font-weight.vue'
import FontStyle from '../pages/typography/font-style.vue'
import VerticalAlign from '../pages/typography/vertical-align.vue'
import TextAlign from '../pages/typography/text-align.vue'
import TextTransform from '../pages/typography/text-transform.vue'
import TextDecoration from '../pages/typography/text-decoration.vue'
import WhiteSpace from '../pages/typography/white-space.vue'
import FontFamily from '../pages/typography/font-family.vue'

import Elements from '../pages/elements/elements.vue'
import Links from '../pages/elements/links.vue'
import Lists from '../pages/elements/lists.vue'
import Forms from '../pages/elements/forms.vue'
import Tables from '../pages/elements/tables.vue'


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
        },
        {
          path: 'tracking',
          name: 'Tracking',
          component: Tracking
        },
        {
          path: 'font-weight',
          name: 'Font Weight',
          component: FontWeight
        },
        {
          path: 'font-style',
          name: 'Font Style',
          component: FontStyle
        },
        {
          path: 'vertical-align',
          name: 'Vertical Align',
          component: VerticalAlign
        },
        {
          path: 'text-align',
          name: 'Text Align',
          component: TextAlign
        },
        {
          path: 'text-transform',
          name: 'Text Transform',
          component: TextTransform
        },
        {
          path: 'text-decoration',
          name: 'Text Decoration',
          component: TextDecoration
        },
        {
          path: 'white-space',
          name: 'White Space',
          component: WhiteSpace
        },
        {
          path: 'font-family',
          name: 'Font Family',
          component: FontFamily
        }
      ]
    },
    { path: '/elements', component: Elements,
      children: [
        {
          path: 'links',
          name: 'Links',
          component: Links
        },
        {
          path: 'lists',
          name: 'Lists',
          component: Lists
        },
        {
          path: 'forms',
          name: 'Forms',
          component: Forms
        },
        {
          path: 'tables',
          name: 'Tables',
          component: Tables
        },  
      ]
    }
  ]
})
