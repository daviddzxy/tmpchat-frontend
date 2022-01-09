import {createRoom, setConnectedStatus} from "./actions"

const createWebSocketMiddleWare = url => {
    return ({getState, dispatch}) => {
        let socket = new WebSocket("ws://localhost:8080");
        socket.onmessage = e => {
            console.log("Received message: " + e.data)
            const message = JSON.parse(e.data)
            switch (message.type) {
                case "SUCCESS_JOIN_ROOM":
                    dispatch(setConnectedStatus(message.data.roomName, true))
                    break;
            }
        }

        return next => action => {
            switch (action.type) {
                case "JOIN_ROOM":
                    socket.send(JSON.stringify(action))
                    dispatch(createRoom(action.data.roomName))
                    break;
            }
            return next(action)
        }
    }
}

export default createWebSocketMiddleWare
