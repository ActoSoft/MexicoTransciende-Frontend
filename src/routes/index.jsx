import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import {
    ROOT,
    LOGIN,
    DASHBOARD,
    REGISTER,
    ORGANIZERS
} from '../utils/routes'

import {
    Landing,
    Login,
    Dashboard,
    Register,
    Organizers
} from '../components/Sites'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route exact path = { ROOT } component = { Landing } />
            <Route exact path = { LOGIN } component = { Login } />
            <Route exact path = { ORGANIZERS } component = { Organizers } />
            <PrivateRoute exact path = { DASHBOARD } component = { Dashboard } />
            <PrivateRoute exact path = { REGISTER } component = { Register } />
        </Switch>
    </Fragment>

export default Routes