import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'

import Layout from 'component/layout/index'
// 页面
import Home from 'page/home/index'
import UserList from 'page/user/index'
import Login from 'page/login/index'
import ErrorPage from 'page/error/index'

class App extends Component {
    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/product' component={Home}/>
                    <Route path='/product.category' component={Home}/>
                    <Route path='/user/index' component={UserList}/>
                    <Redirect exact from='/user' to={'/user/index'}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        )
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' render={props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)