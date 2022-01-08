import Home from "./Home.js";
import Chat from "./Chat"
import React from "react";
import {createGlobalStyle} from "styled-components"
import {BrowserRouter, Routes, Route} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: IBM Plex Mono,monospace;
  }
`

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/chat/:name" element={<Chat />}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
