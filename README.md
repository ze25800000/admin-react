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

## 4-4 Webpack配置（2）
##### [ExtractTextWebpackPlugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)

- Install
```
yarn add extract-text-webpack-plugin@3.0.2 --dev
```
- Usage
```
module: {
rules: [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
    })
  }
]
},
plugins: [
    new ExtractTextPlugin("styles.css"),
]
```
##### [sass-loader](https://webpack.js.org/loaders/sass-loader/#src/components/Sidebar/Sidebar.jsx)
- Install
```
yarn add sass-loader@6.0.6 node-sass@4.7.2 --dev
```
- Usage
```
rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
        })
    }]
```

##### [url-loader](https://webpack.js.org/loaders/url-loader/#src/components/Sidebar/Sidebar.jsx)
- Install
```
yarn add file-loader@1.1.6 url-loader@0.6.2 --dev
```
- Usage
```
// 处理图片
{
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }
    ]
}
```
##### [Font Awesome](http://fontawesome.dashgame.com/)
- Install
```
yarn add font-awesom
```
- Usage
```
 // 处理字体图标
{
    test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }
    ]
}
```
##### 提出公共模块
```
// 提出公共模块
new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    filename: "js/base.js"
})
```

```
output: {
    ...
    filename: 'js/app.js'
},
```

```
options: {
    ...
    name: 'resource/[name].[ext]'
}
```

##### [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
- Install
```
yarn add  webpack-dev-server@2.9.7 --dev
```
- Usage
```
devServer: {
     contentBase: './dist'
},
```
- 配置publicPath
```
output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/', // 配置publicPath
    filename: 'js/app.js'
}
// 之后可以省略contentBase: './dist'
devServer: {
},
```
- 修改端口
```
devServer: {
    port: 2300
}
```
##### 配置package.json中的script
```
"scripts": {
    "dev": "node_modules/.bin/webpack-dev-server",
    "dist": "node_modules/.bin/webpack -p" // -p代表线上环境打包
},
```
