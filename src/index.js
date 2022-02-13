import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import createWebSocketMiddleWare from "./middleware";
import reducer from "./reducer";


const store = createStore(reducer, composeWithDevTools(applyMiddleware(createWebSocketMiddleWare())));

const GlobalStyle = createGlobalStyle`
  body {
    font-family: IBM Plex Mono, monospace;
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
                <App/>
        </Provider>
    </React.StrictMode>, document.getElementById("root"));
