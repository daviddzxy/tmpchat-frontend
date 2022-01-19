export const setClientNameInput = name => {
    return {
        type: "SET_CLIENT_NAME_INPUT",
        data: name
    }
}

export const setChatRoomNameInput = name => {
    return {
        type: "SET_CHAT_ROOM_NAME_INPUT",
        data: name
    }
}

export const setConnectedStatus = (isConnected) => {
    return {
        type: "SET_CONNECTED_STATUS",
        data: {
            isConnected: isConnected
        }
    }
}

export const setRoomName = (roomName) => {
    return {
        type: "SET_ROOM_NAME",
        data: {
            roomName: roomName
        }
    }
}

export const addClientNames = (roomName, clientNames=[]) => {
    return {
        type: "ADD_CLIENTS",
        data: {
            clientNames: clientNames
        }
    }
}

export const joinChatRoom = (roomName, clientName) => {
    return {
        type: "JOIN_ROOM",
        data: {
            roomName: roomName,
            clientName: clientName
        }
    }
}

export const leaveChatRoom = (roomName) => {
    return {
        type: "LEAVE_ROOM",
        data: {
            roomName: roomName
        }
    }
}