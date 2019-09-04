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
            password: '',
            loading: false
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
        this.activateLoading()
        try {
            const userLogged = await this.login(this.state)
            this.desactivateLoading()
            if (!userLogged.hasError) {
                if (userLogged.role === 'Assistant') {
                    setTimeout(() => {
                        this.props.history.push('/profile')
                    }, 3000)
                } else {
                    setTimeout(() => {
                        this.props.history.push('/dashboard')
                    }, 3000)
                }
            }
            else console.log(userLogged.error)
        } catch (error) {
            this.desactivateLoading()
            console.log(error)
        }
    }

    activateLoading = () => {
        this.setState({
            loading: true
        })
    }

    desactivateLoading = () => {
        this.setState({
            loading: false
        })
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
                        loading = { this.state.loading }
                        onClick = { this.handleLogin }
                    >Entrar</Button>
                </Content>
            </Layout>
        )
    }
}
export default withAuth(Login)