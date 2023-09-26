import { useGithubUser } from "./HookGithubUser";

export function GithubUser({username}) {
  const { data, error, loading, log } = useGithubUser(username);

  function handleGetUserData(){
    log(username)
  }
  return (
    <div>
      <button onClick={handleGetUserData}>Load User data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There was an error</h1>}
      {data && (
        <div>
          <h1>Name: {data.login}</h1>
          <p>Id: {data.id}</p>
          <i>
            Bio: <b>{data.bio}</b>
          </i>
        </div>
      )}
    </div>
  );
}
