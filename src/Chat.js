import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinChatRoom, leaveChatRoom, sendTextMessage, setChatInput, setMessages } from './actions';
import Message from "./Message";


const ChatRoom = () => {
    const dispatch = useDispatch();
    const clientName = useSelector(state => state.clientNameInput);
    const roomName = useSelector(state => state.roomNameInput);
    const chatInput = useSelector(state => state.chatInput);
    const messages = useSelector(state => state.chatRoom.messages);
    const clients = useSelector(state => state.chatRoom.clients);

    const updateChatInput = event => {
        dispatch(setChatInput(event.target.value));
    };

    const sendMessage = event => {
        event.preventDefault();
        dispatch(sendTextMessage(chatInput));
    };

    useEffect(() => {
        dispatch(joinChatRoom(roomName, clientName));
        return () => {
            dispatch(leaveChatRoom());
            dispatch(setMessages([]));
        };
    }, [dispatch, roomName, clientName]);

    return (
        <div>
            <h2>Chatroom {roomName}</h2>
            <div>
                Messages: {
                messages.map(message => <Message
                        author={clients.find(client => client.id === message.clientId).name}
                        text={message.text}
                        key={message.textId}
                    />
                )
            }
            </div>
            <div>Users: {clients.map(client => <div key={client.id}>{client.name}</div>)}</div>
            <div>
                <input type={"text"} id={"chatInput"} onChange={updateChatInput} value={chatInput}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatRoom;