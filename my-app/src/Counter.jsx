import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialVal,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.timeout);
  }
  render(){
    console.log(this.props.intialVal, this.props.increment, this.props.timeout)
    return <h1>Count: {this.state.count}</h1>
  }
}

// Counter.defaultProps = {
//   intialVal: 0,
//   increment: 1,
//   timeout: 1000,
// };
