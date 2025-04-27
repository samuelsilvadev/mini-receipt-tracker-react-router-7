import { Receipt } from "../services/types";
import { logger } from "../services/logger";
import { saveReceipt } from "../services/receipt";
import { ZodError } from "zod";

export async function saveReceiptAction({ request }: { request: Request }) {
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
}
