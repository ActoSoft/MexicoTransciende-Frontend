import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './privateRoute'
import { ROOT, SPEAKERS } from '../utils/routes'
import { Landing, Speakers, AboutUs } from '../components/Sites'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route exact path={ ROOT } component={ AboutUs } />
            <Route exact path={ SPEAKERS } component={ Speakers } />
        </Switch>
    </Fragment>

export default Routes