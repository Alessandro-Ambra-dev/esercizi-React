import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SWRConfig } from "swr";
export function Root() {
  return (
    <SWRConfig>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}
