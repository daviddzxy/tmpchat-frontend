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

export const createRoom = (roomName, userNames, messages=[]) => {
    return {
        type: "CREATE_ROOM",
        data: {
            roomName: roomName,
            userNames: userNames,
            messages: messages
        }
    }
}

export const joinChatRoom = (roomName, userName) => {
    return {
        type: "JOIN_ROOM",
        data: {
            roomName: roomName,
            userName: userName
        }
    }
}