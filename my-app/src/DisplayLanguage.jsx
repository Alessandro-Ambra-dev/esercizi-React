import React from "react";
import { LanguagueContext } from "./LenguageContext";
export class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguagueContext.Consumer>
        {(language) => {
          return <h1>The language selected is {language}</h1>;
        }}
      </LanguagueContext.Consumer>
    );
  }
}
