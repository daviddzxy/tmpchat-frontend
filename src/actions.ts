import {
    SetRoomSessionHandleInputAction,
    SetRoomHandleInputAction,
    AddMessageAction,
    SetChatInputAction,
    SetChatRoomAction,
    SetRoomSessionIdAction,
    AddRoomSessionAction,
    RemoveRoomSessionAction,
    SetRoomSessionsAction,
    RemoveChatRoomAction,
    JoinChatRoomAction,
    LeaveChatRoomAction,
    SendTextMessage, RoomSession
} from "./types";

export const setRoomSessionHandleInput = (roomSessionHandle: string): SetRoomSessionHandleInputAction => {
    return {
        type: "SET_ROOM_SESSION_HANDLE_INPUT",
        data: {
            roomSessionHandle: roomSessionHandle
        }
    };
};

export const setRoomHandleInput = (roomHandle: string): SetRoomHandleInputAction => {
    return {
        type: "SET_ROOM_HANDLE_INPUT",
        data: {
            roomHandle: roomHandle
        }
    };
};

export const addMessage = (content: string, roomHandle: string, roomSessionId: number): AddMessageAction => {
    return {
        type: "ADD_MESSAGE",
        data: {
            content: content,
            roomHandle: roomHandle,
            roomSessionId: roomSessionId
        }
    }
}

export const setChatInput = (content: string): SetChatInputAction => {
    return {
        type: "SET_CHAT_INPUT",
        data: {
            content: content
        }
    };
};

export const setChatRoom = (roomHandle: string): SetChatRoomAction => {
    return {
        type: "SET_CHAT_ROOM",
        data: {
            roomHandle: roomHandle,
        }
    }
}

export const setRoomSessionId = (roomHandle: string, roomSessionId: number): SetRoomSessionIdAction => {
    return {
        type: "SET_ROOM_SESSION_ID",
        data: {
            roomHandle: roomHandle,
            roomSessionId: roomSessionId
        }
    }
}

export const addRoomSession = (roomHandle: string, roomSession: RoomSession): AddRoomSessionAction => {
    return {
        type: "ADD_ROOM_SESSION",
        data: {
            roomHandle: roomHandle,
            roomSession: roomSession
        }
    }
}

export const removeRoomSession = (roomHandle: string, roomSessionId: number): RemoveRoomSessionAction => {
    return {
        type: "REMOVE_ROOM_SESSION",
        data: {
            roomHandle: roomHandle,
            roomSessionId: roomSessionId
        }
    }
}

export const setRoomSessions = (roomHandle: string, roomSessions: { [roomSessions: number]: RoomSession }): SetRoomSessionsAction => {
    return {
        type: "SET_ROOM_SESSIONS",
        data: {
            roomHandle: roomHandle,
            roomSessions: roomSessions
        }
    }
}

export const removeChatRoom = (roomHandle: string): RemoveChatRoomAction => {
    return {
        type: "REMOVE_CHAT_ROOM",
        data: {
            roomHandle: roomHandle
        }
    }
}

export const joinChatRoom = (roomHandle: string, roomSessionHandle: string): JoinChatRoomAction => {
    return {
        type: "JOIN",
        data: {
            roomHandle: roomHandle,
            roomSessionHandle: roomSessionHandle
        }
    }
}

export const leaveChatRoom = (roomHandle: string): LeaveChatRoomAction => {
    return {
        type: "PART",
        data: {
            roomHandle: roomHandle
        }
    }
}

export const sendTextMessage = (content: string, roomHandle: string): SendTextMessage => {
    return {
        type: "TEXT",
        data: {
            content: content,
            roomHandle: roomHandle
        }
    }
}