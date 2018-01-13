// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'partials/baseline-rhythm': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/baseline-rhythm`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#a1", "font-size", "12px")
      .assert.cssProperty("#a1", "line-height", "16px")
      .assert.cssProperty("#a1", "margin-bottom", "-16px")
      .assert.cssProperty("#a1", "margin-top", "0px")
      .assert.cssProperty("#a1", "padding-bottom", "12.3637px")
      .assert.cssProperty("#a1", "padding-top", "3.63632px")

      .assert.cssProperty("#a2", "font-size", "20px")
      .assert.cssProperty("#a2", "line-height", "32px")
      .assert.cssProperty("#a2", "margin-bottom", "0px")
      .assert.cssProperty("#a2", "margin-top", "-16px")
      .assert.cssProperty("#a2", "padding-bottom", "7.2728px")
      .assert.cssProperty("#a2", "padding-top", "8.7272px")

      .assert.cssProperty("#a3", "font-size", "32px")
      .assert.cssProperty("#a3", "line-height", "48px")
      .assert.cssProperty("#a3", "margin-bottom", "0px")
      .assert.cssProperty("#a3", "margin-top", "-16px")
      .assert.cssProperty("#a3", "padding-bottom", "3.63632px")
      .assert.cssProperty("#a3", "padding-top", "12.3637px")

      .assert.cssProperty("#a4", "font-size", "40px")
      .assert.cssProperty("#a4", "line-height", "64px")
      .assert.cssProperty("#a4", "margin-bottom", "-16px")
      .assert.cssProperty("#a4", "margin-top", "0px")
      .assert.cssProperty("#a4", "padding-bottom", "14.5454px")
      .assert.cssProperty("#a4", "padding-top", "1.45456px")

      .assert.cssProperty("#a5", "font-size", "52px")
      .assert.cssProperty("#a5", "line-height", "80px")
      .assert.cssProperty("#a5", "margin-bottom", "-16px")
      .assert.cssProperty("#a5", "margin-top", "0px")
      .assert.cssProperty("#a5", "padding-bottom", "10.9091px")
      .assert.cssProperty("#a5", "padding-top", "5.09088px")

      .assert.cssProperty("#a6", "font-size", "64px")
      .assert.cssProperty("#a6", "line-height", "96px")
      .assert.cssProperty("#a6", "margin-bottom", "0px")
      .assert.cssProperty("#a6", "margin-top", "-16px")
      .assert.cssProperty("#a6", "padding-bottom", "7.2728px")
      .assert.cssProperty("#a6", "padding-top", "8.7272px")

      .assert.cssProperty("#a7", "font-size", "72px")
      .assert.cssProperty("#a7", "line-height", "112px")
      .assert.cssProperty("#a7", "margin-bottom", "0px")
      .assert.cssProperty("#a7", "margin-top", "-16px")
      .assert.cssProperty("#a7", "padding-bottom", "2.18176px")
      .assert.cssProperty("#a7", "padding-top", "13.8182px")

      .assert.cssProperty("#a8", "font-size", "84px")
      .assert.cssProperty("#a8", "line-height", "128px")
      .assert.cssProperty("#a8", "margin-bottom", "-16px")
      .assert.cssProperty("#a8", "margin-top", "0px")
      .assert.cssProperty("#a8", "padding-bottom", "14.5454px")
      .assert.cssProperty("#a8", "padding-top", "1.45456px")

      .assert.cssProperty("#a9", "font-size", "96px")
      .assert.cssProperty("#a9", "line-height", "144px")
      .assert.cssProperty("#a9", "margin-bottom", "-16px")
      .assert.cssProperty("#a9", "margin-top", "0px")
      .assert.cssProperty("#a9", "padding-bottom", "10.9091px")
      .assert.cssProperty("#a9", "padding-top", "5.09088px")
      .end()
  },
  'partials/type-scale': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/type-scale`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l0", "font-size", "16px")
      .assert.cssProperty("#l1", "font-size", "12px")
      .assert.cssProperty("#l2", "font-size", "20px")
      .assert.cssProperty("#l3", "font-size", "32px")
      .assert.cssProperty("#l4", "font-size", "40px")
      .assert.cssProperty("#l5", "font-size", "52px")
      .assert.cssProperty("#l6", "font-size", "64px")
      .assert.cssProperty("#l7", "font-size", "72px")
      .assert.cssProperty("#l8", "font-size", "84px")
      .assert.cssProperty("#l9", "font-size", "96px")
      .end()
  },
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
      .assert.cssProperty('#a7', 'font-family', '"Bodoni MT", serif')
      .assert.cssProperty('#a8', 'font-family', 'baskerville, serif')
      .assert.cssProperty('#a9', 'font-family', 'baskerville, serif')
      .assert.cssProperty('#a10', 'font-family', '"Bodoni MT", serif')
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
