const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  //console.log(env, 'ENV')
  const NODE_ENV = env ? env.NODE_ENV : 'development';

  return {
    mode: NODE_ENV,
    entry: path.resolve(__dirname, 'src/index.js'),
    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Testing',
        template: NODE_ENV === 'development' ? "src/assets/dev-index.html" : 'src/assets/index.html',
        filename: NODE_ENV === 'development' ? 'index.html' : 'index.html',
        favicon: path.resolve(__dirname, 'src/assets/favicon.ico')
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      publicPath: "/",
      path: path.resolve(__dirname, 'dist'),
      // publicPath: '/',
    },
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: {
        chunks: 'async',
        minSize: 200000,
        maxSize: 300000,
        minChunks: 1,
        automaticNameDelimiter: '.',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)/,
            name: 'vendor',
            // priority: -10,
            chunks: 'all'
          },

          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      },

      minimize: true
    },
    module: {
      rules: [
        {
          test: /\.(m?js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', "@babel/plugin-transform-arrow-functions"]
            }
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        // {
        //   test: /\.svg$/,
        //   loader: 'svg-inline-loader'
        // },
        {
          test: /\.(svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: false,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    },
  }
};
