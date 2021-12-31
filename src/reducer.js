const defaultState = {
    userName: "",
    chatRoomName: ""
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER_NAME":
            return {...state, "userName": action.data}
        case "SET_CHAT_ROOM_NAME":
            return {...state, "chatRoomName": action.data}
        default:
            return state
    }
}

export const setUserName = name => {
    return {
        type: 'SET_USER_NAME',
        data: name
    }
}

export const setChatRoomName = name => {
    return {
        type: 'SET_CHAT_ROOM_NAME',
        data: name
    }
}

export default reducer