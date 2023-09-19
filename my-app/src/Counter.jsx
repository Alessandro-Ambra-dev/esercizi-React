import React, { useState, useEffect } from "react";

export function Counter({ intialValue = 0 , increment = 1, interval= 1000}) {

    const[counter, setCounter] = useState(intialValue);

    useEffect(()=>{
       let timer= setInterval(()=>{
            setCounter((c)=> c + increment )
        },interval)

        return()=>{
            clearInterval(timer, 1000)
        }
    }, [counter, increment, interval, intialValue])

  return <div>
    <h3>The counter is : {counter}</h3>
  </div>;
}
