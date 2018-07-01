import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'

import Layout from 'component/layout/index'
// 页面
import Home from 'page/home/index'
import Login from 'page/login/index'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' render={props => (
                        <Layout>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/product' component={Home}/>
                                <Route path='/product.category' component={Home}/>
                            </Switch>
                        </Layout>
                    )}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)