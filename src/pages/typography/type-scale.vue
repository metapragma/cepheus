<template>
  <div>
    <Page>

      <article slot="introduction" class="cf ph3 ph5-ns">
        <div class="fl w-100 w-50-l pt4">
          <p class="fl w-100 f5 f4-ns lh-copy mb3">
            <span>Often times, websites devote a non-trivial amount of css to setting
              font-size</span>. They declare an unnecessary amount of different
            font-sizes that upon inspection, don’t come close to resembling a sane type scale.
          </p>
          <p class="fl w-100 w-50-ns v-top f5 f6-ns lh-copy pr2-ns">
            To create and design an easily readable interface, you don’t need
            more than 40 font-sizes. A simple ratio-based scale with 8
            options should suffice.  Using the class extension namespaces you
            can set the font-size for any particular breakpoint that you
            desire.
          </p>
          <p class="fl w-100 w-50-ns measure measure-narrow-ns v-top f5 f6-ns lh-copy pl2-ns">
            Don’t spend time constantly overriding font-sizes in your css.
            If you don’t like a default font-size for an element, use the utilities to quickly make the text larger or smaller until it looks just right.
          </p>
        </div>
      </article>

      <div slot="examples" class="ph3 ph5-ns mt0-ns mb5-ns pt0-ns pb5">
        <div class="mw9 center">
          <blockquote class="f5 f4-m f2-l black-70 lh-copy mh0 pv4 ph3 bt bb bw1 b--black-05 mv4 mv5-ns db">
            <p class="baskerville fw1 measure center">
              “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection… In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years… This is the typographic equivalent of the diatonic scale.”
            </p>
            <p class="dark-gray f5 f4-m f2-l center measure"><span class="f6">—Robert Bringhurst, <cite>The Elements of Typographic Style</cite></span></p>
          </blockquote>
          <h2 class="f5 b mv4 mt5-ns">Font sizes</h2>
        <div class="w-100 overflow-x-auto">
          <table>
            <tbody><tr>
              <td class="tc f-headline b br b--black-10 v-base">A</td>
              <td class="tc ph2 br f-subheadline b br b--black-10 v-base">A</td>
              <td class="tc f1 b br b--black-10 v-base">A</td>
              <td class="tc f2 b br b--black-10 v-base">A</td>
              <td class="tc f3 b br b--black-10 v-base">A</td>
              <td class="tc f4 b br b--black-10 v-base">A</td>
              <td class="tc f5 b br b--black-10 v-base">A</td>
              <td class="tc f6 b b--black-10 v-base">A</td>
            </tr>
            <tr>
              <td class="tc gray f6 fw2 pr2 bt br b--black-10 pt1">6rem (96px)</td>
              <td class="tc gray f6 fw2 ph2 bt br b--black-10 pt1">5rem (80px)</td>
              <td class="tc gray f6 fw2 ph2 bt br b--black-10 pt1">3rem (48px)</td>
              <td class="tc gray f6 fw2 ph2 bt br b--black-10 pt1">2.25rem (36px)</td>
              <td class="tc gray f6 fw2 ph2 bt br b--black-10 pt1">1.5rem (24px)</td>
              <td class="tc gray f6 fw2 ph2 bt br b--black-10 pt1">1.25rem (20px)</td>
              <td class="tc gray f6 fw2 ph2 bt br b--black-10 pt1">1rem (16px)</td>
              <td class="tc gray f6 fw2 pl2 bt b--black-10 pt1">.875rem (14px)</td>
            </tr>
          </tbody></table>
        </div>
        <h3 class="f5 mb4 mb5-ns mt5 mt6-ns pb2 bb">Examples</h3>
<code class="f6 mb3 db">
&lt;h1 class="f-headline lh-solid"&gt;Title&lt;/h1&gt;
</code>
        <p class="f-headline b lh-solid oh measure mt0 mb5 nowrap ws-normal-ns overflow-hidden word-wrap">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>

<code class="f6 mb3 db">
&lt;h1 class="f-subheadline lh-title"&gt;Title&lt;/h1&gt;
</code>
        <p class="f-subheadline lh-title b measure oh mt0 mb4 mb5-ns word-wrap">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>
<code class="f6 mb3 db">
&lt;h1 class="f1 lh-title"&gt;Title&lt;/h1&gt;
</code>
        <p class="f1 b lh-title mt0 mb4 mb5-ns measure word-wrap">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>
<code class="f6 mb3 db">
&lt;h1 class="f2 lh-copy"&gt;Title&lt;/h1&gt;
</code>
        <p class="f2 lh-copy mt0 mb4 mb5-ns measure">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>
<code class="f6 mb3 db">
&lt;h1 class="f3 lh-copy"&gt;Title&lt;/h1&gt;
</code>
        <p class="f3 lh-copy mt0 mb4 mb5-ns measure">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>
<code class="f6 mb3 db">
&lt;h1 class="f4 lh-copy"&gt;Title&lt;/h1&gt;
</code>

        <p class="f4 lh-copy mt0 mb4 mb5-ns measure">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>
<code class="f6 mb3 db">
&lt;h1 class="f5 lh-copy"&gt;Title&lt;/h1&gt;
</code>
        <p class="f5 lh-copy mt0 mb4 mb5-ns measure">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>
<code class="f6 mb3 db">
&lt;h1 class="f6 lh-copy"&gt;Title&lt;/h1&gt;
</code>
        <p class="f6 lh-copy mt0 measure word-wrap">
          A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
        </p>
        <div class="mt5 cf">
          <div class="dib mr4">
            <h4 class="f6 fw6">Previous</h4>
            <a href="/docs/elements/forms/" class="link fw6 blue dim">Forms</a>
          </div>
          <div class="dib">
            <h4 class="f6 fw6">Next</h4>
            <a href="/docs/typography/measure/" class="link fw6 blue dim">Measure</a>
          </div>
        </div>
      </div>
    </div>

    <div slot="reference" class="mt5">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size" class="link fw6 blue dim">MDN - Font-size</a>
    </div>

    </Page>
  </div>
</template>

<script>
import Page from '../../components/Page.vue'

export default {
  date () {
    return {}
  }, 
  components: {
    Page
  }
}
</script>

<style>

</style>
