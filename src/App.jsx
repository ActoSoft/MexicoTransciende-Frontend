import React, { Fragment } from 'react'
import './App.scss'
import Navbar from './components/mobile/navbar'
import About from './components/mobile/about'

const App = () =>
    <Fragment>
        <Navbar/>
        <About/>
    </Fragment>

export default App