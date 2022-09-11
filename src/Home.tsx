import { useSelector, useDispatch } from 'react-redux';
import { setRoomSessionHandleInput, setRoomHandleInput, setChatRoom } from "./actions";
import { useNavigate } from "react-router-dom";
import { State } from "./types";
import React from "react";


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const roomSessionHandle = useSelector((state: State) => state.roomSessionHandleInput);
    const roomHandleInput = useSelector((state: State) => state.roomHandleInput);

    const updateRoomSessionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setRoomSessionHandleInput(event.target.value));
    };

    const updateChatRoomNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setRoomHandleInput(event.target.value));
    };

    const joinChatRoomHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(setChatRoom(roomHandleInput))
        navigate(`/chat/${roomHandleInput}`);
    };

    return (
        <div>
            <div>
                <label htmlFor={"clientName"}>Name</label>
                <input type={"text"} id={"roomSessionHandle"} value={roomSessionHandle}
                       onChange={updateRoomSessionInput}/>
            </div>
            <div>
                <label htmlFor={"roomName"}>Chatroom</label>
                <input type={"text"} id={"roomHandleInput"} value={roomHandleInput} onChange={updateChatRoomNameInput}/>
            </div>
            <div>
                <button onClick={joinChatRoomHandler}>Join room</button>
            </div>
        </div>
    );
};

export default Home;
