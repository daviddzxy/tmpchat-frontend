import {addClientNames, setRoomName, setConnectedStatus, addMessage} from "./actions"

const createWebSocketMiddleWare = url => {
    return ({getState, dispatch}) => {
        let socket = new WebSocket("ws://localhost:8080");
        socket.onmessage = e => {
            console.log("Received message: " + e.data)
            const message = JSON.parse(e.data)
            switch (message.type) {
                case "SUCCESS_JOIN_ROOM":
                    dispatch(setConnectedStatus(true))
                    dispatch(setRoomName(message.data.roomName))
                    break;
                case "CLIENT_LIST":
                    dispatch(addClientNames(message.data.roomName, message.data.clientNames))
                    break;
                case "RECEIVE_TEXT_MESSAGE":
                    dispatch(addMessage(message.data.text, message.data.clientName, message.data.id))
                    break;
            }
        }

        return next => action => {
            switch (action.type) {
                case "JOIN_ROOM":
                    socket.send(JSON.stringify(action))
                    break;
                case "SEND_TEXT_MESSAGE":
                    socket.send(JSON.stringify(action))
                    break;
            }
            return next(action)
        }
    }
}

export default createWebSocketMiddleWare
