import React from 'react'
import { Layout } from 'antd'
import { AdminRoutes } from '../../../../routes'
import './index.scss'
const { Content } = Layout

const Dashboard = () => {
    return (
        <Layout className = 'layout'>
            <Content className = 'dashboard-content'>
                <AdminRoutes />
            </Content>
        </Layout>
    )
}


export default Dashboard