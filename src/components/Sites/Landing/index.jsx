import React, { Component, Fragment } from 'react'
import './index.scss'
import whiteLogo from '../../../images/logo-white-color-transparency.png'
import CountDown from './Countdown'
import Speakers from '../Speakers'
import AboutUs from '../AboutUs'
import InfoEvent from '../InfoEvent'
import Sponsors from '../Sponsors'

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            actualImage: 0,
            transition: false
        }
    }

    getImages = () => {
        this.setState({ images: [
            'https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        ]})
    }
    componentDidMount = () => {
        this.getImages()
        setInterval(() => {
            let { images, actualImage, transition } = this.state
            actualImage = actualImage + 1 === images.length
                ? 0 : actualImage + 1
            transition = true
            this.setState({ actualImage, transition })
            setTimeout( () => {
                this.setState({ transition: false })
            }, 1000)
        }, 5000)
    }


    render() {
        const { images, actualImage, transition } = this.state
        return (
            <Fragment>
                <div
                    className = 'slider-container'
                    style = {{
                        backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.30),
                        rgba(176, 59, 60, 0.30))`,
                        position: 'relative'
                    }}
                >
                    <div className = { `before ${transition ? 'active' : 'not-active'}` }
                        style = {{
                            backgroundImage: `url(${transition ? actualImage - 1 < 0 ? images[images.length - 1] : images[actualImage - 1] : images[actualImage]})`,
                        }}
                    />
                    <div className = { `after ${transition ? 'active' : 'not-active'}` }
                        style = {{
                            backgroundImage: `url(${images[actualImage]})`,
                        }}
                    />
                    <img
                        src = { whiteLogo }
                        className = 'logo-cover'
                        alt = 'MXT Logo'
                    />

                    <CountDown />
                </div>
                <AboutUs />
                <InfoEvent />
                <Speakers />
                <Sponsors />
            </Fragment>
        )
    }
}

export default Landing