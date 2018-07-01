import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageTitle from 'component/page-title/index'

export default class Error extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title={'出错了!'}/>
                <div className="row">
                    <div className="col-md-12">
                        找不到路径
                        <Link to={'/'}>点我返回首页</Link>
                    </div>
                </div>
            </div>
        )
    }
}