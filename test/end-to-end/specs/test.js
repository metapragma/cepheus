// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'partials/skins': function (browser) {
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
  'partials/text-decoration': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/text-decoration`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty(".strike", "text-decoration", "line-through solid rgb(0, 0, 0)")
      .assert.cssProperty(".underline", "text-decoration", "underline solid rgb(0, 0, 0)")
      .assert.cssProperty(".no-underline", "text-decoration", "none solid rgb(0, 0, 0)")
      .end()
  }
}
