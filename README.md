# Practice Project

## Web Books

### Installation
`npm install`

### Usage
* backend
>Enter the backend folder `npm run dev` to start Mongodb Server.
* Frotend
>Enter the frontend folder `npm run server:dev` Development mode.

- Enter the webpack.config file and change `mode: 'development'` or `mode: production`
````
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "js/bundle.js"
  },
  // mode: 'development',
  mode: 'production',
  module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : miniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkAttributes: true,
        useShortDoctype: true
      }
    }),
    new miniCssExtractPlugin({
      filename: 'css/bundle.css'
    })
  ],
  devtool: 'source-map'
};
````

>Compile frontend `npm run build`

## Funtions
* Show books
* Save Books

## Integrations
* MongoDB
* Node
* JavaScript
* Html5
* Webpack
