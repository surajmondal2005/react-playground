import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greetings.jsx";
import { FavoriteFood } from "./FavoriteFood.jsx";
import { CorrectCode } from "./CorrectCode.jsx";
import Props from "./Props.jsx";
import PropsAsFunctions from "./PropsAsFunctions.jsx";
import PropsWithSpread from "./PropsWithSpread";
import NestedProps from "./NestedProps.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
    <CorrectCode />
    <Props />
    <PropsAsFunctions />
    <PropsWithSpread />
    <NestedProps />
  </StrictMode>,
);
