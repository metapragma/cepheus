<template>
  <div>
    <Page>
     
      <article slot="introduction" class="pa3 ph5-ns">
        <p class="measure f4 f3-ns lh-copy mt2">
          Letter-spacing is the consistent white-space between letters in a piece of text.
          In typography, letter-spacing is commonly known as tracking.
          Text that is set to uppercase should be tracked to improve readability.
        </p>
        <p class="f4 lh-copy">
          <i class="db mv2">Lowercase text should never be tracked.</i>
        </p>
        <p class="f4 lh-copy">
          For some larger text, depending on the typeface, a negative tracking might be desirable.
        </p>
        <p class="measure f4 lh-copy">
          There are three possible values to choose from when tracking uppercased text:
        </p>
        <code class="pre f6">
        .tracked       { letter-spacing:  .1em; }
        .tracked-tight { letter-spacing: -.05em; }
        .tracked-mega  { letter-spacing:  .25em; }
        </code>
      </article>

      <div slot="examples" class="ph3 ph5-ns pt4 pb5">
        <h3 class="f5 fw4 sans-serif">Default</h3>
        <h4 class="f1 ttu b mt0">Title Example</h4>
        <code class="f6 fw4 mb3 mt4 db">
          &lt;h4 class="f1 ttu tracked mt0"&gt;Title Example&lt;/h4&gt;
        </code>
        <h4 class="f1 ttu tracked mt0">Title Example</h4>

        <code class="f6 fw4 mb3 mt4 db">
          &lt;h4 class="f1 ttu tracked-mega mt0"&gt;Title Example&lt;/h4&gt;
        </code>
        <h4 class="f1 ttu tracked-mega b mt0">Title Example</h4>

        <code class="f6 fw4 mb3 mt4 db">
          &lt;h4 class="f1 ttu tracked-tight mt0"&gt;Title Example&lt;/h4&gt;
        </code>
        <h4 class="f-headline tracked-tight b mt0">title example</h4>
        <div class="mt5 cf">
          <div class="dib mr4">
            <h4 class="f6 fw6">Previous</h4>
            <a href="/docs/typography/line-height/" class="link fw6 blue dim">Line Height</a>
          </div>
          <div class="dib">
            <h4 class="f6 fw6">Next</h4>
            <a href="/docs/typography/font-weight/" class="link fw6 blue dim">Font Weights</a>
          </div>
        </div>
        <div class="mt5">
          <h4 class="f6 fw6">Reference</h4>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing" class="link fw6 blue dim">MDN - Letter Spacing</a>
        </div>
      </div>

      <div class="mb5 mt3 ph3">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing" class="link fw6 blue dim">MDN - Letter Spacing</a>
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



