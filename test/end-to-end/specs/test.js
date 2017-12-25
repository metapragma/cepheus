// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  // 'partials/skins': browser => {
  //   // automatically uses dev Server port from /config.index.js
  //   // default: http://localhost:8080
  //   // see nightwatch.conf.js
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/skins`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#t1", "background-color", "rgba(0, 0, 0, 0.9)")
  //     .assert.cssProperty("#t2", "background-color", "rgba(0, 0, 0, 0)")
  //     .assert.cssProperty("#t3", "background-color", "rgba(0, 0, 0, 0)")
  //     .assert.cssProperty("#t4", "background-color", "rgba(0, 0, 0, 0)")
  //     .assert.cssProperty("#t5", "background-color", "rgba(0, 0, 0, 0)")
  //     .assert.cssProperty("#t6", "background-color", "rgba(0, 0, 0, 0)")
  //     .assert.cssProperty("#t1", "color", "rgba(0, 0, 0, 0.1)")
  //     .assert.cssProperty("#t2", "color", "rgba(0, 0, 0, 1)")
  //     .assert.cssProperty("#t2", "color", "rgba(0, 0, 0, 1)")
  //     .assert.cssProperty("#t4", "color", "rgba(0, 0, 0, 0.9)")
  //     .assert.cssProperty("#t5", "color", "rgba(0, 0, 0, 1)")
  //     .assert.cssProperty("#t6", "color", "rgba(0, 0, 0, 1)")
  //     .end()
  // },
  // 'partials/text-decoration': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/text-decoration`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty(".strike", "text-decoration", "line-through solid rgb(0, 0, 0)")
  //     .assert.cssProperty(".underline", "text-decoration", "underline solid rgb(0, 0, 0)")
  //     .assert.cssProperty(".no-underline", "text-decoration", "none solid rgb(0, 0, 0)")
  //     .end()
  // },
  // 'partials/opacity': browser => {
  //   const devServer = browser.globals.devServerURL  

  //   browser
  //     .url(`${devServer}/partials/opacity`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#op100", "opacity", "1")
  //     .assert.cssProperty("#op90", "opacity", "0.9")
  //     .assert.cssProperty("#op70", "opacity", "0.7")
  //     .assert.cssProperty("#op60", "opacity", "0.6")
  //     .assert.cssProperty("#op50", "opacity", "0.5")
  //     .assert.cssProperty("#op40", "opacity", "0.4")
  //     .assert.cssProperty("#op30", "opacity", "0.3")
  //     .assert.cssProperty("#op20", "opacity", "0.2")
  //     .assert.cssProperty("#op10", "opacity", "0.1")
  //     .assert.cssProperty("#op05", "opacity", "0.05")
  //     .assert.cssProperty("#op025", "opacity", "0.025")
  //     .assert.cssProperty("#op0", "opacity", "0")
  //     .end()
  // },
  // 'partials/letter-spacing': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/letter-spacing`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "letter-spacing", "1.6px")
  //     .assert.cssProperty("#l2", "letter-spacing", "-0.8px")
  //     .assert.cssProperty("#l3", "letter-spacing", "4px")
  //     .assert.cssProperty("#l4", "letter-spacing", "normal")
  //     .assert.cssProperty("#l5", "letter-spacing", "normal")
  //     .end()
  // },
  // 'partials/borders': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/borders`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "border-style", "solid")
  //     .assert.cssProperty("#l1", "border-width", "1px")
  //     .assert.cssProperty("#l2", "border-top-style", "solid")
  //     .assert.cssProperty("#l2", "border-top-width", "1px")
  //     .assert.cssProperty("#l3", "border-right-style", "solid")
  //     .assert.cssProperty("#l3", "border-right-width", "1px")
  //     .assert.cssProperty("#l4", "border-bottom-style", "solid")
  //     .assert.cssProperty("#l4", "border-bottom-width", "1px")
  //     .assert.cssProperty("#l5", "border-left-style", "solid")
  //     .assert.cssProperty("#l5", "border-left-width", "1px")
  //     .assert.cssProperty("#l6", "border-style", "none")
  //     .assert.cssProperty("#l6", "border-width", "0px")
  //     .end()
  // },
  // 'partials/border-colors': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/border-colors`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "border-color", "rgb(0, 27, 68)")
  //     .assert.cssProperty("#l2", "border-color", "rgb(0, 68, 158)")
  //     .assert.cssProperty("#l3", "border-color", "rgb(53, 126, 221)")
  //     .assert.cssProperty("#l4", "border-color", "rgb(150, 204, 255)")
  //     .assert.cssProperty("#l5", "border-color", "rgb(205, 236, 255)")
  //     .end()
  // },
  // 'partials/border-widths': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/border-widths`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "border-width", "0px")
  //     .assert.cssProperty("#l2", "border-width", "2px")
  //     .assert.cssProperty("#l3", "border-width", "4px")
  //     .assert.cssProperty("#l4", "border-width", "8px")
  //     .assert.cssProperty("#l5", "border-width", "16px")
  //     .assert.cssProperty("#l6", "border-width", "32px")
  //     .assert.cssProperty("#l7", "border-top-width", "0px")
  //     .assert.cssProperty("#l7", "border-left-width", "1px")
  //     .assert.cssProperty("#l7", "border-right-width", "1px")
  //     .assert.cssProperty("#l7", "border-bottom-width", "1px")
  //     .assert.cssProperty("#l8", "border-right-width", "0px")
  //     .assert.cssProperty("#l8", "border-top-width", "1px")
  //     .assert.cssProperty("#l8", "border-left-width", "1px")
  //     .assert.cssProperty("#l8", "border-bottom-width", "1px")
  //     .assert.cssProperty("#l9", "border-bottom-width", "0px")
  //     .assert.cssProperty("#l9", "border-top-width", "1px")
  //     .assert.cssProperty("#l9", "border-left-width", "1px")
  //     .assert.cssProperty("#l9", "border-right-width", "1px")
  //     .assert.cssProperty("#l10", "border-left-width", "0px")
  //     .assert.cssProperty("#l10", "border-top-width", "1px")
  //     .assert.cssProperty("#l10", "border-bottom-width", "1px")
  //     .assert.cssProperty("#l10", "border-right-width", "1px")
  //     .end()
  // },
  // 'partials/border-styles': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/border-styles`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "border-style", "dotted")
  //     .assert.cssProperty("#l2", "border-style", "dashed")
  //     .assert.cssProperty("#l3", "border-style", "solid")
  //     .assert.cssProperty("#l4", "border-style", "none")
  //     .end()
  // },
  // 'partials/border-radius': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/border-radius`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "border-radius", "0px")
  //     .assert.cssProperty("#l2", "border-radius", "2px")
  //     .assert.cssProperty("#l3", "border-radius", "4px")
  //     .assert.cssProperty("#l4", "border-radius", "8px")
  //     .assert.cssProperty("#l5", "border-radius", "16px")
  //     .assert.cssProperty("#l6", "border-radius", "100%")
  //     .assert.cssProperty("#l7", "border-radius", "9999px")
  //     .assert.cssProperty("#l8", "border-bottom-left-radius", "0px")
  //     .assert.cssProperty("#l8", "border-bottom-right-radius", "0px")
  //     .assert.cssProperty("#l8", "border-top-left-radius", "16px")
  //     .assert.cssProperty("#l8", "border-top-right-radius", "16px")
  //     .assert.cssProperty("#l9", "border-top-left-radius", "0px")
  //     .assert.cssProperty("#l9", "border-bottom-left-radius", "0px")
  //     .assert.cssProperty("#l9", "border-top-right-radius", "16px")
  //     .assert.cssProperty("#l9", "border-bottom-right-radius", "16px")
  //     .assert.cssProperty("#l10", "border-top-left-radius", "0px")
  //     .assert.cssProperty("#l10", "border-top-right-radius", "0px")
  //     .assert.cssProperty("#l10", "border-bottom-right-radius", "16px")
  //     .assert.cssProperty("#l10", "border-bottom-left-radius", "16px")
  //     .assert.cssProperty("#l11", "border-top-right-radius", "0px")
  //     .assert.cssProperty("#l11", "border-bottom-right-radius", "0px")
  //     .assert.cssProperty("#l11", "border-top-left-radius", "16px")
  //     .assert.cssProperty("#l11", "border-bottom-left-radius", "16px")
  //     .end()
  // },
  // 'partials/box-shadow': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/box-shadow`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.elementPresent("#l1")
  //     .assert.cssClassPresent("#l1", "shadow-1")
  //     .assert.cssProperty("#l1", "box-shadow", "rgba(0, 0, 0, 0.2) 0px 0px 4px 2px")
  //     .assert.cssProperty("#l2", "box-shadow", "rgba(0, 0, 0, 0.2) 0px 0px 8px 2px")
  //     .assert.cssProperty("#l3", "box-shadow", "rgba(0, 0, 0, 0.2) 2px 2px 4px 2px")
  //     .assert.cssProperty("#l4", "box-shadow", "rgba(0, 0, 0, 0.2) 2px 2px 8px 0px")
  //     .assert.cssProperty("#l5", "box-shadow", "rgba(0, 0, 0, 0.2) 4px 4px 8px 0px")
  //     .end()
  // },
  // 'partials/z-index': browser => {
  //   const devServer = browser.globals.devServerURL
   
  //   browser
  //     .url(`${devServer}/partials/z-index`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "z-index", "2147483647")
  //     .assert.cssProperty("#l2", "z-index", "9999")
  //     .assert.cssProperty("#l3", "z-index", "999")
  //     .assert.cssProperty("#l4", "z-index", "5")
  //     .assert.cssProperty("#l5", "z-index", "4")
  //     .assert.cssProperty("#l6", "z-index", "3")
  //     .assert.cssProperty("#l7", "z-index", "2")
  //     .assert.cssProperty("#l8", "z-index", "1")
  //     .assert.cssProperty("#l9", "z-index", "auto")
  //     .assert.cssProperty("#l10", "z-index", "0")
  //     .assert.cssProperty("#l11", "z-index", "0")
  //     .assert.cssProperty("#l12", "z-index", "auto")
  //     .end()
  // },
  // 'partials/word-break': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/word-break`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "word-break", "normal")
  //     .assert.cssProperty("#l2", "word-break", "break-all")
  //     .assert.cssProperty("#l3", "word-break", "keep-all")
  //     .end()
  // },
  // 'partials/white-space': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/white-space`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "white-space", "normal")
  //     .assert.cssProperty("#l2", "white-space", "nowrap")
  //     .assert.cssProperty("#l3", "white-space", "pre")
  //     .assert.cssProperty("#l4", "white-space", "normal")
  //     .assert.cssProperty("#l5", "white-space", "normal")
  //     .end()
  // },
  // 'partials/vertical-align': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/vertical-align`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "vertical-align", "baseline")
  //     .assert.cssProperty("#l2", "vertical-align", "middle")
  //     .assert.cssProperty("#l3", "vertical-align", "top")
  //     .assert.cssProperty("#l4", "vertical-align", "bottom")
  //     .end()
  // },
  // 'partials/text-align': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/text-align`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "text-align", "left")
  //     .assert.cssProperty("#l2", "text-align", "right")
  //     .assert.cssProperty("#l3", "text-align", "center")
  //     .assert.cssProperty("#l4", "text-align", "start")
  //     .end()
  // },
  // 'partials/skins-pseudo' working but not testable with Nightwatch (support for pseudo-classes)
  // 'partials/rotations' working, but no point in testing as browser matrix values are unpredictable
  // 'partials/rotations': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/rotations`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "transform", "matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)")
  //     .assert.cssProperty("#l2", "transform", "rotate(90)")
  //     .assert.cssProperty("#l3", "transform", "rotate(135)")
  //     .assert.cssProperty("#l4", "transform", "rotate(180)")
  //     .assert.cssProperty("#l5", "transform", "rotate(225)")
  //     .assert.cssProperty("#l6", "transform", "rotate(270)")
  //     .assert.cssProperty("#l7", "transform", "rotate(315)")
  //     .end()
  // },
  // 'partials/position': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/position`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "position", "absolute")
  //     .assert.cssProperty("#l2", "position", "relative")
  //     .assert.cssProperty("#l3", "position", "static")
  //     .assert.cssProperty("#l4", "position", "fixed")
  //     .end()
  // },
  // 'partials/overflow': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/overflow`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "overflow", "visible")
  //     .assert.cssProperty("#l2", "overflow", "hidden")
  //     .assert.cssProperty("#l3", "overflow", "scroll")
  //     .assert.cssProperty("#l4", "overflow", "visible")
  //     .assert.cssProperty("#l5", "overflow-x", "visible")
  //     .assert.cssProperty("#l6", "overflow-x", "hidden")
  //     .assert.cssProperty("#l7", "overflow-x", "scroll")
  //     .assert.cssProperty("#l8", "overflow-x", "auto")
  //     .assert.cssProperty("#l9", "overflow-y", "visible")
  //     .assert.cssProperty("#l10", "overflow-y", "hidden")
  //     .assert.cssProperty("#l11", "overflow-y", "scroll")
  //     .assert.cssProperty("#l12", "overflow-y", "auto")
  //     .end()
  // },
  // 'partials/outlines': browser => {
  //   const devServer = browser.globals.devServerURL

  //   browser
  //     .url(`${devServer}/partials/outlines`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "outline", "rgb(0, 0, 0) solid 1px")
  //     .assert.cssProperty("#l2", "outline", "rgba(0, 0, 0, 0) solid 1px")
  //     .assert.cssProperty("#l3", "outline", "rgb(0, 0, 0) none 0px")
  //     .end()
  // },
  'partials/max-widths': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/max-widths`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "max-width", "16px")
      .assert.cssProperty("#l2", "max-width", "32px")
      .assert.cssProperty("#l3", "max-width", "64px")
      .assert.cssProperty("#l4", "max-width", "128px")
      .assert.cssProperty("#l5", "max-width", "256px")
      .assert.cssProperty("#l6", "max-width", "512px")
      .assert.cssProperty("#l7", "max-width", "768px")
      .assert.cssProperty("#l8", "max-width", "1024px")
      .assert.cssProperty("#l9", "max-width", "1536px")
      .assert.cssProperty("#l10", "max-width", "100%")
      .assert.cssProperty("#l11", "max-width", "none")
      .end()
  },
}
