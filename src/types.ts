import { Dispatch, MiddlewareAPI } from "redux";

export interface Message {
    handle: string,
    content: string,
    roomSessionId: number
}

export interface RoomSession {
    id: number;
    handle: string;
}

export interface ChatRoom {
    roomHandle: string;
    roomSessionId: number | null;
    roomSessions: { [roomSession: number]: RoomSession };
    messages: Array<Message>;
}

export interface State {
    roomSessionHandleInput: string;
    roomHandleInput: string;
    textMessageInput: string;
    chatRooms: { [chatRoom: string]: ChatRoom };
}

export interface ActionBase {
    type: string;
    data: object;
}

export interface SetRoomSessionHandleInputAction extends ActionBase {
    type: "SET_ROOM_SESSION_HANDLE_INPUT";
    data: {
        roomSessionHandle: string;
    }
}

export interface SetRoomHandleInputAction extends ActionBase {
    type: "SET_ROOM_HANDLE_INPUT",
    data: {
        roomHandle: string
    }
}

export interface AddMessageAction extends ActionBase {
    type: "ADD_MESSAGE",
    data: {
        content: string,
        roomHandle: string,
        roomSessionId: number
    }
}

export interface SetChatInputAction extends ActionBase {
    type: "SET_CHAT_INPUT",
    data: {
        content: string
    }
}

export interface SetChatRoomAction extends ActionBase {
    type: "SET_CHAT_ROOM",
    data: {
        roomHandle: string,
    }
}

export interface SetRoomSessionIdAction extends ActionBase {
    type: "SET_ROOM_SESSION_ID",
    data: {
        roomHandle: string,
        roomSessionId: number
    }
}

export interface AddRoomSessionAction extends ActionBase {
    type: "ADD_ROOM_SESSION",
    data: {
        roomHandle: string,
        roomSession: RoomSession
    }
}

export interface RemoveRoomSessionAction extends ActionBase {
    type: "REMOVE_ROOM_SESSION",
    data: {
        roomHandle: string,
        roomSessionId: number
    }
}

export interface SetRoomSessionsAction extends ActionBase {
    type: "SET_ROOM_SESSIONS",
    data: {
        roomHandle: string,
        roomSessions: { [roomSession: number]: RoomSession };
    }
}

export interface RemoveChatRoomAction extends ActionBase {
    type: "REMOVE_CHAT_ROOM",
    data: {
        roomHandle: string
    }
}

export interface JoinChatRoomAction extends ActionBase {
    type: "JOIN",
    data: {
        roomHandle: string,
        roomSessionHandle: string
    }
}

export interface LeaveChatRoomAction extends ActionBase {
    type: "PART",
    data: {
        roomHandle: string
    }
}

export interface SendTextMessage extends ActionBase {
    type: "TEXT",
    data: {
        content: string,
        roomHandle: string
    }
}

export type Action =
    SendTextMessage
    | LeaveChatRoomAction
    | JoinChatRoomAction
    | RemoveChatRoomAction
    |
    SetRoomSessionsAction
    | RemoveRoomSessionAction
    | AddRoomSessionAction
    | SetRoomSessionIdAction
    | SetChatRoomAction
    |
    SetChatInputAction
    | AddMessageAction
    | SetRoomHandleInputAction
    | SetRoomSessionHandleInputAction

export interface WebSocketMiddleware<DispatchExt = {},
    S = any,
    D extends Dispatch = Dispatch> {
    (api: MiddlewareAPI<D, S>): (
        next: Dispatch<Action>
    ) => (action: Action) => any
}