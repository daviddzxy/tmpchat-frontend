import {useSelector, useDispatch} from 'react-redux'
import {setUserName, setChatRoomName, joinChatRoom} from "./actions"

const Home = () => {
    const dispatch = useDispatch()
    const userName = useSelector(state => state.userName)
    const chatRoomName = useSelector(state => state.chatRoomName)

    const updateUserNameInput = event => {
        dispatch(setUserName(event.target.value))
    }

    const updateChatRoomNameInput = event => {
        dispatch(setChatRoomName(event.target.value))
    }

    const joinChatRoomHandler = event => {
        event.preventDefault()
        dispatch(joinChatRoom(chatRoomName, userName))
    }

    return (
        <div>
            <div>
                <label htmlFor={"userName"}>Name</label>
                <input type={"text"} id={"userName"} value={userName} onChange={updateUserNameInput}/>
            </div>
            <div>
                <label htmlFor={"chatRoomName"}>Chatroom</label>
                <input type={"text"} id={"chatRoomName"} value={chatRoomName} onChange={updateChatRoomNameInput}/>
            </div>
            <div>
                <button onClick={joinChatRoomHandler}>Join room</button>
            </div>
        </div>
    )
}

export default Home;
