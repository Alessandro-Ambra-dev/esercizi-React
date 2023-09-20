import React, { useEffect, useState } from "react";

export function Counter({ intialValue = 0 }) {
  const [counter, setCounter] = useState(intialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (counter == 6) {
      setCounter(intialValue);
    }
  }, [counter]);

  return (
    <div>
      <h3>The counter is : {counter}</h3>
    </div>
  );
}
