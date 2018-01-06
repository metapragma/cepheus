<template>
  <div class="fixed top-0 right-0 bg-light-gray w-75 overflow-y-scroll">
    <ul class="pl3">
      <template v-for="(value, key, index) in sidebar">
        <li :key="index" class="f4 mv2 uppercase" style="list-style-type: none;">{{ key }}</li>
        <ul :key="index" class="pl3">
          <li v-for="(item, index) in value" :key="index" class="mv2" style="list-style-type: none;">{{ item }}</li>
        </ul>
      </template>
    </ul>
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
      sidebar
    }
  }  
}
</script>
