<template>
  <div id="app">
    <main>
      <Sidebar />
      <!-- <transition name="fade"> -->
        <router-view />
      <!-- </transition> -->
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.05s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
