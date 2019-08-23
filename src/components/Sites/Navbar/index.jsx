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
            // navbarBackground: true
        }
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

    // componentWillUnmount = () => {
    //     window.removeEventListener('scroll', this.changePosition)
    // }

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
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Speakers</li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Equipo Org.</li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Patrocinadores</li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Contacto</li>
                        </ul>
                        <img src = { logo } alt = '' className = 'logo-sidebar'/>
                    </div>
                    <header>
                        <img src = { menu } alt = ''
                            onClick = { () => this.changeSidebar(true) }
                        />
                        <img src = { logo } alt = ''/>
                        <img src = { user } alt = ''/>
                    </header>
                    <div
                    className = {`black-div ${ this.state.sidebarOpen ? "visible-div" : "hidden-div" }`}
                    onClick = { () => this.changeSidebar(false) } />
                </div>
            </Fragment>
        )
    }
}
export default NavbarSidebar