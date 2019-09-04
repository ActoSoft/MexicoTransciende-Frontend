import React, { Component, Fragment } from 'react'
import './index.scss'
// import whiteLogo from '../../../images/logo-white-color-transparency.png'
import CountDown from './Countdown'
import {
    // Speakers,
    AboutUs,
    InfoEvent,
    Organizers,
    // Sponsors,
    ContactForm
} from '../'

//Import sliders
import sliderLandscape1 from '../../../images/sliders/1h.jpg'
import sliderLandscape2 from '../../../images/sliders/2h.jpg'
import sliderLandscape3 from '../../../images/sliders/3h.jpg'
import sliderLandscape4 from '../../../images/sliders/4h.jpg'
import sliderLandscape5 from '../../../images/sliders/5h.jpg'
import sliderPortrait1 from '../../../images/sliders/1v.jpg'
import sliderPortrait2 from '../../../images/sliders/2v.jpg'
import sliderPortrait3 from '../../../images/sliders/3v.jpg'
import sliderPortrait4 from '../../../images/sliders/4v.jpg'
import sliderPortrait5 from '../../../images/sliders/5v.jpg'


class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            actualImage: 0,
            transition: false
        }
        this.horizontalSliders = [
            sliderLandscape1,
            sliderLandscape2,
            sliderLandscape3,
            sliderLandscape4,
            sliderLandscape5
        ]
        this.verticalSliders = [
            sliderPortrait1,
            sliderPortrait2,
            sliderPortrait3,
            sliderPortrait4,
            sliderPortrait5
        ]
    }

    resizeMethod = () => {
        if (window.innerWidth >= window.innerHeight) {
            this.setState({
                images: this.horizontalSliders
            })
        } else {
            this.setState({
                images: this.verticalSliders
            })
        }
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.resizeMethod)
        this.resizeMethod()
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
                    // style = {{
                    //     backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.30),
                    //     rgba(176, 59, 60, 0.30))`,
                    //     position: 'relative'
                    // }}
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
                    {/* <img
                        src = { whiteLogo }
                        className = 'logo-cover'
                        alt = 'MXT Logo'
                    /> */}

                    <CountDown />
                </div>
                <AboutUs />
                <InfoEvent />
                {/* <Speakers />
                <Sponsors /> */}
                <Organizers />
                <ContactForm />
            </Fragment>
        )
    }
}

export default Landing