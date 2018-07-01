import React, {Component} from 'react'
import './theme.css'

export default class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="wrapper">
                test layout
                {/*<TopNav/>
                <SideNav/>*/}
                {this.props.children}
            </div>
        )
    }
}