/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-var-requires */
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const path = require('path')
const sass = require('sass')
const webpack = require('webpack')

const deps = require('./package.json').dependencies

// Carrega as variáveis do arquivo .env
require('dotenv').config({ path: './.env' })

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development'
  const processEnv = process.env

  const config = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    optimization: {
      runtimeChunk: 'single',
    },
    devServer: {
      port: process.env.PORT,
      allowedHosts: process.env.HOST,
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      hot: true,
      historyApiFallback: true,
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].bundle.[contenthash].js',
      publicPath: isDevelopment
        ? `http://${process.env.HOST}:${process.env.PORT}/`
        : `${process.env.CI_ENVIRONMENT_URL}/`,
      clean: true,
    },
    resolve: {
      // fallback: { querystring: require.resolve('querystring-es3') },
      alias: {
        src: path.resolve(__dirname, 'src/'),
        // react: path.resolve('./node_modules/react'),
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        views: path.resolve(__dirname, 'src/views'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [path.resolve(__dirname, 'public', 'manifest.json')],
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(processEnv),
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true,
        allowAsyncCycles: true,
        cwd: process.cwd(),
      }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [{ loader: 'file-loader' }, { loader: 'svgo-loader' }],
        },
      ],
    },
  }

  return config
}
