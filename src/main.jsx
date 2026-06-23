import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const DATA = [
  { id: "todo-0", name: "吃饭", completed: true },
  { id: "todo-1", name: "睡觉", completed: false },
  { id: "todo-2", name: "重复", completed: false },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
);
