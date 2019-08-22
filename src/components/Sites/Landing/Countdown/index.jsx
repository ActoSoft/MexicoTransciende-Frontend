import React, { Component } from 'react'
import './index.scss'

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finalDate: new Date('2019-11-15').getTime(),
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            const now = new Date().getTime()
            const time = this.state.finalDate - now
            let {
                days,
                hours,
                minutes,
                seconds
            } = this.state
            days = Math.floor(time / (1000 * 60 * 60 * 24))
            hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            minutes = Math.floor(time % (1000 * 60 * 60) / (1000 * 60))
            seconds = Math.floor(time % (1000 * 60) / 1000)
            this.setState({ days, hours, minutes, seconds })
        }, 1000)
    }
    render() {
        const {
            days,
            hours,
            minutes,
            seconds
        } = this.state
        return (
            <div className = 'countdown-container'>
                <div className = 'time-containers'>
                    <div className = 'single-number'>
                        {days > 9 ? days.toString()[0] : '0' }
                    </div>
                    <div className = 'single-number'>
                        {days > 9 ? days.toString()[1] : days }
                    </div>
                </div>
                <div className = 'time-containers'>
                    <div className = 'single-number'>
                        {hours > 9 ? hours.toString()[0] : '0' }
                    </div>
                    <div className = 'single-number'>
                        {hours > 9 ? hours.toString()[1] : hours }
                    </div>
                </div>
                <div className = 'time-containers'>
                    <div className = 'single-number'>
                        {minutes > 9 ? minutes.toString()[0] : '0' }
                    </div>
                    <div className = 'single-number'>
                        {minutes > 9 ? minutes.toString()[1] : minutes }
                    </div>
                </div>
                <div className = 'time-containers'>
                    <div className = 'single-number'>
                        {seconds > 9 ? seconds.toString()[0] : '0' }
                    </div>
                    <div className = 'single-number'>
                        {seconds > 9 ? seconds.toString()[1] : seconds }
                    </div>
                </div>
            </div>
        )
    }
}

export default CountDown