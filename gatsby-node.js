const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
