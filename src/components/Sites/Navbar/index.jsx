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
                        <li>Inicio</li>
                        <li>Acerca de</li>
                        <li>Speakers</li>
                        <li>Equipo Org.</li>
                        <li>Patrocinadores</li>
                        <li>Contacto</li>
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