<template>
  <div class="ph3 ph5-ns w-100 pv3 mb2 mb5-ns bb b--black-10 w-100">
    <div class="nowrap mw9 center">
      <template v-if="at === `introduction`">
        <a class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" href="#examples" title="Type">Examples</a>
        <a class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" href="#reference" title="Measure">Reference</a>
      </template>
      <template v-else-if="at === `examples`">
        <a class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" href="#introduction" title="Type">Introduction</a>
        <a class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" href="#reference" title="Measure">Reference</a>
      </template>
      <template v-else>
        <a class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" href="#introduction" title="Type">Introduction</a>
        <a class="f5 fw6 dim link black-70 pb2-ns mr2 mr3-m mr4-l" href="#examples" title="Measure">Examples</a>
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
        if (!(values.includes(value))) {
          return false 
        }

        return true
      }
    }
  }
}
</script>

