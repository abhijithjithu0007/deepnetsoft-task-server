import z from "zod";

export const createMenuSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const addItemToMenuSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
});
