import React from "react";
import { CarDetails } from "./CarDetails";

export function App() {
  return <div>
    <CarDetails initialStatus={{model: "Toyota Yaris", prodYear: "2020", color:"violet"}}/>
  </div>;
}
