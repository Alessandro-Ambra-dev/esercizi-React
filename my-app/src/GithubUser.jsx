import { useGithubUser } from "./HookGithubUser";

export function GithubUser(username) {
  const { data, error, loading, log } = useGithubUser(username);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <h2>There was an error!</h2>}
      <div>
        {data && <p>User: {data.login}</p>}
        {/* {fetch && <p>Id: {data.id}</p>} */}
        {/* {fetch && <i>Bio: {data.bio}</i>} */}
      </div>
    </div>
  );
}
