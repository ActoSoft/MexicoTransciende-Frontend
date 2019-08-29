import React, { Component } from 'react'
import './index.scss'

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
                        value = 'Enviar'
                    />
                </div>
            </div>
        )
    }
}

const Input = ({
    name,
    placeholder,
    onChange,
    required }) =>
    <input
        className = 'contact-form-text'
        type = 'text'
        name = { name }
        placeholder = { placeholder }
        onChange = { (e) => onChange(e) }
        required = { required ? 'required' : null }
    />

const TextArea = ({
    name,
    placeholder,
    onChange,
    required }) =>
    <textarea
        className = 'contact-form-textarea'
        name = { name }
        placeholder = { placeholder }
        onChange = { (e) => onChange(e) }
        required = { required ? 'required' : null }
    />

const Button = ({
    value,
    onClick,
    name }) =>
    <button
        className = 'contact-form-btn'
        onClick = { (e) => onClick(e) }
        name = { name }
    >
        { value }
    </button>