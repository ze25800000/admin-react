import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageTitle from 'component/page-title/index'
import Pagination from 'util/pagination/index'
import User from 'service/user-service'
import _mm from 'util/mm'

export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            pageNum: 1,
            firstLoading: true
        }
    }

    componentDidMount() {
        this.loadUserList()
    }

    async loadUserList() {
        try {
            let result = await User.getUserList(this.state.pageNum)
            this.setState(result, () => {
                this.setState({
                    firstLoading: false
                })
            })
        } catch (e) {
            this.setState({
                list: []
            })
            _mm.errorTips(e)
        }
    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum
        }, () => {
            this.loadUserList()
        })
    }

    render() {
        let listBody = this.state.list.length > 0 ?
            this.state.list.map((user, index, arr) => {
                return (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{new Date(user.createTime).toLocaleString()}</td>
                    </tr>
                )
            }) :
            <tr>
                <td colSpan={"5"} className={'text-center'}>{this.state.firstLoading ? "正在加载数据" : "没有找到相应的结果"}</td>
            </tr>
        return (
            <div id="page-wrapper">
                <PageTitle title={'用户列表'}/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>用户名</th>
                                <th>邮箱</th>
                                <th>电话</th>
                                <th>注册时间</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listBody}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination current={this.state.pageNum} total={this.state.total}
                            onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </div>
        )
    }
}