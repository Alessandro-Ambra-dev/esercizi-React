import { useCounter } from "./CustomHookCounter";

export function Counter({ initalValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initalValue);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}> Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
