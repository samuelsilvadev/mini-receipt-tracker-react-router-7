import { Receipt, ReceiptPayload } from "./types";

export async function getReceipts(): Promise<{ receipts: Receipt[] }> {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/receipts`);
  const data = await response.json();

  return { receipts: data };
}

export async function saveReceipt(receipt: ReceiptPayload) {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/receipts`, {
    method: "POST",
    body: JSON.stringify(receipt),
  });

  return response.json();
}

export async function deleteReceipt(id: Receipt["id"]) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/receipts/${id}`,
    {
      method: "DELETE",
    },
  );

  return response.json();
}
