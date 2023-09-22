import { useState } from "react";

export function useForm() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  function handleInputs(event) {
    const { name, value } = event.target;

    setLogin((login) => {
      return {
        ...login,
        [name]: value,
      };
    });
    console.log(login)
  }

  function handleShowInputs() {
    console.log(login);
    
  }

  return {
    login: login,
    inputVal: handleInputs,
    showVal: handleShowInputs,
  };
}
