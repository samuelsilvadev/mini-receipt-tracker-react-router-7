import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Receipts } from "./pages/Receipts.tsx";
import { TrackReceipt } from "./pages/TrackReceipt.tsx";
import { getReceipts } from "./services/getRecipes.ts";
import { PageLoading } from "./components/PageLoading.tsx";

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    Component: Receipts,
    hydrateFallbackElement: <PageLoading />,
    loader: getReceipts,
  },
  {
    path: "/add",
    Component: TrackReceipt,
  },
]);

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
