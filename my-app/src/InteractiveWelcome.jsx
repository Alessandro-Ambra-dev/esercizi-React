import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveLogin extends React.Component{
    state = {
        username: "",
    }
    handleInputChange = (event) =>{
        const input = event.target.name
        const value = event.target.value

        this.setState({
            [input]: value
        })
    }

    render(){
        return (
          <div>
            <Welcome name={this.state.username} />
            <input
              type="text"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </div>
        );
        
    }
}