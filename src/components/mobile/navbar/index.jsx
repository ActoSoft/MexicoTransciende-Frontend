import React, { Component } from 'react'
import './index.scss'
import Icon from './../../../images/logo-transparency.png'
import User from './../../../images/user.svg'
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
	    return (
	        <div className="ui-navbar">
                <div className="ui-hamburger-menu">
                    <div className="line"></div>
                    <div className="line-large"></div>
                    <div className="line"></div>
                </div>
                <img src={Icon} alt="User" className="img-icon"/>
                <img src={User} alt="User" className="img-nav"/>
            </div>
	    )
    }
}

export default Navbar
