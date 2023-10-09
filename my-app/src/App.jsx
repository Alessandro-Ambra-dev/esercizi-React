import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { Counter } from "./Counter";
import { NotFound } from "./NotFound";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Link to={"/ShowGithubUser"}>Go to users three</Link>
            <Link to={"/user"}>Go directly to the user</Link>
            <Link to={"/counter"}>Go to counter</Link>
          </div>
        }
      />
      <Route
        path="/user"
        element={<GithubUser username="Alessandro-Ambra-dev" />}
      />
      <Route path="/ShowgithubUser" element={<ShowGithubUser />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
