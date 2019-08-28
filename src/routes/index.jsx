import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './privateRoute'
import { ROOT, SPEAKERS, TEAM_ORGANIZER } from '../utils/routes'
import { Landing, Speakers, Team_organizer } from '../components/Sites'

const Routes = () =>
    <Fragment>
        <Switch>
            <Route exact path = { ROOT } component = { Landing } />
            <Route exact path = { SPEAKERS } component = { Speakers } />
            <Route exact path = { TEAM_ORGANIZER } component = { Team_organizer } />
        </Switch>
    </Fragment>

export default Routes