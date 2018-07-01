import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import _mm from 'util/mm'
import User from 'service/user-service'

export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: _mm.getStorage('userInfo').username || ''
        }
    }

    async onLogout() {
        try {
            await User.logout()
            _mm.removeStorage('userInfo')
            window.location.href = '/login'
        } catch (e) {
            _mm.errorTips(e)
        }
    }

    render() {
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to={'/'}><b>HAPPY</b>MALL</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <span className="dropdown-toggle" href="javascript:;" aria-expanded="false">
                            <i className="fa fa-user fa-fw"></i>
                            <span>欢迎，{this.state.username}</span>
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a
                                    onClick={() => this.onLogout()}
                                ><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}