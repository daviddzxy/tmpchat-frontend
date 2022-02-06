export const setClientNameInput = name => {
    return {
        type: "SET_CLIENT_NAME_INPUT",
        data: name
    };
};

export const setChatRoomNameInput = name => {
    return {
        type: "SET_CHAT_ROOM_NAME_INPUT",
        data: name
    };
};

export const setChatInput = text => {
    return {
        type: "SET_CHAT_INPUT",
        data: text
    };
};

export const setConnectedStatus = (isConnected) => {
    return {
        type: "SET_CONNECTED_STATUS",
        data: {
            isConnected: isConnected
        }
    };
};

export const setRoomName = (roomName) => {
    return {
        type: "SET_ROOM_NAME",
        data: {
            roomName: roomName
        }
    };
};

export const addMessage = (text, clientName, id) => {
    return {
        type: "ADD_MESSAGE",
        data: {
            text: text,
            clientName: clientName,
            id: id
        }
    };
};

export const setClientNames = (clientNames = []) => {
    return {
        type: "SET_CLIENTS",
        data: {
            clientNames: clientNames
        }
    };
};

export const joinChatRoom = (roomName, clientName) => {
    return {
        type: "JOIN",
        data: {
            roomName: roomName,
            clientName: clientName
        }
    };
};

export const leaveChatRoom = () => {
    return {
        type: "PART"
    };
};

export const sendTextMessage = (text) => {
    return {
        type: "TEXT",
        data: {
            text: text
        }
    };
};