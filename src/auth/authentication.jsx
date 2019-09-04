import axios from 'axios'
import { toast } from 'react-toastify'
import {
    loginEndpoint,
    forgotPasswordEndpoint,
    resetPasswordEndpoint,
    registerEndpoint
} from '../utils/backendEndpoints'

class Authentication {
    constructor() {
        this.token = localStorage.getItem('token')
        this.name = localStorage.getItem('name')
        this.email = localStorage.getItem('email')
        this.gender = localStorage.getItem('gender')
        this.phone = localStorage.getItem('phone')
        this.role = localStorage.getItem('role')
        this._id = localStorage.getItem('_id')
        this.API_URL = process.env.REACT_APP_API_URL
    }

    isAuthenticated = () => {
        if (this.token) return true
        else {
            toast.error('Debes iniciar sesiòn primero')
            return false
        }
    }

    getHeaderAuthToken = () => {
        return {
            headers: {
                Authorization: this.token
            }
        }
    }

    handleLogin = async (data) => {
        try {
            let response = await axios.post(loginEndpoint, data)
            if (response.data) {
                const { token, user } = response.data
                const { email, gender, name, phone, role, _id } = user
                localStorage.setItem('token', token)
                localStorage.setItem('name', name)
                localStorage.setItem('email', email)
                localStorage.setItem('gender', gender)
                localStorage.setItem('phone', phone)
                localStorage.setItem('role', role)
                localStorage.setItem('_id', _id)
                toast.success('Has iniciado sesión con éxito')
                return user
            }
            else {
                toast.error('Algo falló al iniciar sesión')
                return {
                    hasError: true,
                    error: response.data.message
                }
            }
        } catch (error) {
            toast.error(error.response.data.message)
            return {
                hasError: true,
                error: error.response.data.message
            }
        }
    }

    handleRegister = async (data) => {
        try {
            let response = await axios.post(registerEndpoint, data, this.getHeaderAuthToken())
            if (response.data && response.data.message === 'ok') {
                toast.success('Asistente registrado con éxito!')
                return response.data
            } else {
                toast.error('Algo falló al crear usuario :(')
            }
        } catch (error) {
            toast.error(error.response.data.message)
            return {
                hasError: true,
                error: error.response.data.message
            }
        }
    }

    handleForgotPassword = async (data) => {
        try {
            const response = await axios.post(forgotPasswordEndpoint, data)
            if (response.data) {
                toast.success('Se ha enviado un correo electrónico con las instrucciones')
                console.log(data)
            }
        } catch (error) {
            console.log(error)
            toast.error('Ups, ha ocurrido un error')
        }
    }

    handleResetPassword = async (data) =>{
        try {
            const response = await axios.post(resetPasswordEndpoint, data)
            if(response.data){
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default Authentication