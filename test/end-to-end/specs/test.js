// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'partials/skins': browser => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/skins`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#t1", "background-color", "rgba(0, 0, 0, 0.9)")
      .assert.cssProperty("#t2", "background-color", "rgba(0, 0, 0, 0)")
      .assert.cssProperty("#t3", "background-color", "rgba(0, 0, 0, 0)")
      .assert.cssProperty("#t4", "background-color", "rgba(0, 0, 0, 0)")
      .assert.cssProperty("#t5", "background-color", "rgba(0, 0, 0, 0)")
      .assert.cssProperty("#t6", "background-color", "rgba(0, 0, 0, 0)")
      .assert.cssProperty("#t1", "color", "rgba(0, 0, 0, 0.1)")
      .assert.cssProperty("#t2", "color", "rgba(0, 0, 0, 1)")
      .assert.cssProperty("#t2", "color", "rgba(0, 0, 0, 1)")
      .assert.cssProperty("#t4", "color", "rgba(0, 0, 0, 0.9)")
      .assert.cssProperty("#t5", "color", "rgba(0, 0, 0, 1)")
      .assert.cssProperty("#t6", "color", "rgba(0, 0, 0, 1)")
      .assert.cssProperty("#a1", "color", "rgba(0, 0, 0, 0.1)")
      .assert.cssProperty("#a2", "color", "rgba(0, 0, 0, 0.9)")
      .assert.cssProperty("#a3", "color", "rgba(0, 0, 0, 0.9)")
      .assert.cssProperty("#a4", "color", "rgba(0, 0, 0, 0.1)")
      .end()
  },
  'partials/text-decoration': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/text-decoration`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty(".strike", "text-decoration", "line-through solid rgb(0, 0, 0)")
      .assert.cssProperty(".underline", "text-decoration", "underline solid rgb(0, 0, 0)")
      .assert.cssProperty(".no-underline", "text-decoration", "none solid rgb(0, 0, 0)")
      .end()
  },
  'partials/opacity': browser => {
    const devServer = browser.globals.devServerURL  

    browser
      .url(`${devServer}/partials/opacity`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#op100", "opacity", "1")
      .assert.cssProperty("#op90", "opacity", "0.9")
      .assert.cssProperty("#op70", "opacity", "0.7")
      .assert.cssProperty("#op60", "opacity", "0.6")
      .assert.cssProperty("#op50", "opacity", "0.5")
      .assert.cssProperty("#op40", "opacity", "0.4")
      .assert.cssProperty("#op30", "opacity", "0.3")
      .assert.cssProperty("#op20", "opacity", "0.2")
      .assert.cssProperty("#op10", "opacity", "0.1")
      .assert.cssProperty("#op05", "opacity", "0.05")
      .assert.cssProperty("#op025", "opacity", "0.025")
      .assert.cssProperty("#op0", "opacity", "0")
      .end()
  },
  'partials/letter-spacing': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/letter-spacing`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "letter-spacing", "1.6px")
      .assert.cssProperty("#l2", "letter-spacing", "-0.8px")
      .assert.cssProperty("#l3", "letter-spacing", "4px")
      .assert.cssProperty("#l4", "letter-spacing", "normal")
      .assert.cssProperty("#l5", "letter-spacing", "normal")
      .end()
  },
  'partials/borders': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/borders`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "border-style", "solid")
      .assert.cssProperty("#l1", "border-width", "1px")
      .assert.cssProperty("#l2", "border-top-style", "solid")
      .assert.cssProperty("#l2", "border-top-width", "1px")
      .assert.cssProperty("#l3", "border-right-style", "solid")
      .assert.cssProperty("#l3", "border-right-width", "1px")
      .assert.cssProperty("#l4", "border-bottom-style", "solid")
      .assert.cssProperty("#l4", "border-bottom-width", "1px")
      .assert.cssProperty("#l5", "border-left-style", "solid")
      .assert.cssProperty("#l5", "border-left-width", "1px")
      .assert.cssProperty("#l6", "border-style", "none")
      .assert.cssProperty("#l6", "border-width", "0px")
      .end()
  },
  'partials/border-colors': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/border-colors`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "border-color", "rgb(0, 27, 68)")
      .assert.cssProperty("#l2", "border-color", "rgb(0, 68, 158)")
      .assert.cssProperty("#l3", "border-color", "rgb(53, 126, 221)")
      .assert.cssProperty("#l4", "border-color", "rgb(150, 204, 255)")
      .assert.cssProperty("#l5", "border-color", "rgb(205, 236, 255)")
      .end()
  },
  'partials/border-widths': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/border-widths`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "border-width", "0px")
      .assert.cssProperty("#l2", "border-width", "2px")
      .assert.cssProperty("#l3", "border-width", "4px")
      .assert.cssProperty("#l4", "border-width", "8px")
      .assert.cssProperty("#l5", "border-width", "16px")
      .assert.cssProperty("#l6", "border-width", "32px")
      .assert.cssProperty("#l7", "border-top-width", "0px")
      .assert.cssProperty("#l7", "border-left-width", "1px")
      .assert.cssProperty("#l7", "border-right-width", "1px")
      .assert.cssProperty("#l7", "border-bottom-width", "1px")
      .assert.cssProperty("#l8", "border-right-width", "0px")
      .assert.cssProperty("#l8", "border-top-width", "1px")
      .assert.cssProperty("#l8", "border-left-width", "1px")
      .assert.cssProperty("#l8", "border-bottom-width", "1px")
      .assert.cssProperty("#l9", "border-bottom-width", "0px")
      .assert.cssProperty("#l9", "border-top-width", "1px")
      .assert.cssProperty("#l9", "border-left-width", "1px")
      .assert.cssProperty("#l9", "border-right-width", "1px")
      .assert.cssProperty("#l10", "border-left-width", "0px")
      .assert.cssProperty("#l10", "border-top-width", "1px")
      .assert.cssProperty("#l10", "border-bottom-width", "1px")
      .assert.cssProperty("#l10", "border-right-width", "1px")
      .end()
  },
  'partials/border-styles': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/border-styles`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "border-style", "dotted")
      .assert.cssProperty("#l2", "border-style", "dashed")
      .assert.cssProperty("#l3", "border-style", "solid")
      .assert.cssProperty("#l4", "border-style", "none")
      .end()
  },
  'partials/border-radius': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/border-radius`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "border-radius", "0px")
      .assert.cssProperty("#l2", "border-radius", "2px")
      .assert.cssProperty("#l3", "border-radius", "4px")
      .assert.cssProperty("#l4", "border-radius", "8px")
      .assert.cssProperty("#l5", "border-radius", "16px")
      .assert.cssProperty("#l6", "border-radius", "100%")
      .assert.cssProperty("#l7", "border-radius", "9999px")
      .assert.cssProperty("#l8", "border-bottom-left-radius", "0px")
      .assert.cssProperty("#l8", "border-bottom-right-radius", "0px")
      .assert.cssProperty("#l8", "border-top-left-radius", "16px")
      .assert.cssProperty("#l8", "border-top-right-radius", "16px")
      .assert.cssProperty("#l9", "border-top-left-radius", "0px")
      .assert.cssProperty("#l9", "border-bottom-left-radius", "0px")
      .assert.cssProperty("#l9", "border-top-right-radius", "16px")
      .assert.cssProperty("#l9", "border-bottom-right-radius", "16px")
      .assert.cssProperty("#l10", "border-top-left-radius", "0px")
      .assert.cssProperty("#l10", "border-top-right-radius", "0px")
      .assert.cssProperty("#l10", "border-bottom-right-radius", "16px")
      .assert.cssProperty("#l10", "border-bottom-left-radius", "16px")
      .assert.cssProperty("#l11", "border-top-right-radius", "0px")
      .assert.cssProperty("#l11", "border-bottom-right-radius", "0px")
      .assert.cssProperty("#l11", "border-top-left-radius", "16px")
      .assert.cssProperty("#l11", "border-bottom-left-radius", "16px")
      .end()
  },
  'partials/box-shadow': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/box-shadow`)
      .waitForElementVisible('#tests', 5000)
      .assert.elementPresent("#l1")
      .assert.cssClassPresent("#l1", "shadow-1")
      .assert.cssProperty("#l1", "box-shadow", "rgba(0, 0, 0, 0.2) 0px 0px 4px 2px")
      .assert.cssProperty("#l2", "box-shadow", "rgba(0, 0, 0, 0.2) 0px 0px 8px 2px")
      .assert.cssProperty("#l3", "box-shadow", "rgba(0, 0, 0, 0.2) 2px 2px 4px 2px")
      .assert.cssProperty("#l4", "box-shadow", "rgba(0, 0, 0, 0.2) 2px 2px 8px 0px")
      .assert.cssProperty("#l5", "box-shadow", "rgba(0, 0, 0, 0.2) 4px 4px 8px 0px")
      .end()
  },
  'partials/z-index': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/z-index`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "z-index", "2147483647")
      .assert.cssProperty("#l2", "z-index", "9999")
      .assert.cssProperty("#l3", "z-index", "999")
      .assert.cssProperty("#l4", "z-index", "5")
      .assert.cssProperty("#l5", "z-index", "4")
      .assert.cssProperty("#l6", "z-index", "3")
      .assert.cssProperty("#l7", "z-index", "2")
      .assert.cssProperty("#l8", "z-index", "1")
      .assert.cssProperty("#l9", "z-index", "auto")
      .assert.cssProperty("#l10", "z-index", "0")
      .assert.cssProperty("#l11", "z-index", "0")
      .assert.cssProperty("#l12", "z-index", "auto")
      .end()
  },
  'partials/word-break': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/word-break`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "word-break", "normal")
      .assert.cssProperty("#l2", "word-break", "break-all")
      .assert.cssProperty("#l3", "word-break", "keep-all")
      .end()
  },
  'partials/white-space': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/white-space`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "white-space", "normal")
      .assert.cssProperty("#l2", "white-space", "nowrap")
      .assert.cssProperty("#l3", "white-space", "pre")
      .assert.cssProperty("#l4", "white-space", "normal")
      .assert.cssProperty("#l5", "white-space", "normal")
      .end()
  },
  'partials/vertical-align': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/vertical-align`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "vertical-align", "baseline")
      .assert.cssProperty("#l2", "vertical-align", "middle")
      .assert.cssProperty("#l3", "vertical-align", "top")
      .assert.cssProperty("#l4", "vertical-align", "bottom")
      .end()
  },
  'partials/text-align': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/text-align`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "text-align", "left")
      .assert.cssProperty("#l2", "text-align", "right")
      .assert.cssProperty("#l3", "text-align", "center")
      .assert.cssProperty("#l4", "text-align", "justify")
      .end()
  },
  // // 'partials/skins-pseudo' working but not testable with Nightwatch (support for pseudo-classes)
  // // 'partials/rotations' working, but no point in testing as browser matrix values are unpredictable
  // 'partials/rotations': browser => {
  //   const devServer = browser.globals.devServerURL
  //
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
  'partials/position': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/position`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "position", "absolute")
      .assert.cssProperty("#l2", "position", "relative")
      .assert.cssProperty("#l3", "position", "static")
      .assert.cssProperty("#l4", "position", "fixed")
      .end()
  },
  'partials/overflow': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/overflow`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "overflow", "visible")
      .assert.cssProperty("#l2", "overflow", "hidden")
      .assert.cssProperty("#l3", "overflow", "scroll")
      .assert.cssProperty("#l4", "overflow", "visible")
      .assert.cssProperty("#l5", "overflow-x", "visible")
      .assert.cssProperty("#l6", "overflow-x", "hidden")
      .assert.cssProperty("#l7", "overflow-x", "scroll")
      .assert.cssProperty("#l8", "overflow-x", "auto")
      .assert.cssProperty("#l9", "overflow-y", "visible")
      .assert.cssProperty("#l10", "overflow-y", "hidden")
      .assert.cssProperty("#l11", "overflow-y", "scroll")
      .assert.cssProperty("#l12", "overflow-y", "auto")
      .end()
  },
  'partials/outlines': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/outlines`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "outline", "rgb(0, 0, 0) solid 1px")
      .assert.cssProperty("#l2", "outline", "rgba(0, 0, 0, 0) solid 1px")
      .assert.cssProperty("#l3", "outline", "rgb(0, 0, 0) none 0px")
      .end()
  },
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
  'partials/lists': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/lists`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "list-style-type", "none")
      .assert.cssProperty("#l2", "list-style-type", "none")
      .assert.cssProperty("#l3", "list-style-type", "none")
      .assert.cssProperty("#l4", "list-style-type", "none")
      .end()
  },
  'partials/links': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/links`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "text-decoration", "none solid rgb(0, 0, 238)")
      .assert.cssProperty("#l1", "transition", "color 0.15s ease-in 0s")
      .assert.cssProperty("#l2", "text-decoration", "none solid rgb(0, 0, 238)")
      .assert.cssProperty("#l2", "transition", "color 0.15s ease-in 0s")
      .assert.cssProperty("#l3", "text-decoration", "none solid rgb(0, 0, 238)")
      .assert.cssProperty("#l3", "transition", "color 0.15s ease-in 0s")
      .assert.cssProperty("#l4", "text-decoration", "none solid rgb(0, 0, 238)")
      .assert.cssProperty("#l4", "transition", "color 0.15s ease-in 0s")
      .end()
  },
  'partials/heights': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/heights`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "height", "16px")
      .assert.cssProperty("#l2", "height", "32px")
      .assert.cssProperty("#l3", "height", "64px")
      .assert.cssProperty("#l4", "height", "128px")
      .assert.cssProperty("#l5", "height", "256px")
      .assert.cssProperty("#l6", "height", "200px")
      .assert.cssProperty("#l7", "height", "400px")
      .assert.cssProperty("#l8", "height", "600px")
      .assert.cssProperty("#l9", "height", "800px")
      .assert.cssProperty("#l10", "height", "800px")
      .assert.cssProperty("#l11", "height", "150px")
      .assert.cssProperty("#l12", "height", "300px")
      .assert.cssProperty("#l13", "height", "450px")
      .assert.cssProperty("#l14", "height", "600px")
      .assert.cssProperty("#l15", "height", "600px")
      .assert.cssProperty("#l16", "height", "0px")
      .assert.cssProperty("#l17", "height", "800px")
      .end()
  },
  'partials/gradients': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/gradients`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "background-image", "linear-gradient(rgb(69, 112, 176), rgb(0, 129, 194))")
      .assert.cssProperty("#l2", "background-image", "linear-gradient(rgb(0, 129, 194), rgb(69, 112, 176))")
      .assert.cssProperty("#l3", "background-image", "linear-gradient(rgb(118, 211, 254), rgb(0, 138, 224))")
      .assert.cssProperty("#l4", "background-image", "linear-gradient(rgb(0, 138, 224), rgb(118, 211, 254))")
      .end()
  },
  'partials/coordinates': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/coordinates`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "top", "0px")
      .assert.cssProperty("#l2", "right", "0px")
      .assert.cssProperty("#l3", "bottom", "0px")
      .assert.cssProperty("#l4", "left", "0px")
      .assert.cssProperty("#l5", "top", "16px")
      .assert.cssProperty("#l6", "right", "16px")
      .assert.cssProperty("#l7", "bottom", "16px")
      .assert.cssProperty("#l8", "left", "16px")
      .assert.cssProperty("#l9", "top", "32px")
      .assert.cssProperty("#l10", "right", "32px")
      .assert.cssProperty("#l11", "bottom", "32px")
      .assert.cssProperty("#l12", "left", "32px")
      .assert.cssProperty("#l13", "top", "-16px")
      .assert.cssProperty("#l14", "right", "-16px")
      .assert.cssProperty("#l15", "bottom", "-16px")
      .assert.cssProperty("#l16", "left", "-16px")
      .assert.cssProperty("#l17", "top", "-32px")
      .assert.cssProperty("#l18", "right", "-32px")
      .assert.cssProperty("#l19", "bottom", "-32px")
      .assert.cssProperty("#l20", "left", "-32px")
      .assert.cssProperty("#l21", "top", "0px")
      .assert.cssProperty("#l21", "right", "0px")
      .assert.cssProperty("#l21", "bottom", "0px")
      .assert.cssProperty("#l21", "left", "0px")
      .end()
  },
  'partials/code': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/code`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "overflow-x", "scroll")
      .assert.cssProperty("#l1", "overflow-y", "scroll")
      .assert.cssProperty("#l1", "overflow", "scroll")
      .end()
  },
  'partials/background-position': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/background-position`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "background-repeat", "no-repeat")
      .assert.cssProperty("#l1", "background-position", "50% 50%")
      .assert.cssProperty("#l2", "background-repeat", "no-repeat")
      .assert.cssProperty("#l2", "background-position", "50% 0%")
      .assert.cssProperty("#l3", "background-repeat", "no-repeat")
      .assert.cssProperty("#l3", "background-position", "100% 50%")
      .assert.cssProperty("#l4", "background-repeat", "no-repeat")
      .assert.cssProperty("#l4", "background-position", "50% 100%")
      .assert.cssProperty("#l5", "background-repeat", "no-repeat")
      .assert.cssProperty("#l5", "background-position", "0% 50%")
      .end()
  },
  // 'partials/hovers'
  'partials/flexbox': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/flexbox`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "flex", "1 1 auto")
      .assert.cssProperty("#l1", "min-width", "0px")
      .assert.cssProperty("#l1", "min-height", "0px")
      .assert.cssProperty("#l2", "flex", "0 0 auto")
      .assert.cssProperty("#l3", "flex-direction", "row")
      .assert.cssProperty("#l4", "flex-direction", "column")
      .assert.cssProperty("#l5", "flex-wrap", "wrap")
      .assert.cssProperty("#l6", "flex-wrap", "nowrap")
      .assert.cssProperty("#l7", "flex-wrap", "wrap-reverse")
      .assert.cssProperty("#l8", "flex-direction", "column-reverse")
      .assert.cssProperty("#l9", "flex-direction", "row-reverse")
      .assert.cssProperty("#l10", "align-items", "flex-start")
      .assert.cssProperty("#l11", "align-items", "flex-end")
      .assert.cssProperty("#l12", "align-items", "center")
      .assert.cssProperty("#l13", "align-items", "baseline")
      .assert.cssProperty("#l14", "align-items", "stretch")
      .assert.cssProperty("#l15", "align-self", "flex-start")
      .assert.cssProperty("#l16", "align-self", "flex-end")
      .assert.cssProperty("#l17", "align-self", "center")
      .assert.cssProperty("#l18", "align-self", "baseline")
      .assert.cssProperty("#l19", "align-self", "stretch")
      .assert.cssProperty("#l20", "justify-content", "flex-start")
      .assert.cssProperty("#l21", "justify-content", "flex-end")
      .assert.cssProperty("#l22", "justify-content", "center")
      .assert.cssProperty("#l23", "justify-content", "space-between")
      .assert.cssProperty("#l24", "justify-content", "space-around")
      // TODO
      // .assert.cssProperty("#l25", "align-content", "flex-start")
      // .assert.cssProperty("#l26", "align-content", "flex-end")
      // .assert.cssProperty("#l27", "align-content", "center")
      // .assert.cssProperty("#l28", "align-content", "space-between")
      // .assert.cssProperty("#l29", "align-content", "space-around")
      // .assert.cssProperty("#l30", "align-content", "stretch")
      .assert.cssProperty("#l31", "order", "4")
      .assert.cssProperty("#l32", "order", "0")
      .assert.cssProperty("#l33", "order", "99999")
      .assert.cssProperty("#l34", "flex-grow", "0")
      .assert.cssProperty("#l35", "flex-grow", "1")
      .assert.cssProperty("#l36", "flex-shrink", "0")
      .assert.cssProperty("#l37", "flex-shrink", "1")
      .end()
  },
  'partials/aspect-ratios': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/aspect-ratios`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "position", "absolute")
      .assert.cssProperty("#l1", "top", "0px")
      .assert.cssProperty("#l1", "right", "0px")
      .assert.cssProperty("#l1", "bottom", "0px")
      .assert.cssProperty("#l1", "left", "0px")
      .assert.cssProperty("#l1", "z-index", "100")
      .assert.cssProperty("#l2", "position", "absolute")
      .assert.cssProperty("#l2", "top", "0px")
      .assert.cssProperty("#l2", "right", "0px")
      .assert.cssProperty("#l2", "bottom", "0px")
      .assert.cssProperty("#l2", "left", "0px")
      .assert.cssProperty("#l2", "z-index", "100")
      .assert.cssProperty("#l3", "position", "absolute")
      .assert.cssProperty("#l3", "top", "0px")
      .assert.cssProperty("#l3", "right", "0px")
      .assert.cssProperty("#l3", "bottom", "0px")
      .assert.cssProperty("#l3", "left", "0px")
      .assert.cssProperty("#l3", "z-index", "100")
      .assert.cssProperty("#l4", "position", "absolute")
      .assert.cssProperty("#l4", "top", "0px")
      .assert.cssProperty("#l4", "right", "0px")
      .assert.cssProperty("#l4", "bottom", "0px")
      .assert.cssProperty("#l4", "left", "0px")
      .assert.cssProperty("#l4", "z-index", "100")
      .assert.cssProperty("#l5", "position", "absolute")
      .assert.cssProperty("#l5", "top", "0px")
      .assert.cssProperty("#l5", "right", "0px")
      .assert.cssProperty("#l5", "bottom", "0px")
      .assert.cssProperty("#l5", "left", "0px")
      .assert.cssProperty("#l5", "z-index", "100")
      .assert.cssProperty("#l6", "position", "absolute")
      .assert.cssProperty("#l6", "top", "0px")
      .assert.cssProperty("#l6", "right", "0px")
      .assert.cssProperty("#l6", "bottom", "0px")
      .assert.cssProperty("#l6", "left", "0px")
      .assert.cssProperty("#l6", "z-index", "100")
      .assert.cssProperty("#l7", "position", "absolute")
      .assert.cssProperty("#l7", "top", "0px")
      .assert.cssProperty("#l7", "right", "0px")
      .assert.cssProperty("#l7", "bottom", "0px")
      .assert.cssProperty("#l7", "left", "0px")
      .assert.cssProperty("#l7", "z-index", "100")
      .assert.cssProperty("#l8", "position", "absolute")
      .assert.cssProperty("#l8", "top", "0px")
      .assert.cssProperty("#l8", "right", "0px")
      .assert.cssProperty("#l8", "bottom", "0px")
      .assert.cssProperty("#l8", "left", "0px")
      .assert.cssProperty("#l8", "z-index", "100")
      .assert.cssProperty("#l9", "position", "absolute")
      .assert.cssProperty("#l9", "top", "0px")
      .assert.cssProperty("#l9", "right", "0px")
      .assert.cssProperty("#l9", "bottom", "0px")
      .assert.cssProperty("#l9", "left", "0px")
      .assert.cssProperty("#l9", "z-index", "100")
      .assert.cssProperty("#l10", "position", "absolute")
      .assert.cssProperty("#l10", "top", "0px")
      .assert.cssProperty("#l10", "right", "0px")
      .assert.cssProperty("#l10", "bottom", "0px")
      .assert.cssProperty("#l10", "left", "0px")
      .assert.cssProperty("#l10", "z-index", "100")
      .assert.cssProperty("#l11", "position", "absolute")
      .assert.cssProperty("#l11", "top", "0px")
      .assert.cssProperty("#l11", "right", "0px")
      .assert.cssProperty("#l11", "bottom", "0px")
      .assert.cssProperty("#l11", "left", "0px")
      .assert.cssProperty("#l11", "z-index", "100")
      .end()
  },
  'partials/background-size': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/background-size`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "background-size", "cover")
      .assert.cssProperty("#l2", "background-size", "contain")
      .end()
  },
  // 'partials/debug-children': browser => {
  //   const devServer = browser.globals.devServerURL
  //
  //   browser
  //     .url(`${devServer}/partials/debug-children`)
  //     .waitForElementVisible('#tests', 5000)
  //     .assert.cssProperty("#l1", "outline", "rgb(255, 215, 0) solid 1px")
  //     .assert.cssProperty("#l2", "outline", "rgb(255, 255, 255) solid 1px")
  //     .assert.cssProperty("#l3", "outline", "rgb(0, 0, 0) solid 1px")
  //     .end()
  // },
  'partials/display': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/display`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "display", "none")
      .assert.cssProperty("#l2", "display", "inline")
      .assert.cssProperty("#l3", "display", "block")
      .assert.cssProperty("#l4", "display", "inline-block")
      .assert.cssProperty("#l5", "display", "inline-table")
      .assert.cssProperty("#l6", "display", "table")
      .assert.cssProperty("#l7", "display", "table-cell")
      .assert.cssProperty("#l8", "display", "table-row")
      .assert.cssProperty("#l9", "display", "table-row-group")
      .assert.cssProperty("#l10", "display", "table-column")
      .assert.cssProperty("#l11", "display", "table-column-group")
      .end()
  },
  'partials/font-style': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/font-style`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "font-style", "italic")
      .assert.cssProperty("#l2", "font-style", "normal")
      .assert.cssProperty("#l3", "font-style", "normal")
      .assert.cssProperty("#l4", "font-style", "italic")
      .assert.cssProperty("#l5", "font-style", "normal")
      .assert.cssProperty("#l6", "font-style", "normal")
      .end()
  },
  'partials/font-weight': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/font-weight`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "font-weight", "100")
      .assert.cssProperty("#l2", "font-weight", "200")
      .assert.cssProperty("#l3", "font-weight", "400")
      .assert.cssProperty("#l4", "font-weight", "400")
      .assert.cssProperty("#l5", "font-weight", "700")
      .assert.cssProperty("#l6", "font-weight", "300")
      .assert.cssProperty("#l7", "font-weight", "400")
      .assert.cssProperty("#l8", "font-weight", "500")
      .assert.cssProperty("#l9", "font-weight", "600")
      .assert.cssProperty("#l10", "font-weight", "700")
      .assert.cssProperty("#l11", "font-weight", "800")
      .assert.cssProperty("#l12", "font-weight", "900")
      .end()
  },
  'partials/line-height': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/line-height`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "line-height", "16px")
      .assert.cssProperty("#l2", "line-height", "20px")
      .assert.cssProperty("#l3", "line-height", "normal")
      .assert.cssProperty("#l4", "line-height", "24px")
      .end()
  },
  'partials/negative-margins': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/negative-margins`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "margin", "-4px")
      .assert.cssProperty("#l2", "margin", "-8px")
      .assert.cssProperty("#l3", "margin", "-16px")
      .assert.cssProperty("#l4", "margin", "-32px")
      .assert.cssProperty("#l5", "margin", "-64px")
      .assert.cssProperty("#l6", "margin", "-128px")
      .assert.cssProperty("#l7", "margin", "-256px")
      .end()
  },
  'partials/spacing': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/spacing`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "margin", "0px")
      .assert.cssProperty("#l2", "margin", "4px")
      .assert.cssProperty("#l3", "margin", "8px")
      .assert.cssProperty("#l4", "margin", "16px")
      .assert.cssProperty("#l5", "margin", "32px")
      .assert.cssProperty("#l6", "margin", "64px")
      .assert.cssProperty("#l7", "margin", "128px")
      .assert.cssProperty("#l8", "margin", "256px")
      .assert.cssProperty("#l9", "margin-left", "0px")
      .assert.cssProperty("#l10", "margin-left", "4px")
      .assert.cssProperty("#l11", "margin-left", "8px")
      .assert.cssProperty("#l12", "margin-left", "16px")
      .assert.cssProperty("#l13", "margin-left", "32px")
      .assert.cssProperty("#l14", "margin-left", "64px")
      .assert.cssProperty("#l15", "margin-left", "128px")
      .assert.cssProperty("#l16", "margin-left", "256px")
      .assert.cssProperty("#l17", "margin-right", "0px")
      .assert.cssProperty("#l18", "margin-right", "4px")
      .assert.cssProperty("#l19", "margin-right", "8px")
      .assert.cssProperty("#l20", "margin-right", "16px")
      .assert.cssProperty("#l21", "margin-right", "32px")
      .assert.cssProperty("#l22", "margin-right", "64px")
      .assert.cssProperty("#l23", "margin-right", "128px")
      .assert.cssProperty("#l24", "margin-right", "256px")
      .assert.cssProperty("#l33", "margin-bottom", "0px")
      .assert.cssProperty("#l34", "margin-bottom", "4px")
      .assert.cssProperty("#l35", "margin-bottom", "8px")
      .assert.cssProperty("#l36", "margin-bottom", "16px")
      .assert.cssProperty("#l37", "margin-bottom", "32px")
      .assert.cssProperty("#l38", "margin-bottom", "64px")
      .assert.cssProperty("#l39", "margin-bottom", "128px")
      .assert.cssProperty("#l40", "margin-bottom", "256px")
      .assert.cssProperty("#l41", "margin-top", "0px")
      .assert.cssProperty("#l42", "margin-top", "4px")
      .assert.cssProperty("#l43", "margin-top", "8px")
      .assert.cssProperty("#l44", "margin-top", "16px")
      .assert.cssProperty("#l45", "margin-top", "32px")
      .assert.cssProperty("#l46", "margin-top", "64px")
      .assert.cssProperty("#l47", "margin-top", "128px")
      .assert.cssProperty("#l48", "margin-top", "256px")
      .assert.cssProperty("#l49", "padding", "0px")
      .assert.cssProperty("#l50", "padding", "4px")
      .assert.cssProperty("#l51", "padding", "8px")
      .assert.cssProperty("#l52", "padding", "16px")
      .assert.cssProperty("#l53", "padding", "32px")
      .assert.cssProperty("#l54", "padding", "64px")
      .assert.cssProperty("#l55", "padding", "128px")
      .assert.cssProperty("#l56", "padding", "256px")
      .assert.cssProperty("#l57", "padding-left", "0px")
      .assert.cssProperty("#l58", "padding-left", "4px")
      .assert.cssProperty("#l59", "padding-left", "8px")
      .assert.cssProperty("#l60", "padding-left", "16px")
      .assert.cssProperty("#l61", "padding-left", "32px")
      .assert.cssProperty("#l62", "padding-left", "64px")
      .assert.cssProperty("#l63", "padding-left", "128px")
      .assert.cssProperty("#l64", "padding-left", "256px")
      .assert.cssProperty("#l65", "padding-right", "0px")
      .assert.cssProperty("#l66", "padding-right", "4px")
      .assert.cssProperty("#l67", "padding-right", "8px")
      .assert.cssProperty("#l68", "padding-right", "16px")
      .assert.cssProperty("#l69", "padding-right", "32px")
      .assert.cssProperty("#l70", "padding-right", "64px")
      .assert.cssProperty("#l71", "padding-right", "128px")
      .assert.cssProperty("#l72", "padding-right", "256px")
      .assert.cssProperty("#l73", "padding-top", "0px")
      .assert.cssProperty("#l74", "padding-top", "4px")
      .assert.cssProperty("#l75", "padding-top", "8px")
      .assert.cssProperty("#l76", "padding-top", "16px")
      .assert.cssProperty("#l77", "padding-top", "32px")
      .assert.cssProperty("#l78", "padding-top", "64px")
      .assert.cssProperty("#l79", "padding-top", "128px")
      .assert.cssProperty("#l80", "padding-top", "256px")
      .assert.cssProperty("#l81", "padding-bottom", "0px")
      .assert.cssProperty("#l82", "padding-bottom", "4px")
      .assert.cssProperty("#l83", "padding-bottom", "8px")
      .assert.cssProperty("#l84", "padding-bottom", "16px")
      .assert.cssProperty("#l85", "padding-bottom", "32px")
      .assert.cssProperty("#l86", "padding-bottom", "64px")
      .assert.cssProperty("#l87", "padding-bottom", "128px")
      .assert.cssProperty("#l88", "padding-bottom", "256px")
      .end()
  },
  'partials/text-transform': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/text-transform`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "text-transform", "capitalize")
      .assert.cssProperty("#l2", "text-transform", "lowercase")
      .assert.cssProperty("#l3", "text-transform", "none")
      .assert.cssProperty("#l4", "text-transform", "uppercase")
      .assert.cssProperty("#l5", "text-transform", "none")
      .end()
  },
  'partials/widths': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/widths`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "width", "16px")
      .assert.cssProperty("#l2", "width", "32px")
      .assert.cssProperty("#l3", "width", "64px")
      .assert.cssProperty("#l4", "width", "128px")
      .assert.cssProperty("#l5", "width", "256px")
      .assert.cssProperty("#l6", "width", "100px")
      .assert.cssProperty("#l7", "width", "200px")
      .assert.cssProperty("#l8", "width", "250px")
      .assert.cssProperty("#l9", "width", "300px")
      .assert.cssProperty("#l10", "width", "330px")
      .assert.cssProperty("#l11", "width", "340px")
      .assert.cssProperty("#l12", "width", "400px")
      .assert.cssProperty("#l13", "width", "500px")
      .assert.cssProperty("#l14", "width", "600px")
      .assert.cssProperty("#l15", "width", "700px")
      .assert.cssProperty("#l16", "width", "750px")
      .assert.cssProperty("#l17", "width", "800px")
      .assert.cssProperty("#l18", "width", "900px")
      .assert.cssProperty("#l19", "width", "1000px")
      .end()
  },
  'partials/floats': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/floats`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "float", "left")
      .assert.cssProperty("#l2", "float", "right")
      .assert.cssProperty("#l3", "float", "none")
      .end()
  },
  'partials/clears': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/clears`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l4", "clear", "left")
      .assert.cssProperty("#l5", "clear", "right")
      .assert.cssProperty("#l6", "clear", "both")
      .assert.cssProperty("#l7", "clear", "none")
      .end()
  },
  'partials/tables': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/tables`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "border-collapse", "collapse")
      .assert.cssProperty("#l1", "border-spacing", "0px 0px")
      .assert.cssProperty("#l2", "background-color", "rgba(238, 238, 238, 1)")
      .assert.cssProperty("#l3", "background-color", "rgba(238, 238, 238, 1)")
      .assert.cssProperty("#l4", "background-color", "rgba(238, 238, 238, 1)")
      .end()
  },
  'partials/utilities': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/tables`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l4", "overflow-y", "visible")
      .end()
  },
  'partials/typography': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/typography`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "max-width", "480px")
      .assert.cssProperty("#l2", "max-width", "544px")
      .assert.cssProperty("#l3", "max-width", "320px")
      .assert.cssProperty("#l4", "text-indent", "16px")
      .assert.cssProperty("#l4", "margin-top", "0px")
      .assert.cssProperty("#l4", "margin-bottom", "0px")
      .assert.cssProperty("#l5", "font-variant", "small-caps")
      .assert.cssProperty("#l6", "white-space", "nowrap")
      .assert.cssProperty("#l6", "overflow", "hidden")
      .assert.cssProperty("#l6", "text-overflow", "ellipsis")
      .end()
  },
  'partials/nested': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/nested`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "line-height", "24px")
      .assert.cssProperty("#l2", "line-height", "24px")
      .assert.cssProperty("#l3", "line-height", "24px")
      .assert.cssProperty("#l4", "line-height", "20px")
      .assert.cssProperty("#l5", "line-height", "20px")
      .assert.cssProperty("#l6", "line-height", "20px")
      .assert.cssProperty("#l7", "line-height", "20px")
      .assert.cssProperty("#l8", "line-height", "20px")
      .assert.cssProperty("#l9", "line-height", "20px")
      .assert.cssProperty("#l10", "padding-left", "0px")
      .assert.cssProperty("#l10", "margin-left", "0px")
      .assert.cssProperty("#l10", "list-style-type", "none")
      .assert.cssProperty("#l11", "padding-left", "0px")
      .assert.cssProperty("#l11", "margin-left", "0px")
      .assert.cssProperty("#l11", "list-style-type", "none")
      .assert.cssProperty("#l14", "text-indent", "1.6px")
      .assert.cssProperty("#l14", "margin-top", "0px")
      .assert.cssProperty("#l14", "margin-bottom", "0px")
      .assert.cssProperty("#l15", "margin-top", "24px")
      .assert.cssProperty("#l16", "width", "400px")
      .assert.cssProperty("#l16", "max-width", "100%")
      .assert.cssProperty("#l16", "display", "block")
      .assert.cssProperty("#l17", "color", "rgba(53, 126, 221, 1)")
      .assert.cssProperty("#l17", "transition", "color 0.15s ease-in 0s")
      .end()
  },
}

