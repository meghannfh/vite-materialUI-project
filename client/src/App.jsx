import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/Navbar';
import ResponsiveAppBar from '../src/components/ResponsiveAppBar';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import SignUp from '../src/pages/SignUp';
import Profile from '../src/pages/Profile';
import AddCard from '../src/pages/AddCard';


function App() {
  return (
  <div className="">
    <BrowserRouter>
      <Navbar />
      <ResponsiveAppBar />
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
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App
