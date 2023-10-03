import React from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Routes>
        <Route path="/" element={<GithubUser />} />
      </Routes>
    </div>
  );
}
