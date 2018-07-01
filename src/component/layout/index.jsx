import React, {Component} from 'react'
import './theme.css'
import NavTop from 'component/top-nav/index'
import NavSide from 'component/side-nav/index'

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