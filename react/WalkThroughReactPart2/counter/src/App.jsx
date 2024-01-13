import { useState } from 'react'

import './App.css'

function App() {
 let [counter, setCounter] = useState(0)

 const increaseValue = () => {
  setCounter(counter+1)
 }
 const decreaseValue = () => {
  setCounter(counter-1)
 }
 const Reset = () =>{
    setCounter(0)
 }
  return (
    <>
      <h1>Counter</h1>

      <h2>Counter value: {counter}</h2>
      <div>
      <button onClick={increaseValue}>increase value</button>
      <br />
      <button onClick={decreaseValue}>decrease value</button>
      </div>
      <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App
