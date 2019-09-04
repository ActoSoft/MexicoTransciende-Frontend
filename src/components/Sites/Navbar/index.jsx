import React, { Fragment, Component } from 'react'
import logo from '../../../images/logo-transparency-square.png'
import cross from '../../../images/icons/multiply.svg'
import menu from '../../../images/icons/menu.svg'
import user from '../../../images/icons/user.svg'
import './index.scss'

class NavbarSidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: false,
        }
    }

    componentDidMount = ( ) => {
        window.addEventListener('scroll', () => {
            let nav = document.getElementsByClassName('desktop-version')[0]
            if( window.scrollY >= window.innerHeight ){
                nav.style.position = 'fixed'
                nav.style.backgroundColor = '#fff'
                nav.style.animation = 'side-down 0.5s ease-in-out'
                nav.style.boxShadow = '0px 1px 5px rgba(0,0,0,0.3)'
            }
            else{
                nav.style.position = 'absolute'
                nav.style.animation = 'side-up 0.5s ease-in-out'
                nav.style.backgroundColor = '#fff0'
                nav.style.boxShadow = '0px 0px 0px rgba(0,0,0,0.3)'
            }
        })
    }

    // changePosition = () => {
    //     let { scrollY, innerHeight } = window
    //     let { navbarBackground } = this.state
    //     if(scrollY > innerHeight && !navbarBackground) {
    //         this.setState({ navbarBackground: true })
    //     }

    //     if(scrollY < innerHeight && navbarBackground) {
    //         this.setState({ navbarBackground: false })
    //     }
    // }

    // componentDidMount = () => {
    //     window.addEventListener('scroll', this.changePosition)
    // }

    componentWillUnmount = () => {
        window.removeEventListener('scroll')
    }

    changeSidebar = value => {
        this.setState({ sidebarOpen: value })
    }

    render() {
        return(
            <Fragment>
                <div className = { `Navbar ${this.state.sidebarOpen ? 'right-move' : 'left-move'}` }>
                    <div className = { `side-bar ${this.state.sidebarOpen ? 'side-visible' : 'side-hidde'}` }>
                        <img src = { cross } alt = '' className = 'cross'
                            onClick = { () => this.changeSidebar(false) }
                        />
                        <ul className = 'options-container' >
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Inicio</li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Acerca de</li>
                            {/*<li className = 'link' onClick = { () => this.changeSidebar(false) }>Ponentes</li>*/}
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Equipo Org.</li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Patrocinadores</li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Contacto</li>
                        </ul>
                        <img src = { logo } alt = '' className = 'logo-sidebar'/>
                    </div>
                    <header>
                        <div className = 'mobile-version'>
                            <img src = { !this.state.sidebarOpen ? menu : cross } alt = ''
                                onClick = { () => this.changeSidebar(!this.state.sidebarOpen) }
                            />
                            <img src = { logo } alt = ''/>
                            <img src = { user } alt = ''/>
                        </div>
                        <div className = 'desktop-version'>
                            <img src = { logo } alt = ''/>
                            <ul className = 'desktop-navbar-list'>
                                <li className = 'link' >Inicio</li>
                                <li className = 'link' >Acerca de</li>
                                {/*<li className = 'link' >Ponentes</li>*/}
                                <li className = 'link' >Equipo Organizador</li>
                                <li className = 'link' >Patrocinadores</li>
                                <li className = 'link' >Contacto</li>
                            </ul>
                        </div>
                    </header>
                    <div
                        className = { `black-div ${ this.state.sidebarOpen ? 'visible-div' : 'hidden-div' }` }
                        onClick = { () => this.changeSidebar(false) }
                    />
                </div>
            </Fragment>
        )
    }
}
export default NavbarSidebar