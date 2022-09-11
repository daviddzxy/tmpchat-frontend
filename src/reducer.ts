import { Action, State } from "./types"

const initialState = {
    roomSessionHandleInput: "",
    roomHandleInput: "",
    textMessageInput: "",
    chatRooms: {}
};

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case "SET_ROOM_SESSION_HANDLE_INPUT":
            return {...state, roomSessionHandleInput: action.data.roomSessionHandle};
        case "SET_ROOM_HANDLE_INPUT":
            return {...state, roomHandleInput: action.data.roomHandle};
        case "SET_CHAT_INPUT":
            return {...state, textMessageInput: action.data.content};
        case "SET_CHAT_ROOM":
            return {
                ...state, chatRooms: {
                    ...state.chatRooms, [action.data.roomHandle]: {
                        roomHandle: action.data.roomHandle,
                        roomSessionId: null,
                        roomSessions: {},
                        messages: []
                    }
                }
            };
        case "SET_ROOM_SESSION_ID":
            return {
                ...state, chatRooms: {
                    ...state.chatRooms, [action.data.roomHandle]: {
                        ...state.chatRooms[action.data.roomHandle], roomSessionId: action.data.roomSessionId
                    }
                }
            };
        case "SET_ROOM_SESSIONS":
            return {
                ...state, chatRooms: {
                    ...state.chatRooms, [action.data.roomHandle]: {
                        ...state.chatRooms[action.data.roomHandle], roomSessions: action.data.roomSessions
                    }
                }
            };
        case "ADD_ROOM_SESSION":
            return {
                ...state, chatRooms: {
                    ...state.chatRooms, [action.data.roomHandle]: {
                        ...state.chatRooms[action.data.roomHandle], roomSessions: {
                            ...state.chatRooms[action.data.roomHandle].roomSessions,
                            [action.data.roomSession.id]: action.data.roomSession
                        }
                    }
                }
            };
        case "REMOVE_ROOM_SESSION":
            const {
                [action.data.roomSessionId]: removedRoomSession, ...roomSessions
            } = state.chatRooms[action.data.roomHandle].roomSessions;
            return {
                ...state, chatRooms: {
                    ...state.chatRooms,
                    [action.data.roomHandle]: {
                        ...state.chatRooms[action.data.roomHandle], roomSessions: roomSessions
                    }
                }
            };

        case "ADD_MESSAGE":
            const roomSessionHandle = Object.values(state.chatRooms[action.data.roomHandle].roomSessions)?.find(
                rs => rs.id === action.data.roomSessionId
            )?.handle
            return roomSessionHandle ? {
                ...state, chatRooms: {
                    ...state.chatRooms, [action.data.roomHandle]: {
                        ...state.chatRooms[action.data.roomHandle],
                        messages: [...state.chatRooms[action.data.roomHandle].messages, {
                            handle: roomSessionHandle,
                            content: action.data.content,
                            roomSessionId: action.data.roomSessionId
                        }]
                    }
                }
            } : {...state};
        case "REMOVE_CHAT_ROOM":
            const {[action.data.roomHandle]: removedChatRoom, ...chatRooms} = state.chatRooms;
            return {...state, chatRooms: chatRooms};
        default:
            return {...state};
    }
};

export default reducer;