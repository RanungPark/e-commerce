import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "../style/GlobalStyle";
import { Reset } from "styled-reset";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
