import React, {Component} from 'react'
import './index.scss'
import User from 'service/user-service'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onInputChange(e) {

        let inputName = e.target.name,
            inputValue = e.target.value
        this.setState({
            [inputName]: inputValue
        })
    }

    async onSubmit(e) {
        let result = await User.login({
            username: this.state.username,
            password: this.state.password
        })
        console.log(result)
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
                                       onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control"
                                       name={'password'}
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