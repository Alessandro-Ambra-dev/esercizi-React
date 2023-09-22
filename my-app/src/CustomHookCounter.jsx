import { useState } from "react";

export function useCounter({ intialVal = 0 }) {
  const [counter, setCounter] = useState(intialVal);

  function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }

  function handleResetCounter() {
    setCounter(intialVal);
  }
  function handleDecrementCounter() {
    setCounter((c) => c - 1);
  }

  return {
    counter: counter,
    onIncrement: handleIncrementCounter,
    onReset: handleResetCounter,
    onDecrement: handleDecrementCounter,
  };
}
