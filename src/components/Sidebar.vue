<template>
  <div>
    <transition name="enter">
      <div class="fixed top-0 right-0 bg-near-white w-75 overflow-y-scroll sidebar" :class="{ transform: open }">
        <ul class="pl4">
          <template v-for="(value, key, index) in sidebar">
            <li class="f4 mt4 mb3 ttu b black-80" style="list-style-type: none;" :key="index">{{ key }}</li>
            <ul class="pl0" :key="index">
              <li
                :key="index" class="mv2 black-70" 
                style="list-style-type: none;"
                v-for="(item, index) in value" 
              >
                {{ item }}
              </li>
            </ul>
          </template>
        </ul>
      </div> 
    </transition>
      <div>
        <img 
          @click="toggleSidebar"
          src="../assets/left.png" 
          class="fixed right-0 init" 
          :class="{ rotate: open }"
          style="width: 2rem; height: 2rem; top: 80vh;"
        />
      </div>
  </div>
</template>

<script>
const sidebar = {
  typography: [
    'Type Scale',
    'Measure',
    'Line Height / Leading',
    'Tracking',
    'Font Weights',
    'Font Style',
    'Vertical Align',
    'Text Align',
    'Text Transform',
    'Text Decoration',
    'White Space',
    'Font Families',
    'Avenir Next',
    'Helvetica',
    'Roboto',
    'San Francisco',
    'System Sans-Serif',
    'Athelas',
    'Baskerville',
    'Garamond',
    'Georgia',
    'System Serif'
  ],
  layout: [
    'Debugging',
    'Debug with a Grid',
    'Basic Grid',
    'Flexbox',
    'Box Sizing',
    'Spacing',
    'Floats',
    'Clearfix',
    'Display',
    'Widths',
    'Max Widths',
    'Heights',
    'Position'
  ], 
  theming: [
    'Skins',
    'Skins animations',
    'Hovers',
    'Background Size',
    'Borders',
    'Border Radius',
    'Box Shadow',
    'Opacity'
  ], 
  elements: [
    'Images',
    'Links',
    'Lists',
    'Forms',
    'Tables'
  ]
}

export default {
  data () {
    return {
      sidebar, 
      open: false
    }
  },
  methods: {
    toggleSidebar () {
      this.open = !this.open
      console.log('blah')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  max-height: 100vh; 
  transform: translateX(100vw);
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}

.init {
  color: blue;
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}

.rotate {
  transform: rotate3d(0, 1, 0, 180deg);
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}

.transform {
  transform: translateX(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}
</style>