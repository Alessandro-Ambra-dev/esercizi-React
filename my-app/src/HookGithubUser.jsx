import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function handleFetchUser() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    handleFetchUser(username);
  }, [username]);

  return {
    data: data,
    loading: loading,
    error: error,
    log: handleFetchUser,
  };
}
