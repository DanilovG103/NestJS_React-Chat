import { useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { login, registration } from '../http/userAPI'

const Auth = () => {
    const location = useLocation()
    const history = useHistory()
    const isLogin:boolean = location.pathname === '/login'
    const [username, setUsername] = useState<string>('')
    const [pswd, setPswd] = useState<string>('')

    const enter = async () => {
        let data;
        try {
            if (isLogin) {
                data = await login(username,pswd) 
            } else {
                data = await registration(username, pswd)
            }
            history.push('chat') 
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            {(isLogin) ? (
            <div className="auth">
                <h1>Войти в аккаунт</h1>
                <input type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Введите логин"/>
                <input type="password"
                value={pswd}
                onChange={e => setPswd(e.target.value)}
                placeholder="Введите пароль"/>
                <button onClick={enter}>Войти</button>
                <NavLink className="change-action" to='registration'>Нет аккаунта? Зарегиструйтесь!</NavLink>
            </div>
            ) : (
            <div className="auth">
                <h1>Регистрация</h1>
                <input type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Введите логин"/>
                <input type="password"
                value={pswd}
                onChange={e => setPswd(e.target.value)}
                placeholder="Введите пароль"/>
                <button onClick={enter}>Зарегистрироваться</button>
                <NavLink className="change-action" to='login'>Уже есть аккаунт? Войдите!</NavLink>
            </div>
            )} 
        </div>
    )
}

export default Auth


