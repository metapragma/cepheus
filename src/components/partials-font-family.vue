<template>
  <div id="tests" style="margin: 5em;">
    <div id="case-one">
      <div id="t1" class="sans-serif">Bla bla</div>
      <div id="t2" class="serif">Bla bla</div>
      <div id="t3" class="system-sans-serif">Bla bla</div>
      <div id="t4" class="system-serif">Bla bla</div>
      <div id="t5" class="code">Bla bla</div>
      <div id="t6" class="courier">Bla bla</div>
      <div id="t7" class="helvetica">Bla bla</div>
      <div id="t8" class="avenir">Bla bla</div>
      <div id="t9" class="athelas">Bla bla</div>
      <div id="t10" class="georgia">Bla bla</div>
      <div id="t11" class="times">Bla bla</div>
      <div id="t12" class="bodoni">Bla bla</div>
      <div id="t13" class="calisto">Bla bla</div>
      <div id="t14" class="garamond">Bla bla</div>
      <div id="t15" class="baskerville">Bla bla</div>
    </div>

    <div id="case-two">
      <div id="a1" class="bodoni">
        <div id="a2">
          <div id="a3">
            Bla
          </div>
        </div>
      </div>
      <div id="a4" class="bodoni">
        <div id="a5" class="baskerville">Bla</div>
      </div>
    </div>

    <div id="case-three">
      <div id="a6" class="inter-ui">
        Bla

      </div>
    </div>

    <div id="case-four ">
      <div id="a7" class="bodoni">
        <div id="a8" class="baskerville">Bla</div>
      </div>

      <div id="a9" class="baskerville">
        <div id="a10" class="bodoni">Bla</div>
      </div>
    </div>

    <br/>
    <br/>
    <br/>
    <button id="toggle" v-on:click="toggle">Toggle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    toggle () {
      const cl = document.body.classList
      if (cl.contains('wf-inter-ui-active')) {
        cl.remove('wf-inter-ui-active')
      } else {
        cl.add('wf-inter-ui-active')
      }
    }
  }
}
</script>

<style lang="scss">
@import "~cepheus-typeface-inter-ui/lib/variables";
@import '../styles/entrypoints/partials';
</style>
