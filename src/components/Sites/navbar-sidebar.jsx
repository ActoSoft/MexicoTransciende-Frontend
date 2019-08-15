import React, { Fragment } from 'react'
import cross from '../../multiply.svg'
import logo from '../../logo.png'
import menu from '../../menu.svg'
import user from '../../user.svg'
import { withSidebar } from '../../sidebar'


const NavbarSidebar = ({ sidebar }) =>
    <Fragment>
        <div className = {`App ${sidebar.sidebar ? 'right-move' : 'left-move'}`}>
            <div className = {`side-bar ${sidebar.sidebar ? 'side-visible' : 'side-hidde'}`}>
                <img src = { cross } alt = '' className = 'cross'
                    onClick = { sidebar.closeSidebar() }
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
                        onClick = { sidebar.openSidebar() }
                    />
                    <img src = { logo } alt=''/>
                    <img src = { user } alt=''/>
                </header>
            </div>
        </div>
    </Fragment>

export default withSidebar(NavbarSidebar)