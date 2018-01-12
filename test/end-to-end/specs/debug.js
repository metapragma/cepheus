module.exports = {
  'partials/debug-children': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/partials/debug`)
      .waitForElementVisible('#tests', 5000)
      .assert.cssProperty("#l1", "outline", "rgb(255, 215, 0) solid 1px")
      .assert.cssProperty("#l2", "outline", "rgb(255, 255, 255) solid 1px")
      .assert.cssProperty("#l3", "outline", "rgb(0, 0, 0) solid 1px")
      .end()
  }
}

