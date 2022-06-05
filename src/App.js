import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  }

  const Decrement = () => {
    setCount(count - 1);
  }

  const Reset = () => {
    setCount(0);
  }

  return (
    <div>
    <button onClick={Increment}>+</button>
    <h1>{count}</h1>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
    </div>
    )
}

export default App;
