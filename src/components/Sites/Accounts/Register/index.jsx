import React, { Component } from 'react'
import { Layout, Input, Button, Dropdown, Icon, Menu } from 'antd'
import './index.scss'
const { Content } = Layout

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            age: '',
            address: '',
            gender: null,
            role: null
        }
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render () {

        const genderMenu = 
            <Menu onClick = { (e) => this.handleChange('gender', e.item.props.children) }>
                <Menu.Item key = { 1 }>Masculino</Menu.Item>
                <Menu.Item key = { 2 }>Femenino</Menu.Item>
                <Menu.Item key = { 3 }>Prefiero no decir</Menu.Item>
            </Menu>
        
        const roleMenu =
            <Menu onClick = { (e) => this.handleChange('role', e.item.props.children) }>
                <Menu.Item key = { 4 }>Administrador</Menu.Item>
                <Menu.Item key = { 5 }>Miembro Organizador</Menu.Item>
                <Menu.Item key = { 6 }>Vendedor</Menu.Item>
                <Menu.Item key = { 7 }>Invitado</Menu.Item>
            </Menu>

        return (
            <Layout className = 'layout'>
                <Content className = 'content'>
                    <p className = 'register-title'>Registrate</p>
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
                    <Input
                        placeholder = 'Dirección'
                        className = 'register-input-address'
                        name = 'address'
                        value = { this.state.address }
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
                        onClick = { this.handleLogin }
                    >
                        Registrarse
                    </Button>

                    <p>
                        ¿Ya tienes una cuenta? Haz click <a href = '/login'>aquí</a> para iniciar sesión
                    </p>
                </Content>
            </Layout>
        )
    }
}