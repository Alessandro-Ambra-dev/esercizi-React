import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleResetForm = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputs}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputs}
        />
        <button
          type="button"
          disabled={
            this.state.username === "" && this.state.password === ""
              ? true
              : false
          }
          onClick={this.props.onLogin}
        >
          {" "}
          Click me
        </button>
        <button type="button" onClick={this.handleResetForm}>
          Reset Every Thing
        </button>
      </div>
    );
  }
}
