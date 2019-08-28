import React, { Component } from 'react'
import Time from './Time'
import './index.scss'

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finalDate: new Date('2019-11-15')
                .getTime(),
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            let {
                days,
                hours,
                minutes,
                seconds,
                finalDate
            } = this.state

            const now = new Date().getTime()
            const time = finalDate - now

            const daysOp = 1000 * 60 * 60 * 24
            const hoursOp = 1000 * 60 * 60
            const minutesOp = 1000 * 60
            const secondsOp = 1000

            days = Math.floor(time / daysOp)
            hours = Math.floor(time % daysOp / hoursOp)
            minutes = Math.floor(time % hoursOp / minutesOp)
            seconds = Math.floor(time % minutesOp / secondsOp)
            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }, 1000)
    }
    render() {
        const {
            days,
            hours,
            minutes,
            seconds
        } = this.state

        const times = [
            { time: days, label: 'DÍAS' },
            { time: hours, label: 'HORAS' },
            { time: minutes, label: 'MINUTOS' },
            { time: seconds, label: 'SEGUNDOS' }
        ]
        return (
            <div className = 'countdown-container'>
                <div className = 'text'>
                    <p className = 'minus'>¿Estás listo para el evento?</p>
                    <p className = 'mayus'> SÓLO FALTA ...</p>
                </div>
                <div className = 'countdown'>
                    { times.map((value, index) => {
                        const { time, label } = value
                        return (
                            <Time
                                key = { index }
                                time = { time }
                                label = { label }
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CountDown