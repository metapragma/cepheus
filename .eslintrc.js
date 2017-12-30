module.exports = {
  extends: 'epiloque',
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['build/**/*.js', 'test/**/*.js']}]
  }
}
