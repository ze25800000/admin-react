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
## 5-6 Router原理及React-router
##### 路由的几种方式
- 页面路由
```
window.location.href="http://www.baidu.com"
```
- hash 路由
```
window.location="#hash"
window.onhashchange=function(){
	console.log('current hash:',window.location.hash)
}

onhashchange()
//current hash: #hash
```
- h5 路由
```
// 推进一个路由
history.pushState('name','title','/path')
// 替换一个路由
history.replaceState('name','title','/path')

// popstate
window.onpopstate=function(){
    console.log(window.location.href)
    console.log(window.location.pathname)
    console.log(window.location.hash)
    console.log(window.location.search)
}
```

##### React-Router
- 路由方式
```
<BrowserRouter/> // h5路由实现

<HashRouter/> // hash方式实现

<Router> // 路由规则

<Switch> // 路由选项

<Link/> <NavLink> // 跳转导航

<Redirect> 自动跳转
```
- Install[REACT ROUTER](https://reacttraining.com/react-router/core/guides/philosophy)
```
yarn add react-router-dom@4.2.2

```
- Usage
```
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//BrowserRouter as Router 、HashRouter as Router
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class A extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            Component A
        </div>
    }
}

class B extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            Component B
        </div>
    }
}

class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            <Link to="/a">组件A</Link>
            <br/>
            <Link to="/b">组件B</Link>
            {this.props.children}
        </div>
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A}/>
            <Route path="/b" component={B}/>
        </Wrapper>
    </Router>,
    document.getElementById('app')
)

```
- 参数的传递
```
<Link to="/a/123">带参数的组件A</Link>

....
<Route path="/a" component={A}/>

....
接收的参数是：{this.props.match.params.id}

```

- Switch用法
```
<div>
    Component A
    <Switch>
        <Route exact path={`${this.props.match.path}`} render={(route) => {
            return <div>当前组件是不带参数的A</div>
        }}/>
        <Route path={`${this.props.match.path}/sub`} render={(route) => {
            return <div>当前组件是Sub</div>
        }}/>
        <Route path={`${this.props.match.path}/:id`} render={(route) => {
            return <div>当前组件是带参数的A, 参数是：{route.match.params.id}</div>
        }}/>
    </Switch>
</div>
```
# 6-2 通用布局的开发(1)
##### webpack配置
- 处理别名webpack配置
```
resolve: {
    alias: {
        page: path.resolve(__dirname, 'src/page')
    }
},
```
- 处理默认访问地址
```
devServer: {
    port: 2300,
    historyApiFallback: {
        index: '/dist/index.html'
    }
}
```
- 省略后缀.jsx
```
resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
    ....
},
```
# 6-2 通用布局的开发(1)
# 7-3 登录页面的开发（2）
##### 配置webpack
- proxy
```
proxy: {
    '/manage': {
        target: "http://admintest.happymmall.com",
        changeOrigin: true
    }
}
```
- 支持es7语法
```
yarn add babel-preset-stage-3 npm install babel-polyfill

entry: ['babel-polyfill', './src/app.jsx']

bable的presets设置为 presets: ['env', 'stage-3', 'react']
```