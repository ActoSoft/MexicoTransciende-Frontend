import React from 'react'
import { Layout, Icon, Row, Col } from 'antd'
import './index.scss'
import { withAuth } from '../../../../auth/'
import { Link } from 'react-router-dom'
const { Content } = Layout

const Dashboard = ({auth}) => {
    const cards = [
        {
            icon: 'user',
            title: 'Asistentes al evento',
            actions: [
                {
                    name: 'Registar asistente',
                    url: '/register'
                },
            ]
        }
    ]
    return (
        <Layout className = 'layout'>
            <Content className = 'dashboard-content'>
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

            </Content>
        </Layout>
    )
}

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

export default withAuth(Dashboard)