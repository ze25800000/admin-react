import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import RcPagination from 'rc-pagination'
import 'rc-pagination/dist/rc-pagination.min.css'

export default class Pagination extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props}
                                  showQuickJumper
                                  hideOnSinglePage/>
                </div>
            </div>
        )
    }
}