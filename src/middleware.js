import {setRoomName, setConnectedStatus, addMessage, setClientNames} from "./actions"

const createWebSocketMiddleWare = url => {
    return ({getState, dispatch}) => {
        let socket = new WebSocket("ws://localhost:8080");
        socket.onmessage = e => {
            console.log("Received message: " + e.data)
            const message = JSON.parse(e.data)
            switch (message.type) {
                case "SUCCESS_JOIN":
                    dispatch(setConnectedStatus(true))
                    dispatch(setRoomName(message.data.roomName))
                    dispatch(setClientNames(message.data.clientNames))
                    break;
                case "RECEIVE_TEXT":
                    dispatch(addMessage(message.data.text, message.data.clientName, message.data.id))
                    break;
            }
        }

        return next => action => {
            switch (action.type) {
                case "JOIN":
                    socket.send(JSON.stringify(action))
                    break;
                case "TEXT":
                    socket.send(JSON.stringify(action))
                    break;
            }
            return next(action)
        }
    }
}

export default createWebSocketMiddleWare
