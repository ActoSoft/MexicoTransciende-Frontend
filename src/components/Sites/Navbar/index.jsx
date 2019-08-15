import React, { Fragment, useState } from 'react'
import logo from '../../../images/logo-transparency-square.png'
import cross from '../../../images/icons/multiply.svg'
import menu from '../../../images/icons/menu.svg'
import user from '../../../images/icons/user.svg'

const NavbarSidebar = () => {

    const [openSidebar, changeSidebar] = useState(false)

    return(
        <Fragment>
            <div className = {`App ${openSidebar ? 'right-move' : 'left-move'}`}>
                <div className = {`side-bar ${openSidebar ? 'side-visible' : 'side-hidde'}`}>
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
                <div className = 'the-other-content'>
                    <header>
                        <img src = { menu } alt=''
                            onClick = { () => changeSidebar(true) }
                        />
                        <img src = { logo } alt=''/>
                        <img src = { user } alt=''/>
                    </header>
                </div>
            </div>
        </Fragment>
    )
}
export default NavbarSidebar