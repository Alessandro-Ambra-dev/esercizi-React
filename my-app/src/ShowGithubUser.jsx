import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
export function ShowGithubUser({
  initialState = ["Alessandro", "Vincenzo", "Antonio"],
}) {
  const [users, setUsers] = useState(initialState);

  function handleUsernameInput(event) {
    const input = event.target.parentElement.querySelector(
      "[name = 'username']"
    );
    const value = input.value;

    if (value) {
      const newUsers = [...users, value];
      setUsers(newUsers);
      input.value = "";
    }
  }

  function handleReset() {
    setUsers(initialState);
  }

  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={user + index}>
              <Link to={`/users/${user}`}>Users: {user}</Link>
            </li>
          );
        })}
      </ul>
      <input type="text" name="username" />
      <button
        onClick={handleUsernameInput}
        className="mx-1 text-red-400 bg-black"
      >
        Add a User
      </button>
      <button onClick={handleReset} className="mx-1  text-red-400 bg-black">
        Reset
      </button>
      <Routes>
        <Route index element={<p>Add a user and select it</p>} />
      </Routes>
    </div>
  );
}
