import { useForm } from "./CustomForm";

export function Form() {
  const { login, inputVal, showVal } = useForm();
  return (
    <div>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={inputVal}
        />
        <input
          type="text"
          name="password"
          value={login.password}
          onChange={inputVal}
        />
        <button onClick={showVal}>Show Values</button>
    </div>
  );
}
