import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './privateRoute'
import { ROOT } from '../utils/routes'
import { Landing } from '../components/Sites'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route path={ROOT} component={ Landing } />
        </Switch>
    </Fragment>

export default Routes