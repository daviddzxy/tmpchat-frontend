import { useSelector, useDispatch } from 'react-redux';
import { setRoomSessionHandleInput, setRoomHandleInput, setChatRoom } from "./actions";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const roomSessionHandle = useSelector(state => state.roomSessionHandle);
    const roomHandleInput = useSelector(state => state.roomHandleInput);

    const updateRoomSessionInput = event => {
        dispatch(setRoomSessionHandleInput(event.target.value));
    };

    const updateChatRoomNameInput = event => {
        dispatch(setRoomHandleInput(event.target.value));
    };

    const joinChatRoomHandler = event => {
        event.preventDefault();
        dispatch(setChatRoom(roomHandleInput))
        navigate(`/chat/${roomHandleInput}`);
    };

    return (
        <div>
            <div>
                <label htmlFor={"clientName"}>Name</label>
                <input type={"text"} id={"roomSessionHandle"} value={roomSessionHandle} onChange={updateRoomSessionInput}/>
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
