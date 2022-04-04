import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./pages/login/app/LoginPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
reportWebVitals();
