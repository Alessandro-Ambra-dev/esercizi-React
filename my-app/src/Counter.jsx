import { useState } from "react";


export function Counter({ initialVal = 0 }) {
  const [counter, setCounter] = useState(initialVal);
  function handleIncrement() {
    setCounter((c) => c + 1);
  }
  function handleDecrement() {
    setCounter((c) => c - 1);
  }
  function handleReset() {
    setCounter(initialVal);
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
