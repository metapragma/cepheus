<template>
  <div id="tests" style="margin: 5em;">
    <div id="case-one">
      <div id="l1" class="ba rotate-45" style="width: 10rem; height: 10rem; margin: 4em;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Arrow_Up.svg/2000px-Black_Arrow_Up.svg.png" 
             style="width: 10rem; height: 10rem;" 
        />
      </div>
      <div id="l2" class="ba rotate-90" style="width: 10rem; height: 10rem; margin: 4em;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Arrow_Up.svg/2000px-Black_Arrow_Up.svg.png" 
             style="width: 10rem; height: 10rem;" 
        />
      </div>
      <div id="l3" class="ba rotate-135" style="width: 10rem; height: 10rem; margin: 4em;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Arrow_Up.svg/2000px-Black_Arrow_Up.svg.png" 
             style="width: 10rem; height: 10rem;" 
        />
      </div>
      <div id="l4" class="ba rotate-180" style="width: 10rem; height: 10rem; margin: 4em;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Arrow_Up.svg/2000px-Black_Arrow_Up.svg.png" 
             style="width: 10rem; height: 10rem;" 
        />
      </div>
      <div id="l5" class="ba rotate-225" style="width: 10rem; height: 10rem; margin: 4em;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Arrow_Up.svg/2000px-Black_Arrow_Up.svg.png" 
             style="width: 10rem; height: 10rem;" 
        />
      </div>
      <div id="l6" class="ba rotate-270" style="width: 10rem; height: 10rem; margin: 4em;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Arrow_Up.svg/2000px-Black_Arrow_Up.svg.png" 
             style="width: 10rem; height: 10rem;" 
        />
      </div>
      <div id="l7" class="ba rotate-315" style="width: 10rem; height: 10rem; margin: 4em;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Black_Arrow_Up.svg/2000px-Black_Arrow_Up.svg.png" 
             style="width: 10rem; height: 10rem;" 
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  // methods: {
  //   captureClick () {
  //     console.log(this.$refs)
  //   }
  // }
  mounted () {
    console.log(window.getComputedStyle("l1", "transform"))
  }
}
</script>