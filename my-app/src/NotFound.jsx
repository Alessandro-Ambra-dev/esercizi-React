import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>The url path was not found</h1>
      <p>Go back to the main page</p>
      <Link to={"/"}>Main page</Link>
    </div>
  );
}
