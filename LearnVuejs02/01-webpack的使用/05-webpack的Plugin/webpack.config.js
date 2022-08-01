const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:'url-loader',
            options: {
              limit:140000,
              name: 'img/[name].[hash:8].[ext]'
            },

          }
        ]
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ],
  },
  resolve: {
    extensions:['.js','.css','.vue'],
    //alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
      new webpack.BannerPlugin('最终版权归tjj所有'),
      new HtmlWebpackPlugin()
  ]
}