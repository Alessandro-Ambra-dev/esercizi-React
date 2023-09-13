
import { App } from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

// crea root = document.getElementById("root");
root.render(<App />);
