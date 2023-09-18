import React from "react";
import { LanguagueContext } from "./LenguageContext";
export class DisplayLanguage extends React.Component{
    render(){

        return (
          <LanguagueContext.Provider>
          <div>
              <h1>The language selected is {this.s}</h1>
          </div>
          </LanguagueContext.Provider>
        );
    }
}