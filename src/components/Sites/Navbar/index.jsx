import React, { Fragment, Component } from 'react'
import logo from '../../../images/logo-transparency-square.png'
import cross from '../../../images/icons/multiply.svg'
import menu from '../../../images/icons/menu.svg'
import user from '../../../images/icons/user.svg'
import './index.scss'
import { Link } from 'react-router-dom'

class NavbarSidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: false,
        }
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
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }><a href = '/'>Inicio</a></li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Acerca de</li>
                            {/*<li className = 'link' onClick = { () => this.changeSidebar(false) }>Ponentes</li>*/}
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }><a href = '/organizers'>Equipo Org.</a></li>
                            {/* <li className = 'link' onClick = { () => this.changeSidebar(false) }>Patrocinadores</li> */}
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }>Contacto</li>
                            <li className = 'link' onClick = { () => this.changeSidebar(false) }><a href = '/login'>Iniciar Sesión</a></li>
                        </ul>
                        <img src = { logo } alt = '' className = 'logo-sidebar'/>
                    </div>
                    <header>
                        <div className = 'mobile-version'>
                            <img src = { !this.state.sidebarOpen ? menu : cross } alt = ''
                                onClick = { () => this.changeSidebar(!this.state.sidebarOpen) }
                            />
                            <Link to = '/'><img className = 'navbar-mobile-version' src = { logo } alt = ''/></Link>
                            <a href = '/login'><img src = { user } alt = ''/></a>
                        </div>
                        <div className = 'desktop-version'>
                            <Link to = '/'><img src = { logo } alt = ''/></Link>
                            <ul className = 'desktop-navbar-list'>
                                <li className = 'link' ><a href = '/'>Inicio</a></li>
                                <li className = 'link' >Acerca de</li>
                                {/*<li className = 'link' >Ponentes</li>*/}
                                <li className = 'link' ><a href = '/organizers'>Equipo Organizador</a></li>
                                {/* <li className = 'link' >Patrocinadores</li> */}
                                <li className = 'link' >Contacto</li>
                                <li className = 'link' ><a href = '/login'>Iniciar Sesión</a></li>
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