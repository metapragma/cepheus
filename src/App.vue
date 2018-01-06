<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~cepheus-typeface-inter-ui/lib/index.css';
@import 'cepheus';

@include cepheus-reset-inheritance;
@include cepheus-partials;

* {
  margin: 0;
  padding: 0;
}
</style>
