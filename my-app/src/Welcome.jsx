import React from "react";

const name = "Alessandro";
export class Welcome extends React.Component {
  render() {
    return <p className="text-slate-800 font-semibold">Hello {name}</p>;
  }
}
