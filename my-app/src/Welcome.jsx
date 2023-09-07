import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name} !</p>
        <p>Your age is :{this.props.age}</p>
      </div>
    );
  }
}
