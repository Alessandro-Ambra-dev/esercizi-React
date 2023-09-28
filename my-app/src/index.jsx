import { createRoot } from "react-dom/client";

import { Root } from "./Root";
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Root />);
