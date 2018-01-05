<template>
  <div id="tests" style="margin: 5em;">
    <div id="case-one">
      <!-- By default preference is given to an element further down the DOM when stacking happens, 
      hence for testing we apply z-index from highest to lowest  -->
      <div id="l1" class="box z-max" style="left: 15rem; top: 15rem; background-color: red;">
        z-index: max
      </div>
      <div id="l2" class="box z-9999" style="left: 14rem; top: 14rem; background-color: yellow;">
        z-index: 9999
      </div>
      <div id="l3" class="box z-999" style="left: 13rem; top: 13rem; background-color: green;">
        z-index: 999
      </div>
      <div id="l4" class="box z-5" style="left: 12rem; top: 12rem; background-color: blue;">
        z-index: 5
      </div>
      <div id="l5" class="box z-4" style="left: 11rem; top: 11rem; background-color: cyan;">
        z-index: 4
      </div>
      <div id="l6" class="box z-3" style="left: 10rem; top: 10rem; background-color: magenta;">
        z-index: 3
      </div>
      <div id="l7" class="box z-2" style="left: 9rem; top: 9rem; background-color: purple;">
        z-index: 2
      </div>
      <div id="l8" class="box z-1" style="left: 8rem; top: 8rem; background-color: gold;">
        z-index: 1
      </div>
      <div id="l9" class="box z-unset" style="left: 6rem; top: 6rem; background-color: indigo;">
        z-index: unset
      </div>
      <div id="l10" class="box z-0" style="left: 7rem; top: 7rem; background-color: crimson;">
        z-index: 0
      </div>
      <!-- TODO: test inherit behavior -->
      <div class="z-2">
        <div id="l11" class="box z-inherit" style="left: 40rem; top: 10rem; background-color: firebrick;">
          z-index: inherit
        </div>
        <div id="l12" class="box z-initial" style="left: 41rem; top: 11rem; background-color: darkblue;">
          z-index: initial
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.box {
  width: 20rem; 
  height: 20rem; 
  position: absolute;
}
</style>
