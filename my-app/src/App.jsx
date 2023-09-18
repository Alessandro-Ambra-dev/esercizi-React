import React from "react";
import { LanguagueContext } from "./LenguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="dt">Deutch</option>
        </select>
        <LanguagueContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguagueContext.Provider>
      </div>
    );
  }
}
