import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <p>
        Hello <strong>{this.props.name}</strong> !
      </p>
    );
  }
}
