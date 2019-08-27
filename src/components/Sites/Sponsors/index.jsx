import React, { Component, Fragment } from 'react'
import './index.scss'

export default class Sponsors extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sponsors: []
        }
    }

    componentDidMount = () => {
        this.setState({
            sponsors: [
                {
                    name: 'Actosoft',
                    image: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/17951936_1260416267412871_2556386545607301962_n.jpg?_nc_cat=109&_nc_eui2=AeH2L4qFsKc96PL0qwA9ZAxzJ-G33QUBsc6riVix7BlddEoUjXty64qsU7bVYCHGp1fuoxDPIXQtEpU9Mi1DwPWoz-eJHEAreHkhDzPL4wYGYA&_nc_oc=AQn-olhHs9RjhtjY6ZvBpc2yU3RG7W1Z97ElZ4z1g6IfOak8CArkw4V1vUD0lyU31_k&_nc_ht=scontent.fmex10-2.fna&oh=5b637b75dbc04f87ab42cf3a82afd6d3&oe=5E1005CF',
                    webURL: 'http://mxtrasciende.actosoft.com.mx',
                    facebookURL: 'https://www.facebook.com/ActosoftCommunity/',
                    instagramURL: 'https://www.instagram.com/actosoft_mx/'
                },
                {
                    name: 'Fixter',
                    image: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/51811941_2538272786236545_878876378936639488_n.png?_nc_cat=107&_nc_eui2=AeGZzjMaUL0CkWeoHcNGr2lkkvxNY0fM80YmDZR7kx8V6Tqu4ryNxZcJ7Q-6SjFEqy9NvG1_rk2xdafdR1VkLTSTnbxR51fXfZBdD2fbLTet2g&_nc_oc=AQnj_glRvhzfqRZDVPir8exJ2xjSWx29lANyb8js8ONagTcGfef9-dOBRaKghlHh_J0&_nc_ht=scontent.fmex10-2.fna&oh=725add8ecc9a798f51dcbf1854e6a6fa&oe=5DD13025',
                    webURL: 'https://fixter.camp/',
                    facebookURL: 'https://www.facebook.com/fixterme/',
                    twitterURL: 'https://twitter.com/HectorBlisS',
                    instagramURL: 'https://www.instagram.com/fixtergeek/?hl=es-la'
                },
                {
                    name: 'Coca Cola',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png',
                    webURL: 'https://www.coca-colamexico.com.mx/',
                    facebookURL: 'https://www.facebook.com/CocaColaMx/',
                    twitterURL: 'https://twitter.com/CocaCola',
                    instagramURL: 'https://www.instagram.com/cocacola/?hl=es-la'
                }
            ]
        })
    }

    render() {
        return(
            <Fragment>
                <div className = 'sponsors-container'>
                    { this.state.sponsors.map((sponsor, index) =>
                        <SponsorItem
                            key = { index }
                            sponsor = { sponsor }
                        />
                    )}
                </div>
            </Fragment>
        )
    }
}

const SponsorItem = ({sponsor}) =>
    <div className = 'sponsor-single'>
        <div className = 'sponsor-image'>
            <img src = { sponsor.image } alt = 'Sponsor Image' />
        </div>
        <div className = 'sponsor-body'>
            <p className = 'sponsor-title'>{sponsor.name}</p>
            <div className = 'sponsor-links'>
            </div>
        </div>
    </div>