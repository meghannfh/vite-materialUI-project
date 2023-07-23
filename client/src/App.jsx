import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Profile from '../src/pages/Profile';
import About from '../src/pages/About';
import History from '../src/pages/History';


function App() {
  return (
  <div className="">
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route 
          path="/"
          element={<Home />}/>
          <Route 
          path="/login"
          element={<Login />}/>
          <Route 
          path="/profile"
          element={<Profile />}/>
          <Route 
          path="/about"
          element={<About />}/>
          <Route 
          path="/history"
          element={<History />}/>
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App
