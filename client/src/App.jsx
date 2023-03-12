import { useState } from 'react'
import './App.css';
import Button from './components/Button';



function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false)

  const John = {
    age: 1,
    position: 'Coffee Maker',
  }
  const Jane = {
    age: 2,
    position: 'Bread Maker'
  }

  const workers = [John, Jane];

  const data = [
    'asdfasf',
    'asfsdfs',
    'asfsfsdf',
    'asfasfsa',
    'asfasf'
  ]
  
  const x = 0;
  const handleClick = () => {
    setCount((count) => count + 1)
    setDarkMode((darkMode) => !darkMode)
  }

  darkMode ? document.body.style.backgroundColor = '' : document.body.style.backgroundColor = 'white';

  return (
  <div className="">
    <div className="card">
      <button onClick={handleClick}>
        count is {count}
      </button>
      {workers.map((el,i) => {
        return <Button key={i} text={el.position} />
      })
    }
    </div>
  </div>
  )
}

export default App
