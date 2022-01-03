const createWebSocketMiddleWare = url => {
    return ({ getState, dispatch }) => {
        let socket = new WebSocket("ws://localhost:8080");
        socket.onmessage = e => {
            console.log("Received message: " + e.data)
        }

        return next => action => {
            switch (action.type) {
                case "CREATE_ROOM":
                    socket.send(JSON.stringify(action));
                    break;
            }
            return next(action)
        }
    }
}

export default createWebSocketMiddleWare
