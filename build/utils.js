const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = _path => path.posix.join('src', _path)

exports.cssLoaders = (options = {}) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    }

    return ['vue-style-loader'].concat(loaders)
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true,
      includePaths: [
        path.join(__dirname, '..', 'node_modules'),
        path.join(__dirname, '..', 'sass')
      ]
    }),
    scss: generateLoaders('sass', {
      includePaths: [
        path.join(__dirname, '..', 'node_modules'),
        path.join(__dirname, '..', 'sass')
      ]
    }),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = options => {
  const output = []
  const loaders = exports.cssLoaders(options)

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader
    })
  }
  return output
}
