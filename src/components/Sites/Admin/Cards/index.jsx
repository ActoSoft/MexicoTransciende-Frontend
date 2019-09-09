import React, { Fragment } from 'react'
import { Icon, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { withAuth } from '../../../../auth/'
import { DASHBOARD } from '../../../../utils/routes'

const cards = [
    {
        icon: 'user',
        title: 'Asistentes al evento',
        actions: [
            {
                name: 'Registar asistente',
                url: `${DASHBOARD}/register/`
            },
            {
                name: 'Ver asistentes',
                url: `${DASHBOARD}/assistants/`
            }
        ]
    }
]

const CardsDashboard = ({auth}) =>
    <Fragment>
        <p className = 'dashboard-title'>
            Hola, {auth.name}!
        </p>

        <Row className = 'dashboard-cards-container'>
            {cards.map((card, index) =>
                <DashboardCard
                    card = { card }
                    key = { index }
                />
            )}
        </Row>
    </Fragment>

const DashboardCard = ({card}) => {
    return (
        <Col
            className = 'dashboard-card-container'
            xs = { 24 }
            sm = { 24 }
            md = { 12 }
            lg = { 7 }
            xl = { 7 }
        >
            <div className = 'dashboard-card-header'>
                <Icon
                    type = { card.icon }
                    className = 'dashboard-card-icon'
                />
                <p className = 'dashboard-card-title'>{card.title}</p>
            </div>
            <div className = 'dashboard-card-actions'>
                {card.actions.map((action, index) =>
                    <Link
                        to = { action.url }
                        key = { index }
                    >
                        <p className = 'dashboard-card-action'>
                            {action.name}
                        </p>
                    </Link>
                )}
            </div>
        </Col>
    )
}

export default withAuth(CardsDashboard)