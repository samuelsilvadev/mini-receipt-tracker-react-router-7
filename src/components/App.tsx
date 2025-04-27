import { createBrowserRouter, RouterProvider } from "react-router";
import Receipts from "../pages/Receipts";
import TrackReceipt from "../pages/TrackReceipt";
import { saveReceiptAction } from "../actions/saveReceipt";
import { getReceipts } from "../services/receipt";
import { PageLoading } from "./PageLoading";
import PageBoundary from "./PageBoundary";

import { Layout } from "./Layout";
import { deleteReceiptAction } from "../actions/deleteReceipt";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "/",
        Component: Receipts,
        errorElement: <PageBoundary />,
        hydrateFallbackElement: <PageLoading />,
        loader: getReceipts,
        action: deleteReceiptAction,
      },
      {
        path: "/add",
        errorElement: <PageBoundary />,
        Component: TrackReceipt,
        action: saveReceiptAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
