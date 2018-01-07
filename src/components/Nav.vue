<template>
  <div class="ph3 ph5-ns pv3 mb2 mb5-ns bb b--black-10">
    <div class="nowrap mw9 center">
      <template v-if="at === `introduction`">
        <a @click="scroll('examples')" class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" title="Examples">Examples</a>
        <a @click="scroll('reference')" class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" title="Reference">Reference</a>
      </template>
      <template v-else-if="at === `examples`">
        <a @click="scroll('introduction')" class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" title="Introduction">Introduction</a>
        <a @click="scroll('reference')" class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" title="Reference">Reference</a>
      </template>
      <template v-else>
        <a @click="scroll('introduction')" class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" title="Introduction">Introduction</a>
        <a @click="scroll('examples')" class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" title="Examples">Examples</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }, 
  props: {
    at: {
      type: String, 
      required: true,
      validator (value) {
        const values = ['introduction', 'examples', 'reference']
        if (values.includes(value) === false) {
          return false 
        }

        return true
      }
    }
  },
  methods: {
    scroll (target) {
      console.log(target)
      document.querySelector(`#${target}`).scrollIntoView({ 
        behavior: 'smooth',
        alignTop: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.width {
  width: 100vw;
}
</style>