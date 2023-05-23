import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import SignUp from '../src/pages/SignUp';
import Profile from '../src/pages/Profile';
import AddCard from '../src/pages/AddCard';
import About from '../src/pages/About';


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
          path="/signup"
          element={<SignUp />}/>
          <Route 
          path="/addCard"
          element={<AddCard />}/>
          <Route 
          path="/profile"
          element={<Profile />}/>
          <Route 
          path="/about"
          element={<About />}/>
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App
