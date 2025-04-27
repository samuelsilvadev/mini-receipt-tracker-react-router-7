import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import Receipts from "../pages/Receipts";
import TrackReceipt from "../pages/TrackReceipt";
import EditReceipt from "../pages/EditReceipt";
import { saveReceiptAction } from "../actions/saveReceipt";
import { getReceipt, getReceipts } from "../services/receipt";
import { PageLoading } from "./PageLoading";
import PageBoundary from "./PageBoundary";

import { Layout } from "./Layout";
import { deleteReceiptAction } from "../actions/deleteReceipt";
import { editReceiptAction } from "../actions/editReceipt";
import { logger } from "../services/logger";

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
      {
        path: "/receipt/:id",
        errorElement: <PageBoundary />,
        Component: EditReceipt,
        loader: ({ params }) => {
          if (!params.id) {
            logger.info("No id provided to load receipt for edit");

            return redirect("/");
          }

          return getReceipt(params.id);
        },
        action: editReceiptAction,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
