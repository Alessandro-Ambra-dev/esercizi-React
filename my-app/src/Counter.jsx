import React, { useState, useEffect } from "react";

export function Counter({ intialValue = 0 }) {
  const [counter, setCounter] = useState(intialValue);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    
  }, []);

  return (
    <div>
      <h3>The counter is : {counter}</h3>
    </div>
  );
}
