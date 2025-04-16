import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Receipts } from "./pages/Receipts.tsx";
import { TrackReceipt } from "./pages/TrackReceipt.tsx";

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    Component: Receipts,
    loader: () => {
      return Promise.resolve({ data: [] });
    },
  },
  {
    path: "/add",
    Component: TrackReceipt,
    loader: () => {
      return Promise.resolve({ data: [] });
    },
  },
]);

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
