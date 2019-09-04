import React from 'react'
import { Layout } from 'antd'
import './index.scss'
import { withAuth } from '../../../../auth/'
const { Content } = Layout

const Dashboard = ({auth}) => {
    return (
        <Layout className = 'layout'>
            <Content className = 'dashboard-content'>
                <p className = 'dashboard-title'>
                    Hola, {auth.name}!
                </p>
            </Content>
        </Layout>
    )
}

export default withAuth(Dashboard)