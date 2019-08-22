import React, { Fragment } from 'react'
import './index.scss'
import whiteLogo from '../../../images/logo-white-color-transparency.png'
import CountDown from './Countdown'

const images = [
    'https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

const Landing = () => {
    return (
        <Fragment>
            <div
                className = 'slider-container'
                style = {{
                    backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.30),
                    rgba(255, 0, 0, 0.30)),
                    url('${images[0]}'`
                }}
            >
                <img
                    src = { whiteLogo }
                    className = 'logo-cover'
                    alt = 'MXT Logo'
                />

                <CountDown />
            </div>
        </Fragment>
    )
}

export default Landing