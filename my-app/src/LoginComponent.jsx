import React, { useState } from "react";

export function LoginComponent() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData(data);
  }

  console.log(data);
  return (
    <form>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        name="remember"
        onChange={handleInputChange}
        value={data.remember}
      />
      <button
        type="submit"
        name="submit"
        disabled={
          data.username === "" || data.password === "" ||
          data.remember === false
            ? true
            : false
        }
      >
        Invia
      </button>
      <button onClick={handleResetForm}>Reimposta</button>
    </form>
  );
}
