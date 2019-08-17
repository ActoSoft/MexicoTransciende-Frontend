import React, { Fragment } from 'react'
import Router from './routes'
import { NavbarSidebar } from './components/Sites'

const App = () =>
    <Fragment>
        <NavbarSidebar />
        <Router />
    </Fragment>

export default App
