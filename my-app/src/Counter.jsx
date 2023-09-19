import React, { useState } from "react";

export function Counter({ intialValue = 0 }) {
  const [counter, setCounter] = useState(intialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleResetCounter() {
    setCounter(intialValue);
  }
  return (
    <div>
      <h3 className="mx-1 text-cyan-400">
        Counter: <span className="text-red-700">{counter}</span>
      </h3>
      <button className="mx-1" onClick={handleCounterIncrement}>
        Increase the counter
      </button>
      <button className="mx-1" onClick={handleResetCounter}>
        Reset the counter
      </button>
    </div>
  );
}
