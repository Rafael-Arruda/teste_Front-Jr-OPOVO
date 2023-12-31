import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from "./components/Footer";

import Home from "./pages/Home";

export default function RoutesApp() {
    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}