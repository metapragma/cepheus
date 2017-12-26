// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'partials/font-family': browser => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/font-family`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty('#t1', 'font-family', '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif')
      .assert.cssProperty('#t2', 'font-family', 'georgia, times, serif')
      .assert.cssProperty('#t3', 'font-family', 'sans-serif')
      .assert.cssProperty('#t4', 'font-family', 'serif')
      .assert.cssProperty('#t5', 'font-family', 'Consolas, monaco, monospace')
      .assert.cssProperty('#t6', 'font-family', '"Courier Next", courier, monospace')
      .assert.cssProperty('#t7', 'font-family', '"helvetica neue", helvetica, sans-serif')
      .assert.cssProperty('#t8', 'font-family', '"avenir next", avenir, sans-serif')
      .assert.cssProperty('#t9', 'font-family', 'athelas, georgia, serif')
      .assert.cssProperty('#t10', 'font-family', 'georgia, serif')
      .assert.cssProperty('#t11', 'font-family', 'times, serif')
      .assert.cssProperty('#t12', 'font-family', '"Bodoni MT", serif')
      .assert.cssProperty('#t13', 'font-family', '"Calisto MT", serif')
      .assert.cssProperty('#t14', 'font-family', 'garamond, serif')
      .assert.cssProperty('#t15', 'font-family', 'baskerville, serif')
      .assert.cssProperty('#a1', 'font-family', '"Bodoni MT", serif')
      .assert.cssProperty('#a2', 'font-family', '"Times New Roman"')
      .assert.cssProperty('#a3', 'font-family', '"Times New Roman"')
      .assert.cssProperty('#a4', 'font-family', '"Bodoni MT", serif')
      .assert.cssProperty('#a5', 'font-family', 'baskerville, serif')
      .end()
  },
  'partials/font-family custom font': browser => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/font-family`)
      .waitForElementVisible('#tests', 5000)
      .waitForElementVisible('#toggle', 5000)
      .assert.cssProperty('#a6', 'font-family', '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif')
      .click('#toggle')
      .assert.cssProperty('#a6', 'font-family', '"Inter UI", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif')
      .end()
  }
}
