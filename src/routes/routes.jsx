import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from "../page/about"
import Login from '../page/login';
import Inicio from '../page/inicio';
const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}

export default Rutas