import { React, useState } from 'react'
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
    //decrease counter
    const decrease = () => {
          setCounter(count => count - 1);
    };
    // validation
    if (counter < 0) {
        alert("counter can't be negative")
        setCounter(0)
    }

  //reset counter 
  const reset = () =>{
    setCounter(0)
    }
      
  return (
    <div className="counter">
      <h1>Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>Increment</button>
        <button className="control__btn" onClick={decrease}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
