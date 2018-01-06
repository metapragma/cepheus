<template>
  <div id="app">
    <main>
    <Sidebar />
    <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app', 
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
@import '~cepheus-typeface-inter-ui/lib/index.css';
@import 'cepheus';

@include cepheus-reset-inheritance;
@include cepheus-partials;

* {
  margin: 0;
}
</style>
