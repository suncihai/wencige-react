const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: ['react-hot-loader/patch', path.resolve('src/index.tsx')],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'css', 'png', 'php'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: 'chrome',
    port: 3333,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [{
        //  专门处理antd的css样式
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'less-loader',
          //   options: {
          //     lessOptions: {
          //       javascriptEnabled: true,
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.tsx?/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|css)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};