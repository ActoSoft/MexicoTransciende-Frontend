import React, { Component } from 'react'
import { Input, Button } from 'antd';
import './index.scss'

const { TextArea } = Input;

export default class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: '',
            body: ''
        }
    }

    changeValue = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    saveContact = (event) => {
        console.log(event)
        console.log('botonsito')
    }

    render() {
        return (
            <div className = 'contact-form-container'>
                <div className = 'contact-form-instructions'>
                    <p className = 'contact-form-title'>
                        ¿Tienes alguna duda o comentario?
                    </p>
                    <p className = 'contact-form-text'>
                        Completa el siguiente formulario.
                    </p>
                </div>
                <div className = 'contact-form-form'>
                    <Input
                        name = 'name'
                        placeholder = 'Nombre Completo *'
                        required = { true }
                        onChange = { this.changeValue }
                    />

                    <Input
                        name = 'email'
                        placeholder = 'Correo Electrónico *'
                        required = { true }
                        onChange = { this.changeValue }
                    />

                    <Input
                        name = 'phone'
                        type = 'number'
                        placeholder = 'Teléfono de contacto'
                        required = { false }
                        onChange = { this.changeValue }
                    />

                    <TextArea
                        name = 'name'
                        placeholder = 'Comentario'
                        required = { true }
                        onChange = { this.changeValue }
                    />

                    <Button
                        name = 'btn-save'
                        onClick = { this.saveContact }
                    >
                        Enviar
                    </Button>
                </div>
            </div>
        )
    }
}