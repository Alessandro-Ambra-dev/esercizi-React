import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUser } from "./GithubUser";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowGithubUser />} />
      <Route path="/:username" element={<GithubUser />} />
    </Routes>
  );
}
