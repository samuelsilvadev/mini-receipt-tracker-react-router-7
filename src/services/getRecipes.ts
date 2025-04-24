export async function getReceipts() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/receipts`);
  const data = await response.json();

  return { receipts: data };
}
