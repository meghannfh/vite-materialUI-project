import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignInSide from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SignInSide />
    </div>
  )
}

export default App
