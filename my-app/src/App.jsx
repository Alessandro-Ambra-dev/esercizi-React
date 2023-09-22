import React from "react";
import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter
        onCounterChange={(counter) => {
          console.log(`The counter is ${counter}`);
        }}
      />
    </div>
  );
}
