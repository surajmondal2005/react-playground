import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greetings.jsx";
import { FavoriteFood } from "./FavoriteFood.jsx";
import { CorrectCode } from "./CorrectCode.jsx";
import Props from "./Props.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
    <CorrectCode />
    <Props/>
  </StrictMode>,
);
