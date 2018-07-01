import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'

import Layout from 'component/layout/index'
// 页面
import Home from 'page/home/index'

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/product' component={Home}/>
                        <Route exact path='/product.category' component={Home}/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)