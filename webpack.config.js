const { merge } = require('webpack-merge');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;
module.exports = (envVars) => {
  // common configuration
  const common = {
    devtool: false,
    mode: 'development',
    entry: path.resolve(__dirname, '.', './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
        {
          oneOf: [
            {
              test: /\.m?js$/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
        { test: /\.txt$/, use: 'raw-loader' },
      ],
    },
    resolveLoader: {
      modules: [path.join(__dirname, '.', './node_modules'), 'node_modules'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '.', './src/index.html'),
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],
    stats: 'errors-only',
  };
  
  const { env } = envVars;

  //   dev mode for development/demo
  const devConfig = () => {
    return {
      mode: 'development',
      devServer: {
        hot: true,
        open: true,
        port: 4400,
      },
      plugins: [
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
          'process.env.name': JSON.stringify('Vishwas'),
        }),
        new webpack.container.ModuleFederationPlugin({
          shared: {
            react: { singleton: true, eager: true, requiredVersion: deps['react'] },
          },
        })
      ],
    };
  };

  //   Build modern feature app entry index to be hosted as an application
  const modernFederatedFeatureApp = () => {
    return {
      mode: 'production',
      entry: {
        main: path.join(__dirname, './src/index.tsx'),
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/modern'),
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js',
      },
      plugins: [
        new webpack.container.ModuleFederationPlugin({
          shared: {
            react: { singleton: true, eager: true },
          },
        }),
      ],
    };
  };

  //   switch method to switch between builds
  switch (env) {
    case 'fa-modern':
      return merge(common, modernFederatedFeatureApp());
    default:
      return merge(common, devConfig());
  }
};
