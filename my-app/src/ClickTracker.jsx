import React from "react";

export class ClickTracker extends React.Component {
  state = {
    buttonClicked: "",
  };
  handleTrackingButton = (event) => {
    this.setState((state) => {
      return {
        buttonClicked: (state.buttonClicked = event.target.name),
      };
    });
  };

  render() {
    return (
      <div>
        <h1> Button Clicked : {this.state.buttonClicked}</h1>
        <button name="button1" onClick={this.handleTrackingButton}>
          Button 1
        </button>
        <button name="button2" onClick={this.handleTrackingButton}>
          Button 2
        </button>
        <button name="button3" onClick={this.handleTrackingButton}>
          Button 3
        </button>
      </div>
    );
  }
}
