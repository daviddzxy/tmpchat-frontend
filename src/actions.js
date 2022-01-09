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

export const createRoom = (roomName, isConnected= false, userNames = [], messages=[]) => {
    return {
        type: "CREATE_ROOM",
        data: {
            roomName: roomName,
            isConnected: isConnected,
            userNames: userNames,
            messages: messages
        }
    }
}

export const setConnectedStatus = (roomName, isConnected) => {
    return {
        type: "SET_CONNECTED_STATUS",
        data: {
            roomName: roomName,
            isConnected: isConnected
        }
    }
}

export const addUserNames = (roomName, userNames=[]) => {
    return {
        type: "ADD_CLIENTS",
        data: {
            roomName: roomName,
            userNames: userNames
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