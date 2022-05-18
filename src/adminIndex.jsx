import React from "react";
import { createRoot } from "react-dom/client"

import { App } from "./adminApp";

createRoot(document.getElementById("admin")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);