import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'
import Homepage from './pages/homepage/Homepage';
import Models from './pages/models/Models';
import Compare from './pages/compare/Compare';
import Configuration from './pages/configuration/Configuration';

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route index element={<Homepage />}/>
        <Route path="models" element={<Models />}/>
        <Route path="compare" element={<Compare />}/>
        <Route path="configuration" element={<Configuration />}/>
     </Routes>
    </BrowserRouter>
  );
}
