import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {sendTextMessage, setChatInput} from './actions'

const ChatRoom = () => {
    const dispatch = useDispatch()
    const chatInput = useSelector(state => state.chatInput)
    const messages = useSelector(state => state.chatRoom.messages)
    const updateChatInput = event => {
        dispatch(setChatInput(event.target.value))
    }

    const sendMessage = event => {
        event.preventDefault()
        dispatch(sendTextMessage(chatInput))
    }

    return (
        <div>
            <h2>Chat</h2>
            <div>Messages: {messages.map(e => <div key={e.id}>{e.text}</div>)}</div>
            <div>
                <input type={"text"} id={"chatInput"} onChange={updateChatInput} value={chatInput}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatRoom;