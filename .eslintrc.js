// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: false,
      node: true,
      es6: true
    },
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    extends: ['airbnb-base'],
    // add your custom rules here
    'rules': {
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
    globals: {
      App: true,
      Page: true,
      wx: true,
      getApp: true,
      getPage: true,
      requirePlugin: true
    },
    rules: {
      "linebreak-style": [0 ,"error", "windows"]
    },
    settings: {
      'import/resolver': {
        webpack: {
          config: process.env.PLATFORM === 'wx'? './build/webpack.base.conf.js' :'./buildH5/webpack.baseH5.conf.js',
        },
        // https://www.npmjs.com/package/eslint-import-resolver-alias
        // eslint只识别部分alias的解决方案
        alias: {
          map: [['_modules', './node_modules'],['@', './src']],
          extensions: ['.ts', '.js', '.json', '.vue', '.d.ts'],
        },
      },
    },
  }
