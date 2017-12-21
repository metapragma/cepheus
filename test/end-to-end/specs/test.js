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
      .url(`${devServer}/partials/border-widths`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "border-radius", "0px")
      // TODO: fix weird bug
      // .assert.cssProperty("#l2", "border-radius", "2px")
      // .assert.cssProperty("#l3", "border-radius", "4px")
      // .assert.cssProperty("#l4", "border-radius", "8px")
      // .assert.cssProperty("#l5", "border-radius", "16px")
      // .assert.cssProperty("#l6", "border-radius", "32px")
      // .assert.cssProperty("#l7", "border-radius", "9999px")
      // .assert.cssProperty("#l8", "border-bottom-left-radius", "0px")
      // .assert.cssProperty("#l8", "border-bottom-right-radius", "0px")
      // .assert.cssProperty("#l8", "border-top-left-radius", "16px")
      // .assert.cssProperty("#l8", "border-top-right-radius", "16px")
      // .assert.cssProperty("#l9", "border-top-left-radius", "0px")
      // .assert.cssProperty("#l9", "border-bottom-left-radius", "0px")
      // .assert.cssProperty("#l9", "border-top-right-radius", "16px")
      // .assert.cssProperty("#l9", "border-bottom-right-radius", "16px")
      // .assert.cssProperty("#l10", "border-top-left-radius", "0px")
      // .assert.cssProperty("#l10", "border-top-right-radius", "0px")
      // .assert.cssProperty("#l10", "border-bottom-right-radius", "16px")
      // .assert.cssProperty("#l10", "border-bottom-left-radius", "16px")
      // .assert.cssProperty("#l11", "border-top-right-radius", "0px")
      // .assert.cssProperty("#l11", "border-bottom-right-radius", "0px")
      // .assert.cssProperty("#l11", "border-top-left-radius", "16px")
      // .assert.cssProperty("#l11", "border-bottom-left-radius", "16px")
      .end()
  },
}
