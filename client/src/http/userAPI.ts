import jwtDecode from "jwt-decode"
import {$host} from "./index"

export const registration = async (login:string, password:string) => {
    const {data} = await $host.post('/auth/registration', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login:string, password:string) => {
    const {data} = await $host.post('/auth/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}