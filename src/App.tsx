import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Chat from "./Chat";
import Header from "./Header";
import Home from "./Home";
import { State } from "./types";


const App = () => {
    const roomSessionHandleInput = useSelector((state: State) => state.roomSessionHandleInput);
    const roomHandleInput = useSelector((state: State) => state.roomHandleInput);
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chat/:roomHandle"
                       element={roomHandleInput && roomSessionHandleInput ? <Chat/> : <Navigate to={"/"}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;