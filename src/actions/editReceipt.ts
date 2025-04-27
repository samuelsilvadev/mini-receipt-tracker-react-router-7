import { ActionFunctionArgs } from "react-router";
import { EditReceiptSchema } from "../services/types";
import { updateReceipt } from "../services/receipt";
import { ZodError } from "zod";
import { logger } from "../services/logger";

export async function editReceiptAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  try {
    const receipt = EditReceiptSchema.parse({
      id: formData.get("id"),
      date: formData.get("date"),
      price: formData.get("price"),
      name: formData.get("name"),
    });

    logger.info("Updating receipt");
    logger.info(receipt);

    await updateReceipt(receipt);

    return { success: true };
  } catch (error) {
    logger.error("Failed to update receipt", error as Error);

    if (error instanceof ZodError) {
      return { error: error.message };
    }

    return { error: "Failed to update receipt" };
  }
}
