<template>
  <div>
    <Page>
     
      <article slot="introduction" class="pa3 ph5-ns">
        <h3 class="f6 ttu tracked mt0">Text Align</h3>
        <p class="measure f4 f3-ns lh-copy">
          Designing for readability across infinite screen-sizes
          often times requires setting elements to have different text-alignments across breakpoints.
        </p>
        <p class="measure f5 f4-ns lh-copy">
          These are simple utilities for setting text-alignment to the left, right, or center of an element.
        </p>
      </article>

      <div slot="examples" class="ph3 ph5-ns pt4 pb5">
        <h3 class="f5 mb4 pb2 bb">Examples</h3>
        <code class="f6">&lt;p class="tl"&gt;Aligned Left&lt;/p&gt;</code>
        <p class="tl measure bg-black-05">
          Aligned Left
        </p>
        <code class="f6">&lt;p class="tr"&gt;Aligned Right&lt;/p&gt;</code>
        <p class="tr measure bg-black-05">
          Aligned Right
        </p>
        <code class="f6">&lt;p class="tc"&gt;Aligned Center&lt;/p&gt;</code>
        <p class="tc measure bg-black-05">
          Aligned to the center
        </p>
        <code class="f6">&lt;p class="tj"&gt;Justified Alignment&lt;/p&gt;</code>
        <p class="tj measure bg-black-05 pa3">
          justified—text is aligned along the left margin, and letter- and
          word-spacing is adjusted so that the text falls flush with both
          margins, also known as fully justified or full justification;
        </p>

      </div>

      <div slot="reference" class="mt5">
        <h4 class="f6 fw6">Reference</h4>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" class="link fw6 blue dim">MDN - Text Align</a>
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



