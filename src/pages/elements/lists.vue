<template>
  <div>
    <Page>
     
      <article slot="introduction" class="bt b--black-10 pa3 ph5-ns">
        <p class="measure f4 f3-ns lh-copy">
          A simple reset for list-style-type to remove the default bullets.
        </p>
      </article>

      <div slot="examples" class="ph3 ph5-ns pt4 pb5">
        <code class="f6">&lt;ul class="list pl0"&gt;</code>
        <ul class="list pl0 mt2">
          <li>Apples</li>
          <li>Oranges</li>
          <li>Banana</li>
          <li>Golf balls</li>
        </ul>
        <code class="f6">&lt;ol class="list pl0"&gt;</code>
        <ol class="list pl0 mt2">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ol>
        <div class="mt5 cf">
        </div>
      </div>

      <div slot="reference" class="mt3 mb5 ph3">
        <h1 class="f6 f5-ns ttu tracked fw6 gray">Reference</h1>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type" class="f5 f4-ns link db fw6 blue dim">MDN - List Style Type</a>
      </div>

    </Page>
  </div>
</template>

<script>
import Page from '../../components/Page.vue'

export default {
  data () {
    return {}
  }, 
  components: {
    Page, 
  }
}
</script>

<style lang="scss" scoped>

</style>



