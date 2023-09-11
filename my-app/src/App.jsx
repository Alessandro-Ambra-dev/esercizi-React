import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialVal={0} increment={1} timeout={1000} />
      </div>
    );
  }
}
