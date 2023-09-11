import React from "react";

export class Welcome extends React.Component {
  render() {
    return <p className="text-slate-800 font-semibold">Hello {this.props.name}</p>;
  }
}
