import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

let string = {
  en: {
    set: "The language set is English",
  },
  it: {
    set: "La lingua scelta è Italiano",
  },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return <h2>{string[language].set}</h2>;
}
