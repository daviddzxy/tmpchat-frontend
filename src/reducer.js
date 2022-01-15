// TODO: move default state elsewhere, inject default state inside index.js createStore
const defaultState = {
    userNameInput: "",
    chatRoomNameInput: "",
    chatRooms: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER_NAME":
            return {...state, userNameInput: action.data}
        case "SET_CHAT_ROOM_NAME":
            return {...state, chatRoomNameInput: action.data}
        case "CREATE_ROOM":
            return {
                ...state,
                chatRooms: {
                    ...state.chatRooms,
                    [action.data.roomName]: {
                        isConnected: action.data.isConnected,
                        userNames: action.data.userNames,
                        messages: action.data.messages
                    }
                }
            }
        case "SET_CONNECTED_STATUS":
            return {
                ...state,
                chatRooms: {
                    ...state.chatRooms,
                    [action.data.roomName]: {
                        ...state.chatRooms[action.data.roomName],
                        isConnected: action.data.isConnected
                    }
                }
            }
        case "ADD_CLIENTS":
            return {
                ...state,
                chatRooms: {
                    ...state.chatRooms,
                    [action.data.roomName]: {
                        ...state.chatRooms[action.data.roomName],
                        userNames: [...state.chatRooms[action.data.roomName].userNames, ...action.data.userNames]
                    }
                }
            }

        default:
            return state
    }
}

export default reducer