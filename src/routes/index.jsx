import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import {
    ROOT,
    LOGIN,
    DASHBOARD,
    REGISTER,
    ASSISTANTS
} from '../utils/routes'

import {
    Landing,
    Login,
    Dashboard,
    Register,
    Assistants,
    CardsDashboard
} from '../components/Sites'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route exact path = { ROOT } component = { Landing } />
            <Route exact path = { LOGIN } component = { Login } />
            <PrivateRoute path = { DASHBOARD } component = { Dashboard } />
        </Switch>
    </Fragment>

const AdminRoutes = () =>{
    return(
        <Switch>
            <PrivateRoute exact path = { DASHBOARD } component = { CardsDashboard } />
            <Route path = { DASHBOARD + REGISTER } component = { Register } />
            <Route path = { DASHBOARD + ASSISTANTS } component = { Assistants } />
        </Switch>
    )
}

export { Routes, AdminRoutes }