import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username !== null && `https://api.github.com/users/${username}`
  );
  function handleResetUser() {
    mutate();
  }

  return {
    data,
    error,
    isLoading: !data && !error,
    onReset: handleResetUser,
  };
}
