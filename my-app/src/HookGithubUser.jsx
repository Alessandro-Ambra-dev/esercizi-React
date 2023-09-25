import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(error);
      });
  }, [username]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return { data: data };
}
