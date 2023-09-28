import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./Counter";

export function App() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}
