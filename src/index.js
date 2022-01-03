import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {createStore, applyMiddleware} from "redux";
import App from "./App";
import reducer from "./reducer";
import createWebSocketMiddleWare from "./middleware"

const store = createStore(reducer,  composeWithDevTools(applyMiddleware(createWebSocketMiddleWare())))
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
