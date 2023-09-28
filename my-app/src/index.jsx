import { Root } from "./Root";
import "./index.css";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Root />);
