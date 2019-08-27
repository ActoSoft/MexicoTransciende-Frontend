import React, { Fragment } from 'react'
import Router from './routes'
import { NavbarSidebar, InfoEvent } from './components/Sites'
import './App.scss'

const App = () =>
    <Fragment>
        <NavbarSidebar />
        <Router />
        <InfoEvent />
    </Fragment>

export default App
