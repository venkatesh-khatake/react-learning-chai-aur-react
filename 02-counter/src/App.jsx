import React, { useState } from 'react'
import './app.css'

const App = () => {
  const [count,setCount] = useState(0);

  const increaseCount = ()=>{
    if(count >= 0 && count < 20){
      setCount(count + 1);
    }
  }

  const resetCount = ()=>{
    setCount(0)
  }

  const decreaseCount = ()=>{
    if(count > 0){
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={resetCount} style={{margin:'0px 10px'}}>Reset</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App
