import { useEffect, useState } from "react";

export function GithubUserList({initialState = ["Alessandro", "Vincenzo", "Antonio"]}) {
  const [users, setUsers] = useState([initialState]);



  return (
    <div>
      <ul>
        {users.map((index) => (
          <li key={index}>{initialState}</li>
        ))}
      </ul>
    </div>
  );
}
