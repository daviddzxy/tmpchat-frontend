export const setRoomSessionHandleInput = roomSessionHandle => {
    return {
        type: "SET_ROOM_SESSION_HANDLE_INPUT",
        data: {
            roomSessionHandle: roomSessionHandle
        }
    };
};

export const setRoomHandleInput = roomHandle => {
    return {
        type: "SET_ROOM_HANDLE_INPUT",
        data: {
            roomHandle: roomHandle
        }
    };
};

export const addMessage = (content, roomHandle, roomSessionId) => {
    return {
        type: "ADD_MESSAGE",
        data: {
            content: content,
            roomHandle: roomHandle,
            roomSessionId: roomSessionId
        }
    }
}

export const setChatInput = content => {
    return {
        type: "SET_CHAT_INPUT",
        data: {
            content: content
        }
    };
};

export const setChatRoom = roomHandle => {
    return {
        type: "SET_CHAT_ROOM",
        data: {
            roomHandle: roomHandle,
        }
    }
}

export const setRoomSessionId = (roomHandle, roomSessionId) => {
    return {
        type: "SET_ROOM_SESSION_ID",
        data: {
            roomHandle: roomHandle,
            roomSessionId: roomSessionId
        }
    }
}

export const addRoomSession = (roomHandle, roomSession) => {
    return {
        type: "ADD_ROOM_SESSION",
        data: {
            roomHandle: roomHandle,
            roomSession: roomSession
        }
    }
}

export const removeRoomSession = (roomHandle, roomSessionId) => {
    return {
        type: "REMOVE_ROOM_SESSION",
        data: {
            roomHandle: roomHandle,
            roomSessionId: roomSessionId
        }
    }
}

export const setRoomSessions = (roomHandle, roomSessions) => {
    return {
        type: "SET_ROOM_SESSIONS",
        data: {
            roomHandle: roomHandle,
            roomSessions: roomSessions
        }
    }
}

export const removeChatRoom = roomHandle => {
    return {
        type: "REMOVE_CHAT_ROOM",
        data: {
            roomHandle: roomHandle
        }
    }
}

export const joinChatRoom = (roomHandle, roomSessionHandle) => {
    return {
        type: "JOIN",
        data: {
            roomHandle: roomHandle,
            roomSessionHandle: roomSessionHandle
        }

    }
}

export const leaveChatRoom = roomHandle => {
    return {
        type: "PART",
        data: {
            roomHandle: roomHandle
        }
    }
}

export const sendTextMessage = (content, roomHandle) => {
    return {
        type: "TEXT",
        data: {
            content: content,
            roomHandle: roomHandle
        }
    }
}