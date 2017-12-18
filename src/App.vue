<template>
  <div id="app" class="cas">
    <!-- TODO: remove this -->
    <main class="sans-serif">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import './styles/entrypoints/website';
</style>
