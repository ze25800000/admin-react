import React, {Component} from 'react'
import './index.scss'
import User from 'service/user-service'
import _mm from 'util/mm'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }

    componentWillMount() {
        document.title = '登录 - MMALL ADMIN'
    }

    onInputChange(e) {

        let inputName = e.target.name,
            inputValue = e.target.value
        this.setState({
            [inputName]: inputValue
        })
    }

    onInputKeyup(e) {
        if (e.keyCode === 13) {
            this.onSubmit()
        }
    }

    async onSubmit(e) {
        let loginInfo = {
                username: this.state.username,
                password: this.state.password
            },
            checkResult = User.checkLoginInfo(loginInfo)
        if (!checkResult.status) {
            _mm.errorTips(checkResult.msg)
            return
        }
        try {
            let result = await User.login(loginInfo)
            this.props.history.push(this.state.redirect)
        } catch (e) {
            _mm.errorTips(e)
        }
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登陆- MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text" className="form-control"
                                       placeholder="用户名"
                                       name={'username'}
                                       onKeyUp={e => this.onInputKeyup(e)}
                                       onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control"
                                       name={'password'}
                                       onKeyUp={e => this.onInputKeyup(e)}
                                       placeholder="密码"
                                       onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-primary btn-block"
                                    onClick={e => this.onSubmit(e)}
                            >登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}