import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import { NotFound } from "./NotFound";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to the App:</h1>
              <Link to={"/users"}>See the Github Users</Link>
            </div>
          }
        />
        <Route path="/users" element={<ShowGithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
