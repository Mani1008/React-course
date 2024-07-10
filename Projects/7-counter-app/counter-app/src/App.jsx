import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  // let counter = 15;
  const addValue = () => {
    counter= counter + 1;
    setCounter(counter);
    console.log("value is:", counter);
  }

  const removeValue = () => {
    counter= counter - 1;
    setCounter(counter);
    console.log("value is:", counter);
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>
          add Value 
        </button>
        <br />
        <button onClick={removeValue}>
          remove value
        </button>
      </div>
    </>
  )
}

export default App;
