import { useState } from "react"

const Chat = () => {
    const [message,setMessage] = useState<string>('')

    const send = () => {
        setMessage('')
    }

    return (
        <form className="chat">
            <div className="messages">
            </div>
            <input type="text" 
            value={message}
            onChange={e => setMessage(e.target.value)} 
            placeholder="Enter your message..."/>
            <button onClick={send}>Отправить</button>
        </form>
    )
}

export default Chat