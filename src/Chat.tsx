import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChatInput, joinChatRoom, leaveChatRoom, sendTextMessage } from './actions';
import Message from "./Message"
import { State } from "./types";

const ChatRoom = () => {
    const dispatch = useDispatch();
    const roomSessionHandleInput = useSelector((state: State) => state.roomSessionHandleInput);
    const roomHandleInput = useSelector((state: State) => state.roomHandleInput);
    const textMessageInput = useSelector((state: State) => state.textMessageInput);

    const getChatRoom = (roomHandle: string) => (state: State) => {
        return state.chatRooms[roomHandle]
    }
    const chatRoom = useSelector(getChatRoom(roomHandleInput));

    const updateChatInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setChatInput(event.target.value));
    };

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
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
                        author={m.handle}
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