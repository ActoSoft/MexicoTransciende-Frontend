import React, { Component } from 'react'
import './index.scss'
import Calendar from './../../../images/icons/calendar.svg'
import Location from './../../../images/icons/location.svg'
import Clock from './../../../images/icons/clock.svg'
class InfoEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tittle_Place: 'Lugar:',
            tittle_Time: 'Duración:',
            tittle_Day: 'Día:',
            place: 'Tecnólogico de Monterrey, campus Pachuca.',
            time: '8:00 hrs - 18:00 hrs',
            day: '14 de noviembre'
        }
    }

    render() {
	    return (
	        <div className="ui-info-container">
                <div className="ui-info-container">
                <div className="ui-info-content">
                    <img src={Location} className="ui-info-icon" alt="Lugar" />
                    <div className="ui-info-content-item">
                        <label className="tittle-info">{this.state.tittle_Place}</label>
                        <label className="tittle-text">{this.state.place}</label>
                    </div>
                    <img src={Calendar} className="ui-info-icon" alt="Fecha" />
                    <div className="ui-info-content-item">
                        <label className="tittle-info">{this.state.tittle_Day}</label>
                        <label className="tittle-text">{this.state.day}</label>
                    </div>
                    <img src={Clock} className="ui-info-icon" alt="Duración"/>
                    <div className="ui-info-content-item">
                        <label className="tittle-info">{this.state.tittle_Time}</label>
                        <label className="tittle-text">{this.state.time}</label>
                    </div>
                </div>
            </div>
            </div>
	    )
    }
}

export default InfoEvent
