const defaultState = {
    userName: "",
    chatRoomName: "",
    chatRooms: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER_NAME":
            return {...state, userName: action.data}
        case "SET_CHAT_ROOM_NAME":
            return {...state, chatRoomName: action.data}
        case "CREATE_ROOM":
            return {
                ...state,
                chatRooms: {
                    ...state.chatRooms,
                    [action.data.roomName]: {
                        userNames: action.data.userNames, messages: action.data.messages
                    }
                }
            }
        default:
            return state
    }
}

export default reducer