import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './privateRoute'
import { ROOT, SPEAKERS } from '../utils/routes'
import { Speakers, Landing } from '../components/Sites'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route exact path = { ROOT } component = { Landing } />
            <Route exact path = { SPEAKERS } component = { Speakers } />
        </Switch>
    </Fragment>

export default Routes