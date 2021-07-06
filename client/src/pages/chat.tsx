import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react"
import { WS } from "../http/socket";
import { useHistory } from 'react-router-dom';

const Chat = () => {
    const [btnDisabled,setBtnDisabled] = useState<boolean>(true)
    const [message,setMessage] = useState<string>('');
    const [messages,setMessages] = useState([])
    const history = useHistory()

    useEffect(() => {
        (message.length > 0) ? setBtnDisabled(false) : setBtnDisabled(true)
        WS.on("init", (message: any) => {
            setMessages(message)
        })
    },[message, messages, setMessages])

    console.log(WS);
    

    const loginInfo: any = jwtDecode(`${localStorage.getItem('token')}`)
    
    const logOut = () => {
        localStorage.removeItem('token')
        history.push('login')
    }

    const sendMessage = async () => {
        WS.emit("message", {
            content: message,
            author: loginInfo.login
        })
        setMessage('')
    }

    return (
        <>
        <div className="user-info">
            <p className="auth-info">Авторизованный пользователь:</p>
            <p className="login-name">{loginInfo.login}</p>
        </div>
        <button className="log-out" onClick={logOut}>Выйти</button>
        <div className="chat">
            {(!messages.length) ? 
                (<div className="messages">Сообщений пока нет!</div>
                ):(
                <div className="messages">
                {messages.map((message: any) =>   
                    <div className={(message.author === loginInfo.login) ? "my-message-info" : "message-info"}>
                        <span className="author">{message.author}</span>
                        {message.content}
                    </div>
                )}
                </div>)
            }
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