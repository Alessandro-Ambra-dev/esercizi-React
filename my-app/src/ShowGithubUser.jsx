import { Link, Route } from "react-router-dom";

export function ShowGithubUser() {
  return (
    <Route
      path="/ShowgithubUser"
      element={
        <div>
          <h1>See the users:</h1>
          <Link to={"/:username"}>See the Github User</Link>
        </div>
      }
    />
  );
}
