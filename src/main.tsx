import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { StrictMode } from "react";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
