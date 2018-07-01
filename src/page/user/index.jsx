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
            pageNum: 1
        }
    }

    componentDidMount() {
        this.loadUserList()
    }

    async loadUserList() {
        try {
            let result = await User.getUserList(this.state.pageNum)
            this.setState(result)
        } catch (e) {
            _mm.errorTips(e)
        }
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title={'用户列表'}/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>ID</th>
                                <th>ID</th>
                                <th>ID</th>
                                <th>ID</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>123</td>
                                <td>123</td>
                                <td>123</td>
                                <td>123</td>
                                <td>123</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination current={11} total={200} onChange={(pageNum) => {
                    console.log(pageNum)
                }}/>
            </div>
        )
    }
}