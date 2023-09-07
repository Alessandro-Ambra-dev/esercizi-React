import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialVal,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.interval);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <p>
          The constructor is not needed anymore if there is the
          componentDidMount method!
        </p>
      </div>
    );
  }
}

Counter.defaultProps = {
  initialVal: 0,
  increment: 1,
  interval: 1000,
};
