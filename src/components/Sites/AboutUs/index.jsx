import React, { Component } from 'react'
import './index.scss'

class AboutUs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            about: '¿Qué es México Trasciende?',
            content: 'México Trasciende es un evento de liderazgo que se realiza en el Tecnológico de Monterrey en Hidalgo anualmente desde 2017, mediante conferencias de liderazgo y talleres, se sensibilice a los participantes en su forma de desiciones y la forma en que sus actos trascienden en México.',
            mision: 'Nuestra MISIÓN',
            contentMision: 'Crear un espacio de concientización y participación, en el que los jóvenes de Hidalgo y otras partes del país adquieran habilidades que los conviertan en líderes que transformen sus realidades y potencialicen el desarrollo positivo de México.',
            vision: 'Nuestra VISIÓN',
            contentVision: 'Convertir a México Trasciende en el evento de liderazgo organizado por estudiantes universitarios del Tecnológico de Monterrey campus Hidalgo con mayor impacto y trascendencia a nivel nacional.'

        }
    }

    render() {
	    return (
	        <div className = 'ui-about-container'>
                <div className = 'ui-about-content-text'>
                    <div className = 'ui-about-text'>
                        <label className = 'ui-about-text-tittle'>{this.state.about}</label>
                        <label className = 'ui-about-text-content'>{this.state.content}</label>
                    </div>
                    <div className = 'ui-about-text'>
                        <label className = 'ui-about-text-tittle'>{this.state.vision}</label>
                        <label className = 'ui-about-text-content'>{this.state.contentVision}</label>
                    </div>
                    <div className = 'ui-about-text'>
                        <label className = 'ui-about-text-tittle'>{this.state.mision}</label>
                        <label className = 'ui-about-text-content'>{this.state.contentMision}</label>
                    </div>
                </div>

            </div>
	    )
    }
}

export default AboutUs
