import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react"
import { WS } from "../http/socket";

const Chat = () => {
    const [btnDisabled,setBtnDisabled] = useState<boolean>(true)
    const [message,setMessage] = useState<string>('');

    useEffect(() => {
        (message.length) > 0 ? setBtnDisabled(false) : setBtnDisabled(true)
    },[message])

    const sendMessage = () => {
        console.log(WS);
        setMessage('')
    }

    const loginInfo: any = jwtDecode(`${localStorage.getItem('token')}`)

    return (
        <>
        <div className="user-info">
            <p className="auth-info">Авторизованный пользователь:</p>
            <p className="login-name">{loginInfo.login}</p>
        </div>
        <div className="chat">
            <div className="messages">
            </div>
            <div className="elems">
                <input type="text" 
                value={message}
                onChange={e => setMessage(e.target.value)} 
                placeholder="Введите сообщение"/>
                <button onClick={sendMessage} disabled={btnDisabled}>Отправить</button>
            </div>
        </div>
        </>
    )
}

export default Chat