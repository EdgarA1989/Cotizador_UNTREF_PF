import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Historial from './components/Historial';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="/historial" element={<Historial/>} />
        </Routes>
        
    </BrowserRouter>
    
  </React.StrictMode>
);



