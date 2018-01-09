<template>
  <div>
    <Header />  
    <header class="db h2"> 
    <div class="fl w-50-l pr4-l h1 pa3">
      <h3 class="f5 ttu tracked mt0 black-70">{{ this.$route.name }}</h3>
    </div>
    </header>
    <main class="bg-white black-70">
      <Nav at="introduction" />
      <h3 id="introduction" class="f4 b tl mt3 mb1 pl3">Introduction</h3>
      
        <!-- Introduction start -->
        <slot name="introduction"></slot>
        <!-- Introduction End -->

        <Nav at="examples" />
        <h3 id="examples" class="f4 mb4 mb5-ns mt3 mt6-ns pb2 pl3">Examples</h3>

        <!-- Examples start -->
        <slot name="examples"></slot>
        <!-- Examples End -->

        <Nav at="reference" />

        <div class="mt3">
          <h3 id="reference" class="f4 b pl3">Reference</h3>

          <!-- Reference start -->
          <slot name="reference"></slot>
          <!-- Reference End -->

        </div>
     
    <Links />

    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import Links from '../components/Links.vue'

export default {
  date () {
    return {}
  }, 
  components: {
    Header, 
    Nav, 
    Links
  }, 
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style>

</style>
