import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore} from "redux";
import App from './App';
import reducer from "./reducer";

const store = createStore(reducer,  composeWithDevTools())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
