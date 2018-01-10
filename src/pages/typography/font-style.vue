<template>
  <div>
    <Page>
     
      <article slot="introduction" class="pa3 ph5-ns">
        <p class="measure f4 f3-ns lh-copy">
          Single purpose classes to set the font-style of any element at any breakpoint.
        </p>
        <p class="measure f5 f4-ns lh-copy">
          Italics can be used to emphasize a piece of content. Some common uses of
          italics include: titles, vehicle names, letters of the alphabet, scientific terms, and quotes.
        </p>
      </article>

      <div slot="examples" class="ph3 ph5-ns pt4 pb5">
        <code class="f6">
          &lt;p class="i"&gt;&lt;/p&gt;
        </code>
        <p class="i mb4">
          Readers want what is important to be clearly laid out; they will not read
          what is too troublesome.
        </p>
        <code class="f6">
          &lt;p class="fs-normal"&gt;&lt;/p&gt;
        </code>
        <p class="fs-normal">
          A quote from Jan Tschichold about typography.
        </p>
        
        <div class="mt5">
          <h4 class="f6 fw6">Reference</h4>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight" class="link fw6 blue dim">MDN - Font Weight</a>
        </div>
      </div>

      <div slot="reference" class="mt5">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight" class="link fw6 blue dim">MDN - Font Weight</a>
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



