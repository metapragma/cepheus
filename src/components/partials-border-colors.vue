<template>
  <div id="tests" style="margin: 5em;">
    <div id="case-one">
      <div id="l1" class="b--navy border" style="width: 30rem; height: 30rem; padding: 1em;">
        <div id="l2" class="b--dark-blue border" style="width: 20rem; height: 20rem; padding: 1em;">
          <div id="l3" class="b--blue border" style="width: 15rem; height: 15rem; padding: 1em;">
            <div id="l4" class="b--light-blue border" style="width: 10rem; height: 10rem; padding: 1em;">
              <div id="l5" class="b--lightest-blue border" style="width: 5rem; height: 5rem; padding: 1em;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/entrypoints/partials';

.border {
  border-width: 5px;
  border-style: solid;
}
</style>
