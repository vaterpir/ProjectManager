const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.scss', '.css'],
    alias: {
      Fonts: path.resolve(__dirname, 'fonts/'),
    },
  },
  devServer: {
    index: 'index.html',
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    clientLogLevel: 'silent',
    port: 9000,
    host: '192.168.0.6',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      title: 'Project Manager',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:3]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  },
};
