import axios from 'axios'
import { toast } from 'react-toastify'
import {
    loginEndpoint,
    forgotPasswordEndpoint,
    resetPasswordEndpoint
} from '../utils/backendEndpoints'

class Authentication {
    constructor() {
        this.token = localStorage.getItem('token')
        this.username = localStorage.getItem('username')
        this.email = localStorage.getItem('email')
        this.firstName = localStorage.getItem('first_name')
        this.lastName = localStorage.getItem('last_name')
        this.API_URL = process.env.REACT_APP_API_URL
    }

    isAuthenticated = () => {
        if(this.token) return true
        return false
    }

    getFullname = () => {
        const name = this.firstName ? this.firstName : 'Nombre'
        const lastName = this.lastName ? this.lastName : 'Apellidos'
        return `${name} ${lastName}`
    }

    getHeaderAuthToken = () => {
        return {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }
    }

    handleLogin = async (data) => {
        try {
            let response = await axios.get(loginEndpoint, data)
            if (response.data) {
                const { token, user } = response.data
                const { username, email, first_name, last_name, id } = user
                localStorage.setItem('token', token)
                localStorage.setItem('username', username)
                localStorage.setItem('email', email)
                localStorage.setItem('firstName', first_name)
                localStorage.setItem('lastName', last_name)
                localStorage.setItem('userId', id)
                toast.success('Has iniciado sesión con éxito')
                return true
            }
            else {
                toast.error('Algo falló al iniciar sesión')
                return false
            }
        } catch (error) {
            console.log(error)
            toast.error('Algo falló al iniciar sesión')
            return false
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