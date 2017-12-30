<template>
  <div id="tests" style="margin: 5em;">
    <div id="case-one">
      <div class="ba" style="width: 10rem; height: 10rem; margin: 4em;">
        <div id="l1" class="ba absolute" style="width: 10rem; height: 10rem; margin: 4em; top: 2rem; left: 2rem;"></div>
      </div>
      <div id="l2" class="ba relative" style="width: 10rem; height: 10rem; margin: 4em; margin-top: 2rem;"></div>
      <!-- top, left, right, bottom have no effect on an element with static positioning  -->
      <div id="l3" class="ba static" style="width: 10rem; height: 10rem; margin: 4em; top: 50rem; left: 50rem;"></div>
      <div id="l4" class="ba fixed" style="width: 10rem; height: 10rem; bottom: 0; left: 0;"></div>
    </div>
  </div>
</template>
