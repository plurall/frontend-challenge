// eslint-disable-next-line import/no-extraneous-dependencies
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config) {
  // eslint-disable-next-line no-param-reassign
  config = injectBabelPlugin(
    ['styled-jsx/babel', { optimizeForSpeed: true }],
    config,
  )

  return config
}
