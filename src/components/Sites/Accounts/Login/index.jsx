import React, { Component } from 'react'
import { Layout, Input, Button } from 'antd'
import './index.scss'
import { withAuth } from '../../../../auth'
const { Content } = Layout
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.props.auth.handleLogin
    }

    changeCredentials = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleLogin = async () => {
        try {
            const userLogged = await this.login(this.state)
            if (!userLogged.hasError) console.log(userLogged)
            else console.log('Ahorita vemos que pedo')
        } catch (error) {
            console.log(error)
        }
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
export default withAuth(Login)