<template>
  <div>
    <Header />
    <header class="db h2"> 
      <div class="fl w-50-l pr4-l h1 pa3">
        <h3 class="f5 ttu tracked mt0 black-70">{{ $route.params.page }}</h3>
      </div>
    </header>
    <main class="bg-white black-70">

      <!-- Introduction start -->
      <Nav at="introduction" />
      <h3 id="introduction" class="f4 b tl mt3 mb1 pl3">Introduction</h3>
        <div>
          <article class="bt b--black-10 pa3 ph5-ns">
            {{ markup[topic][module].intro }}
          </article>
        </div>
        <!-- Introduction End -->

        <!-- Examples start -->
        <Nav at="examples" />
        <h3 id="examples" class="f4 mb4 mb5-ns mt3 mt6-ns pb2 pl3">Examples</h3>
        {{ markup[topic][module].examples }}
        <!-- Examples End -->

        <!-- Reference start -->
        <Nav at="reference" class="mv3" />
        <div class="mt3">
          <h3 id="reference" class="f4 b pl3">Reference</h3>
          <div slot="reference" class="mt3 mb5 ph3">
            {{ markup[topic][module].reference }}
          </div>
          <!-- Reference End -->
        </div>
     
    <Links />

    </main>
  </div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import Links from './Links.vue'

import markup from '../pages/markup.js'

export default {
  data () {
    return {
      markup,
      module: this.$route.params.module,
      topic: this.$route.params.topic
    }
  }, 
  components: {
    Header, 
    Nav, 
    Links
  }, 
  mounted () {
  }, 
}
</script>

<style>

</style>
