import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './privateRoute'
import Landing from '../components/landing'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route path="/" component={ Landing } />
        </Switch>
    </Fragment>

export default Routes