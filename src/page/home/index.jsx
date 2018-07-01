import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import PageTitle from 'component/page-title/index'
import _mm from 'util/mm'
import Statistic from 'service/statistic-service'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userCount: 1,
            productCount: 0,
            orderCount: 0
        }
    }

    componentDidMount() {
        this.loadCount()
    }

    async loadCount() {
        try {
            let result = await Statistic.getHomeCount()
            this.setState(result)
        } catch (e) {
            _mm.errorTips(e)
        }
    }

    render() {
        return (
            <div id={"page-wrapper"}>
                <PageTitle title={'首页'}/>
                <div className="row">
                    <div className="col-md-4">
                        <Link to={'/user'} className={"color-box brown"}>
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to={'/product'} className={"color-box green"}>
                            <p className="count">{this.state.productCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>商品数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to={'/order'} className={"color-box blue"}>
                            <p className="count">{this.state.orderCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>订单数</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}