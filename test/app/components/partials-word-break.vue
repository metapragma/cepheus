<template>
  <div id="tests" style="margin: 5em;">
    <div id="case-one">
      <div id="l1" class="word-normal" style="width: 10rem; height: 10rem; margin: 4em;">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </div>
      <div id="l2" class="word-wrap" style="width: 10rem; height: 10rem; margin: 4em;">
        次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
        次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
      </div>
      <div id="l3" class="word-nowrap" style="width: 10rem; height: 10rem; margin: 4em;">
        <!-- Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. 
        Non-CJK text behavior is the same as for normal. -->
        次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
        次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
      </div>
    </div>
  </div>
</template>
