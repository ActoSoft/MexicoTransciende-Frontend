import React, { Component } from 'react'
import { Layout, Input, Button, Dropdown, Icon, Menu } from 'antd'
import './index.scss'
import { toast } from 'react-toastify'
import { withAuth } from '../../../../auth/'
const DEFAULT_PASSWORD = process.env.REACT_APP_DEFAULT_PASSWORD
const { Content } = Layout


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            age: '',
            address: '',
            gender: null,
            role: null,
            buttonLoading: false
        }
        this.register = this.props.auth.handleRegister
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleChangeRole = (value) => {
        let role = ''
        switch(value) {
        case 'Administrador':
            role = 'Admin'
            break
        case 'Miembro Organizador':
            role = 'Team'
            break
        case 'Vendedor':
            role = 'Seller'
            break
        case 'Invitado':
            role = 'Assistant'
            break
        }
        this.setState({
            role
        })
    }

    validateEmail = () => {
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
        {
            return true
        } else {
            toast.error('El email no es válido')
            return false
        }
    }

    validateName = () => {
        if (!this.state.name || this.state.name === '') {
            toast.warn('Verifica el nombre del asistente')
            return false
        }
        return true
    }

    validatePhone = () => {
        if (!this.state.phone || this.state.phone === '' || this.state.phone.length < 10) {
            toast.warn('Verifica el teléfono')
            return false
        }
        return true
    }

    validateGender = () => {
        if (!this.state.gender || this.state.gender === '') {
            toast.warn('Selecciona un valor para género')
            return false
        }
        return true
    }

    validateRole = () => {
        if(!this.state.role || this.state.role === '') {
            toast.warn('Selecciona un rol para este usuario')
            return false
        }
        return true
    }

    activateLoading = () => {
        this.setState({
            buttonLoading: true
        })
    }

    desactivateLoading = () => {
        this.setState({
            buttonLoading: false
        })
    }

    handleRegister = async () => {
        if (this.validateName() && this.validateEmail() && this.validatePhone() && this.validateGender() && this.validateRole()) {
            this.activateLoading()
            try {
                await this.register({
                    ...this.state,
                    username: this.state.email,
                    password: DEFAULT_PASSWORD
                })
                this.desactivateLoading()
            } catch (error) {
                this.desactivateLoading()
                throw error
            }
        }
    }

    render () {

        const genderMenu =
            <Menu onClick = { (e) => this.handleChange('gender', e.item.props.children) }>
                <Menu.Item key = { 1 }>Masculino</Menu.Item>
                <Menu.Item key = { 2 }>Femenino</Menu.Item>
                <Menu.Item key = { 3 }>Prefiero no decir</Menu.Item>
            </Menu>

        const roleMenu =
            <Menu onClick = { (e) => this.handleChangeRole(e.item.props.children) }>
                <Menu.Item key = { 4 }>Administrador</Menu.Item>
                <Menu.Item key = { 5 }>Miembro Organizador</Menu.Item>
                <Menu.Item key = { 6 }>Vendedor</Menu.Item>
                <Menu.Item key = { 7 }>Invitado</Menu.Item>
            </Menu>

        return (
            <Layout className = 'layout'>
                <Content className = 'content'>
                    <p className = 'register-title'>Regístrate</p>
                    <Input
                        placeholder = 'Nombre'
                        className = 'register-input-name'
                        name = 'name'
                        value = { this.state.name }
                        onChange = { (e) => this.handleChange(e.target.name, e.target.value) }
                    />
                    <Input
                        placeholder = 'Email'
                        className = 'register-input-email'
                        name = 'email'
                        value = { this.state.email }
                        onChange = { (e) => this.handleChange(e.target.name, e.target.value) }
                    />
                    <Input
                        type = 'number'
                        placeholder = 'Teléfono'
                        className = 'register-input-phone'
                        name = 'phone'
                        value = { this.state.phone }
                        onChange = { (e) => this.handleChange(e.target.name, e.target.value) }
                    />
                    <Input
                        type = 'number'
                        placeholder = 'Edad'
                        className = 'register-input-age'
                        name = 'age'
                        value = { this.state.age }
                        onChange = { (e) => this.handleChange(e.target.name, e.target.value) }
                    />
                    <Dropdown trigger = { ['click'] } overlay = { genderMenu }>
                        <Button>
                            <span>{this.state.gender ? this.state.gender : 'Género' }</span>
                            <Icon type = 'down' />
                        </Button>
                    </Dropdown>
                    <Dropdown trigger = { ['click'] } overlay = { roleMenu }>
                        <Button>
                            <span>{this.state.role ? this.state.role : 'Rol'}</span>
                            <Icon type = 'down' />
                        </Button>
                    </Dropdown>
                    <Button
                        className = 'register-btn'
                        size = 'large'
                        onClick = { this.handleRegister }
                        loading = { this.state.buttonLoading }
                    >
                        Registrarse
                    </Button>
                </Content>
            </Layout>
        )
    }
}

export default withAuth(Register)