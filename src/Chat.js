import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChatInput, joinChatRoom, leaveChatRoom, sendTextMessage } from './actions';
import Message from "./Message"

const ChatRoom = () => {
    const dispatch = useDispatch();
    const roomSessionHandleInput = useSelector(state => state.roomSessionHandleInput);
    const roomHandleInput = useSelector(state => state.roomHandleInput);
    const textMessageInput = useSelector(state => state.textMessageInput);

    const getChatRoom = roomHandle => store => {
        return store.chatRooms[roomHandle]
    }
    const chatRoom = useSelector(getChatRoom(roomHandleInput));

    const updateChatInput = event => {
        dispatch(setChatInput(event.target.value));
    };

    const sendMessage = event => {
        event.preventDefault();
        dispatch(sendTextMessage(textMessageInput, roomHandleInput));
    };

    useEffect(() => {
        dispatch(joinChatRoom(roomHandleInput, roomSessionHandleInput));
        return () => {
             dispatch(leaveChatRoom(roomHandleInput));
        };
    }, [dispatch, roomHandleInput, roomSessionHandleInput]);

    return (
        <div>
            <h2>Chatroom {roomHandleInput}</h2>
            <div>
                <h3>Messages</h3>
                {
                    chatRoom.messages.map(m => <Message
                            author={Object.values(chatRoom.roomSessions).find(rs => rs.id === m.roomSessionId).handle}
                            content={m.content}/>
                    )
                }
            </div>
            <div>
                <h3>Users</h3>
                {
                    Object.values(chatRoom.roomSessions).map(rs => <div>{rs.handle}</div>)
                }
            </div>
            <div>
                <input type={"text"} id={"chatInput"} onChange={updateChatInput} value={textMessageInput}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatRoom;