## 4-4 Webpack配置（1）
### webpack配置
##### webpack基本配置
```
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    }
};
```

##### [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)
- Installation
```
npm install --save-dev html-webpack-plugin
```
- 基本用法
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
```
- [插件配置](https://github.com/jantimon/html-webpack-plugin#options)
```
new HtmlWebpackPlugin({
    template:
})
```
##### [babel-loader](https://webpack.js.org/loaders/babel-loader/#src/components/Sidebar/Sidebar.jsx)
- 安装
```
npm install babel-loader babel-core babel-preset-env
```
- 用法
```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```
##### [css-loader](https://webpack.js.org/loaders/css-loader/#src/components/Sidebar/Sidebar.jsx)
- install
```
yarn add style-loader@0.19.1 css-loader@0.28.8 --dev
```
##### react
```
yarn add babel-preset-react babel-preset-latest --dev
yarn add react@16.2.0 react-dom@16.2.0
```
- 配置webpack
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.jsx', //app.js改为app.jsx
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, //js改为jsx
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'] //加个‘react’
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
```
- react基础使用
```
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
)
```