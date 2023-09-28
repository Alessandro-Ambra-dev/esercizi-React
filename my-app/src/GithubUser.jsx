import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function GithubUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);
  const {username} = useParams()

  async function fetchGihubUser(username) {
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
    fetchGihubUser(username);
  }, [username]);

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
