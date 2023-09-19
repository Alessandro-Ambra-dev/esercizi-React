import React, { useState, useEffect } from "react";

export function Counter({ intialValue = 0 }, onCounterChange) {
  const [counter, setCounter] = useState(intialValue);

  onCounterChange = useEffect(() => {
    console.log(`The counter is ${counter}`);
  }, [counter]);

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
