import { useSelector, useDispatch } from 'react-redux';
import { setClientNameInput, setChatRoomNameInput } from "./actions";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clientName = useSelector(state => state.clientNameInput);
    const roomName = useSelector(state => state.chatRoomNameInput);

    const updateClientNameInput = event => {
        dispatch(setClientNameInput(event.target.value));
    };

    const updateChatRoomNameInput = event => {
        dispatch(setChatRoomNameInput(event.target.value));
    };

    const joinChatRoomHandler = event => {
        event.preventDefault();
        navigate(`/chat`);
    };

    return (
        <div>
            <div>
                <label htmlFor={"clientName"}>Name</label>
                <input type={"text"} id={"clientName"} value={clientName} onChange={updateClientNameInput}/>
            </div>
            <div>
                <label htmlFor={"roomName"}>Chatroom</label>
                <input type={"text"} id={"roomName"} value={roomName} onChange={updateChatRoomNameInput}/>
            </div>
            <div>
                <button onClick={joinChatRoomHandler}>Join room</button>
            </div>
        </div>
    );
};

export default Home;
