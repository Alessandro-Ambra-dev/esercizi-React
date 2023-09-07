import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return <div>
            <p>Hello {this.props.name} !</p>
           <p>{this.props.age > 18 &&
          this.props.age < 65 && <Age/>}</p>
        </div>
    }
}