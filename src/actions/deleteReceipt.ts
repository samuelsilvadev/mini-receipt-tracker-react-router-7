import { ActionFunctionArgs } from "react-router";
import { logger } from "../services/logger";
import { deleteReceipt } from "../services/receipt";

export async function deleteReceiptAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  if (request.method === "DELETE") {
    const id = formData.get("id");

    if (!id) {
      return { error: "Missing data" };
    }

    try {
      await deleteReceipt(id as string);

      return { success: true };
    } catch (error) {
      if (error instanceof Error) {
        logger.error("Failed to delete receipt", error);
      }

      return { error: "Failed to delete receipt" };
    }
  }
}
