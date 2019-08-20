import React, { Component } from 'react'
import './index.scss'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            about: 'Acerca de:',
            content: 'México Trasciende es un evento de liderazgo que se realiza en el Tecnológico de Monterrey en Hidalgo anualmente desde 2017, mediante conferencias de liderazgo y talleres, se sensibilice a los participantes en su forma de desiciones y la forma en que sus actos trascienden en México.',
        }
    }

    render() {
	    return (
	        <div className="ui-about-container">
                <div className="ui-img"></div>
                <div className="ui-about-content-text">
                    <div className="ui-about-text">
                        <label className="ui-about-text-tittle">{this.state.about}</label>
                        <label className="ui-about-text-content">{this.state.content}</label>
                    </div>
                </div>
            </div>
	    )
    }
}

export default Navbar 
