import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Chat from "./Chat";
import Header from "./Header";
import Home from "./Home";


const App = () => {
    const clientName = useSelector(state => state.clientNameInput);
    const roomName = useSelector(state => state.roomNameInput);
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chat" element={clientName && roomName ? <Chat/> : <Navigate to={"/"}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;