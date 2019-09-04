import React, { Component } from 'react'
import { Layout, Input, Button } from 'antd'
import './index.scss'
const { Content } = Layout

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    changeCredentials = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleLogin = () => {
        console.log('Login')
    }

    render() {
        return (
            <Layout className = 'layout'>
                <Content className = 'content'>
                    <p className = 'login-title'>Inicia sesión</p>
                    <Input
                        placeholder = 'Correo Electrónico'
                        className = 'login-input'
                        name = 'email'
                        value = { this.state.email }
                        onChange = { (e) => this.changeCredentials(e) }
                    />
                    <Input.Password
                        placeholder = 'Contraseña'
                        className = 'login-input-password'
                        name = 'password'
                        value = { this.state.password }
                        onChange = { (e) => this.changeCredentials(e) }
                    />
                    <Button
                        className = 'login-btn'
                        size = 'large'
                        onClick = { this.handleLogin }
                    >Entrar</Button>
                </Content>
            </Layout>
        )
    }
}