import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hello <strong>{this.props.name}</strong> !
        </p>
        <p>{this.props.age > 18 && <Age age={this.props.age}/>}</p>
      </div>
    );
  }
}
