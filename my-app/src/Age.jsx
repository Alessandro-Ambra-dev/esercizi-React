import React from "react";

export class Age extends React.Component {
  render() {
    return <p>{this.props.age && `Your age is : ${this.props.age}`}</p>;
  }
}
