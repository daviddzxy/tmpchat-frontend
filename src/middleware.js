import { setRoomName, setConnectedStatus, addMessage, setClients, addClient, removeClient } from "./actions";


const createWebSocketMiddleWare = url => {
    return ({getState, dispatch}) => {
        let socket = new WebSocket("ws://localhost:8080");
        socket.onmessage = e => {
            console.log("Received message: " + e.data);
            const message = JSON.parse(e.data);
            switch (message.type) {
                case "SUCCESS_JOIN":
                    dispatch(setConnectedStatus(true));
                    dispatch(setRoomName(message.data.roomName));
                    dispatch(setClients(message.data.clients));
                    break;
                case "RECEIVE_TEXT":
                    dispatch(addMessage(message.data.text, message.data.clientId, message.data.textId));
                    break;
                case "ADD_CLIENT":
                    dispatch(addClient(message.data.client))
                    break;
                case "REMOVE_CLIENT":
                    dispatch(removeClient(message.data.id))
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
