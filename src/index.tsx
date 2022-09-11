import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import reducer from "./reducer";
import { Action, State } from "./types";
import { webSocketMiddleWare } from "./middleware";

const store: Store<State, Action> = createStore(reducer, composeWithDevTools(applyMiddleware(webSocketMiddleWare)));

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
