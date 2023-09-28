import React from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function App() {
  return (
    <Routes>
      <Route path="/:username" element={<GithubUser/>}/>
    </Routes>
  )
}
