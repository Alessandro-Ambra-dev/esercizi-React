import { Link } from "react-router-dom";

export function ShowGithubUser() {
  return <Link to={"/:username"}>See the Github User</Link>;
}
