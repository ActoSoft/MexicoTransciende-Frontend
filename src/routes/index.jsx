import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './privateRoute'
import {
    ROOT,
    LOGIN,
    REGISTER
} from '../utils/routes'

import {
    Landing,
    Login,
    Register
} from '../components/Sites'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route exact path = { ROOT } component = { Landing } />
            <Route exact path = { LOGIN } component = { Login } />
            <Route exact path = { REGISTER } component = { Register } />
        </Switch>
    </Fragment>

export default Routes