import React, { Fragment, useState } from 'react'
import logo from '../../../images/logo-transparency.png'
import cross from '../../../images/icons/multiply.svg'
import user from '../../../images/user.svg'
import './index.scss'
// import Navbar from '../../mobile/navbar'

const NavbarSidebar = () => {

    const [openSidebar, changeSidebar] = useState(false)

    return(
        <Fragment>
            <div className = {`App ${openSidebar ? 'right-move' : 'left-move'}`}>
                <div className = {`side-bar ${openSidebar ? 'side-visible' : 'side-hidden'}`}>
                    <img src = { cross } alt = '' className = 'cross'
                        onClick = { () => changeSidebar(false) }
                    />
                    <ul className = 'options-container' >
                        <li className = "link" onClick = { () => changeSidebar(false) }>Inicio</li>
                        <li className = "link" onClick = { () => changeSidebar(false) }>Acerca de</li>
                        <li className = "link" onClick = { () => changeSidebar(false) }>Speakers</li>
                        <li className = "link" onClick = { () => changeSidebar(false) }>Equipo Org.</li>
                        <li className = "link" onClick = { () => changeSidebar(false) }>Patrocinadores</li>
                        <li className = "link" onClick = { () => changeSidebar(false) }>Contacto</li>
                    </ul>
                    <img src = { logo } alt='' className = 'logo-sidebar'/>
                </div>
                <div className="ui-navbar">
                    <div className="ui-hamburger-menu" onClick={() => changeSidebar(true)}>
                        <div className="line"></div>
                        <div className="line-large"></div>
                        <div className="line"></div>
                    </div>
                    <img src={logo} alt="User" className="img-icon"/>
                    <img src={user} alt="User" className="img-nav"/>
                </div>
                {/* <Navbar changeSidebar={changeSidebar}/> */}
            </div>
        </Fragment>
    )
}
export default NavbarSidebar