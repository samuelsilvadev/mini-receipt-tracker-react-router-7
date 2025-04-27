import { createBrowserRouter, RouterProvider } from "react-router";
import Receipts from "../pages/Receipts";
import TrackReceipt from "../pages/TrackReceipt";
import { getReceipts, saveReceipt } from "../services/receipt";
import { PageLoading } from "./PageLoading";
import PageBoundary from "./PageBoundary";
import { ZodError } from "zod";
import { logger } from "../services/logger";
import { Receipt } from "../services/types";
import { Layout } from "./Layout";

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
      },
      {
        path: "/add",
        errorElement: <PageBoundary />,
        Component: TrackReceipt,
        action: async ({ request }) => {
          const formData = await request.formData();

          try {
            const receipt = Receipt.parse({
              date: formData.get("date"),
              price: formData.get("price"),
              name: formData.get("name"),
            });

            logger.info("Saving receipt");
            logger.info(receipt);

            await saveReceipt(receipt);

            return { success: true };
          } catch (error) {
            logger.error("Failed to save receipt", error as Error);

            if (error instanceof ZodError) {
              return { error: error.message };
            }

            return { error: "Failed to save receipt" };
          }
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
