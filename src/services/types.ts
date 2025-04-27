import { z } from "zod";

export type Receipt = {
  id: string;
  name: string;
  price: number;
  date: string;
};

export const Receipt = z.object({
  name: z.string(),
  price: z.coerce.number(),
  date: z.string(),
});

export type ReceiptPayload = z.infer<typeof Receipt>;
