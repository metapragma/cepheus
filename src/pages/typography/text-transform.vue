<template>
  <div>
    <Page>
     
      <article slot="introduction" class="pa3 ph5-ns">
        <p class="measure f4 f3-ns lh-copy">
          Use these classes to set the capitalization of text.
        </p>
        <p class="measure f5 f4-ns lh-copy">
          If you use the uppercase class, don’t forget to combine it with a tracking utility from the letter-spacing module.
        </p>
      </article>

      <div slot="examples" class="ph3 ph5-ns pt4 pb5">
        <h3 class="f5 mb4 pb2 bb">Examples</h3>
        <code class="f6 db"> &lt;p class="ttu tracked"&gt;Uppercase&lt;/p&gt; </code>
        <p class="fw4 ttu tracked mb0">Uppercase</p>

        <code class="f6 db mt4"> &lt;p class="ttl"&gt;LOWERCASE&lt;/p&gt; </code>
        <p class="fw4 ttl mb0">LOWERCASE</p>

        <code class="f6 db mt4"> &lt;p class="ttc"&gt;Capitalize&lt;/p&gt; </code>
        <p class="fw4 ttc mb0">capitalize multiple words</p>
      </div>

      <div slot="reference" class="mb5 mt3 ph3">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform" class="link fw6 blue dim">MDN - Text Transform</a>
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



