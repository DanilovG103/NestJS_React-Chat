import {useState} from 'react'

const Auth = () => {
    const [login,isLogin] = useState<boolean>(false)

    return (
        <div>
            {(login) ? (
            <form className="auth">
                <h1>Войти в аккаунт</h1>
                <input type="text"
                placeholder="Введите логин"/>
                <input type="password"
                placeholder="Введите пароль"/>
                <button>Войти</button>
            </form>
            ) : (
            <form className="auth">
                <h1>Регистрация</h1>
                <input type="text"
                placeholder="Введите логин"/>
                <input type="password"
                placeholder="Введите пароль"/>
                <input type="text"
                placeholder="Введите ваш ник"/>
                <button>Зарегистрироваться</button>
            </form>
            )} 
            <button onClick={() => isLogin(!login)}>change</button>
        </div>
    )
}

export default Auth
