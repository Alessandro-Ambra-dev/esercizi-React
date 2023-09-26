import { useState, useCallback } from "react";

export function useCounter({ intialVal = 0 }) {
  const [counter, setCounter] = useState(intialVal);

  let handleIncrementCounter = useCallback(function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }, []);

  let handleResetCounter = useCallback(
    function handleResetCounter() {
      setCounter(intialVal);
    },
    [intialVal]
  );

  let handleDecrementCounter = useCallback(function handleDecrementCounter() {
    setCounter((c) => c - 1);
  }, []);

  return {
    counter: counter,
    onIncrement: handleIncrementCounter,
    onReset: handleResetCounter,
    onDecrement: handleDecrementCounter,
  };
}
