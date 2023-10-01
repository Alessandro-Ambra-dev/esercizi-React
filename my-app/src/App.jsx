import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { Counter } from "./Counter";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Link to={"/ShowGithubUser"}>Go to users three</Link>
            <Link to={"/:username"}>Go directly to the user</Link>
            <Link to={"/counter"}>Go to counter</Link>
          </div>
        }
      />
      <Route
        path="/:username"
        element={<GithubUser username="Alessandro-Ambra-dev" />}
      />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}
