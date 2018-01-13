import Vue from 'vue'
import Router from 'vue-router'

import Page from '../components/Page.vue'

// import Typography from '../pages/typography/typography.vue'
// import TypeScale from '../pages/typography/type-scale.vue'
// import Measure from '../pages/typography/measure.vue'
// import LineHeight from '../pages/typography/line-height.vue'
// import Tracking from '../pages/typography/tracking.vue'
// import FontWeight from '../pages/typography/font-weight.vue'
// import FontStyle from '../pages/typography/font-style.vue'
// import VerticalAlign from '../pages/typography/vertical-align.vue'
// import TextAlign from '../pages/typography/text-align.vue'
// import TextTransform from '../pages/typography/text-transform.vue'
// import TextDecoration from '../pages/typography/text-decoration.vue'
// import WhiteSpace from '../pages/typography/white-space.vue'
// import FontFamily from '../pages/typography/font-family.vue'

// import Elements from '../pages/elements/elements.vue'
// import Links from '../pages/elements/links.vue'
// import Lists from '../pages/elements/lists.vue'
// import Forms from '../pages/elements/forms.vue'
// import Tables from '../pages/elements/tables.vue'

// import Theming from '../pages/theming/theming.vue'
// import Skins from '../pages/theming/skins.vue'
// import SkinsPseudo from '../pages/theming/skins-pseudo.vue'
// import Hovers from '../pages/theming/hovers.vue'
// import BackgroundSize from '../pages/theming/background-size.vue'
// import Borders from '../pages/theming/borders.vue'
// import BorderRadius from '../pages/theming/border-radius.vue'
// import BoxShadow from '../pages/theming/box-shadow.vue'
// import Opacity from '../pages/theming/opacity.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/:topic/:module', component: Page }
  ]
})
