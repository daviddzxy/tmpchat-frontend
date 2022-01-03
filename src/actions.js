export const setUserName = name => {
    return {
        type: "SET_USER_NAME",
        data: name
    }
}

export const setChatRoomName = name => {
    return {
        type: "SET_CHAT_ROOM_NAME",
        data: name
    }
}

export const createChatRoom = name => {
    return {
        type: "CREATE_ROOM",
        data: {
            "chatRoomName": name,
        }
    }
}