import {
    addMessage,
    addRoomSession,
    removeChatRoom,
    removeRoomSession,
    setRoomSessionId,
    setRoomSessions
} from "./actions";


const createWebSocketMiddleWare = url => {
    return ({getState, dispatch}) => {
        let socket = new WebSocket("ws://localhost:8080");
        socket.onmessage = e => {
            console.log("Received message: " + e.data);
            const message = JSON.parse(e.data);
            switch (message.type) {
                case "SUCCESS_JOIN":
                    dispatch(setRoomSessionId(message.data.roomHandle, message.data.roomSessionId))
                    dispatch(setRoomSessions(message.data.roomHandle, message.data.roomSessions))
                    break;
                case "SUCCESS_PART":
                    dispatch(removeChatRoom(message.data.roomHandle))
                    break;
                case "RECEIVE_TEXT":
                    dispatch(addMessage(message.data.content, message.data.roomHandle, message.data.roomSessionId))
                    break;
                case "ROOM_SESSION_JOIN":
                    dispatch(addRoomSession(message.data.roomHandle, message.data.roomSession))
                    break;
                case "ROOM_SESSION_PART":
                    dispatch(removeRoomSession(message.data.roomHandle, message.data.roomSessionId))
                    break;
            }
        };

        return next => action => {
            switch (action.type) {
                case "JOIN":
                    socket.send(JSON.stringify(action));
                    break;
                case "TEXT":
                    socket.send(JSON.stringify(action));
                    break;
                case "PART":
                    socket.send(JSON.stringify(action));
                    break;
            }
            return next(action);
        };
    };
};

export default createWebSocketMiddleWare;
