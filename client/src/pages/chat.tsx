import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const Chat = () => {
    const socket = io('http://localhost:7564');
    const [btnDisabled,setBtnDisabled] = useState<boolean>(true)
    const [name,setName] = useState<string>('');
    const [message,setMessage] = useState<string>('');

    useEffect(() => {
        (name.length > 0 && message.length) > 0 ? setBtnDisabled(false) : setBtnDisabled(true)
    },[name, message])

    const sendMessage = () => {
        
        
        socket.emit('msgToServer', message);
        setMessage('')
    }

    return (
        <>
        <div className="user-info">
            <p className="auth-info">Авторизованный пользователь:</p>
            <p className="login-name">!здесь будет логин!</p>
        </div>
        <div className="chat">
            <input
            className="nickname"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Введите никнейм"
            />
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