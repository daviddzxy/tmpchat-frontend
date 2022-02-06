// TODO: move default state elsewhere, inject default state inside index.js createStore
const defaultState = {
    clientNameInput: "",
    chatRoomNameInput: "",
    chatInput: "",
    chatRoom: {
        roomName: "",
        isConnected: false,
        clientNames: [],
        messages: []
    }
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CLIENT_NAME_INPUT":
            return {...state, clientNameInput: action.data}
        case "SET_CHAT_ROOM_NAME_INPUT":
            return {...state, chatRoomNameInput: action.data}
        case "SET_CHAT_INPUT":
            return {...state, chatInput: action.data}
        case "ADD_MESSAGE":
            return {...state, chatRoom: {...state.chatRoom, messages: [...state.chatRoom.messages, action.data]}}
        case "SET_CONNECTED_STATUS":
            return {
                ...state,
                chatRoom: {
                    ...state.chatRoom,
                    isConnected: action.data.isConnected
                }
            }
        case "SET_ROOM_NAME":
            return {
                ...state,
                chatRoom: {
                    ...state.chatRoom,
                    roomName: action.data.roomName
                }
            }
        case "SET_CLIENTS":
            return {
                ...state,
                chatRoom: {
                    ...state.chatRoom,
                    clientNames: [...action.data.clientNames]
                    }
                }
        default:
            return state
    }
}

export default reducer