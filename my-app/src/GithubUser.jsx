import { useGithubUser } from "./useGithubUser";

export function GithubUser(username) {
  const { data, error, isLoading } = useGithubUser((username='Alessandro-Ambra-dev'));

  return (
    <div>
      {error && <h3>There was an error</h3>}
      {isLoading && <h3>Loading...</h3>}
      {data && (
        <div>
          <h1>{data.login}</h1>
          <p>{data.id}</p>
          <i>{data.bio}</i>
        </div>
      )}
    </div>
  );
}
