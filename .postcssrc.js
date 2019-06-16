const rootValues = {
  wx: 37.5,
  h5:100
}
const rootValue = rootValues[process.env.PLATFORM] || 100
module.exports = {
  plugins: {
    // "postcss-mpvue-wxss": {},
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: rootValue,
      propList: ['*']
    }
  }
}
