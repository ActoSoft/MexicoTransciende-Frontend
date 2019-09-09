import React, { Fragment } from 'react'
import { Routes } from './routes'
import { NavbarSidebar } from './components/Sites'
import 'antd/dist/antd.css'
import { ToastContainer } from 'react-toastify'
import './App.scss'
import 'react-toastify/dist/ReactToastify.css'

const App = () =>
    <Fragment>
        <NavbarSidebar />
        <Routes />
        <ToastContainer />
    </Fragment>

export default App
