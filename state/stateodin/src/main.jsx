import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ControlledComponent from "./ControlledComponent"
import ControlledComponent2 from "./ControlledComponent2";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ControlledComponent />
    <ControlledComponent2/>
  </React.StrictMode>,
);
