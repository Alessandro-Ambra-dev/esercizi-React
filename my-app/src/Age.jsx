import React from "react";

export class Age extends React.Component {
  render() {
    return (
      <p>
        {this.props.age > 18 &&
          this.props.age < 65 &&
          this.props.name === "John" &&
          `Your age is: ${this.props.age}`}
      </p>
    );
  }
}
