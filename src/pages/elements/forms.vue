<template>
  <div>
    <Page>
     
      <article slot="introduction" class="pa3 ph5-ns">
        <p class="measure f4 f3-ns lh-copy">
          Tachyons has some basic form control resets to remove default styles for mobile devices.
        </p>
      </article>

      <div slot="examples" class="ph3 ph5-ns pt4 pb5">
        <form>
          <label for="inputReset">
            <code class="f6 db">input-reset</code>
          </label>
          <input id="inputReset" type="text" class="input-reset">
        </form>
        <div class="mt5 cf">
        </div>
      </div>

      <div slot="reference" class="mt3 mt5 ph3">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover" class="link db fw6 blue dim">MDN - Hover</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/%3Afocus" class="link db fw6 blue dim">MDN - Focus</a>
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



