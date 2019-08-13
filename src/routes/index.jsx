import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './privateRoute'
import Landing from '../components/landing'
import { ROOT } from '../utils/routes';

const Routes = () =>
    <Fragment>
        <Switch>
            <Route path={ROOT} component={ Landing } />
        </Switch>
    </Fragment>

export default Routes