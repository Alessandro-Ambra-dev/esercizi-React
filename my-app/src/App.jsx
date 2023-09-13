import React from "react";
import { Login } from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Login
          onLogin={() => {
            alert("Funziono Bene !!");
          }}
        />
      </div>
    );
  }
}
