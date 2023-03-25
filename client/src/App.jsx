import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Button from './components/Button';
import SignInSide from './components/SignInSide';



function App() {
 const [card, setCards] = useState(null);

  return (
  <div className="">
    <Navbar />
  </div>
  )
}

export default App
