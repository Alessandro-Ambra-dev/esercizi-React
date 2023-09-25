import { useGithubUser } from "./HookGithubUser";

export function GithubUser(username) {

  const {data} = useGithubUser(username)

  return (
    <div>
      <div>
        {data && <h3>User: {data.login}</h3>}
        {data && <p>Id: {data.id}</p>}
        {data && <i>Bio: {data.bio}</i>}
      </div>
    </div>
  );
}
