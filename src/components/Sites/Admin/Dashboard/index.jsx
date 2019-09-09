import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { AdminRoutes } from '../../../../routes'
import { NavLink } from 'react-router-dom'
import { DASHBOARD, ASSISTANTS, REGISTER } from '../../../../utils/routes'
import './index.scss'
const { Content, Header } = Layout
const { Item } = Menu
class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout className = 'layout'>
                <Header className = 'header'>
                    <Menu
                        theme = 'light'
                        mode = 'horizontal'
                        defaultSelectedKeys = { ['dashboard'] }
                        style = {{ lineHeight: '64px' }}
                    >
                        <Item key = 'dashboard'>
                            <NavLink to = { DASHBOARD }>
                                Inicio
                            </NavLink>
                        </Item>
                        <Item key = 'assistants'>
                            <NavLink to = { DASHBOARD + ASSISTANTS }>
                                Ver asistentes
                            </NavLink>
                        </Item>
                        <Item key = 'register'>
                            <NavLink to = { DASHBOARD + REGISTER }>
                                Registrar asistente
                            </NavLink>
                        </Item>
                    </Menu>
                </Header>
                <Content className = 'dashboard-content'>
                    <AdminRoutes />
                </Content>
            </Layout>
        )
    }
}


export default Dashboard