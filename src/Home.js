import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import {setUserName, setChatRoomName, createChatRoom} from "./actions"

const PageGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  width: 95%;
  height: 95vh;
  margin-inline: auto;
`

const LeftCenterDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const RightCenterDiv = styled.div`
  grid-column: 2 / 2;
  grid-row: 2/ 3;
`

const InputGrid = styled(RightCenterDiv)`
  display: grid;
  grid-template-rows: 2fr 2fr 1fr 1fr;
`
const Label = styled.label`
  display: block;
`

const Input = styled.input`
  display: block;
`

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

    const createChatRoomHandler = event => {
        event.preventDefault()
        dispatch(createChatRoom(chatRoomName))
    }

    return (
        <PageGrid>
            <LeftCenterDiv>
                <h1>Temporary chat</h1>
            </LeftCenterDiv>
            <InputGrid>
                <div>
                    <Label htmlFor={"userName"}>Name</Label>
                    <Input type={"text"} id={"userName"} value={userName} onChange={updateUserNameInput}/>
                </div>
                <div>
                    <Label htmlFor={"chatRoomName"}>Chatroom</Label>
                    <Input type={"text"} id={"chatRoomName"} value={chatRoomName} onChange={updateChatRoomNameInput}/>
                </div>
                <div>
                    <button onClick={createChatRoomHandler}>Create room</button>
                </div>
                <div>
                    <button>Join room</button>
                </div>
            </InputGrid>
        </PageGrid>

    )
}

export default Home;
