import React, {Component} from 'react'
import './theme.css'
import NavTop from 'component/nav-top/index'
import NavSide from 'component/nav-slide/index'

export default class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="wrapper">
                <NavTop/>
                <NavSide/>
                {this.props.children}
            </div>
        )
    }
}