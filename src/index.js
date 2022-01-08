import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import {Provider} from "react-redux"
import {createGlobalStyle} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reducer from "./reducer";
import createWebSocketMiddleWare from "./middleware"
import Home from "./Home";
import Chat from "./Chat";

const store = createStore(reducer,  composeWithDevTools(applyMiddleware(createWebSocketMiddleWare())))

const GlobalStyle = createGlobalStyle`
  body {
    font-family: IBM Plex Mono,monospace;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/chat/:name" element={<Chat />}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
