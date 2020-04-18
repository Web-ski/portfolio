const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    addHeroElems: './src/js/addHeroElems.js',
    addHeroPicture: './src/js/addHeroPicture.js',
    moveHeroElems: './src/js/moveHeroElems.js',
    reactHeroElems: './src/js/reactHeroElems.js',
    addSections: './src/js/addSections.js',
    addArticleContent: './src/js/addArticleContent.js',
    addBtnBackTop: './src/js/addBtnBackTop.js',
    addSectionsRadio: './src/js/addSectionsRadio.js',
    animArticleElems: './src/js/animArticleElems.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
  // plugins: [
  //   new CleanWebpackPlugin('dist', {}),
  // ]
};