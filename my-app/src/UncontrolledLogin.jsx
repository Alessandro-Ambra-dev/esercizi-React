import React from "react";

export class UncontrolledLogin extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.state = {
      disabled: true,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    const button = event.target.elements.submit.disabled;
    alert("Confermi i dati?");
    console.log(username, password, button);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;

    this.setState({
      disabled: !username || !password,
    });
  };
  componentDidMount(){
    const username = this.username.current
     username.focus()
 }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="username"
          ref={this.username}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="password"
          ref={this.password}
          onChange={this.handleInputChange}
        />
        <button type="submit" name="submit" disabled={this.state.disabled}>
          Submit
        </button>
        <button type="reset">Reset Values</button>
      </form>
    );
  }
}
