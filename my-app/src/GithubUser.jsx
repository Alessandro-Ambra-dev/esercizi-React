import { useState, useEffect } from "react";


export function GithubUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);

  async function fetchGihubUser(username='Alessandro-Ambra-dev') {
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);
      setUser(json);
    } catch (error) {
      setError(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGihubUser();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error</p>}
      {user && (
        <div>
          <h3>Username: {user.name}</h3>
          <p>id: {user.id}</p>
          <i>
            <b>Bio:</b>
            {user.bio}
          </i>
        </div>
      )}
    </div>
  );
}
