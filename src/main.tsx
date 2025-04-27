import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./components/Router";
import { StrictMode } from "react";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Router />
    </StrictMode>,
  );
}
