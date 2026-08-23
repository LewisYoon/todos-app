import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, { error: "title must not be blank" }),
  categoryId: z.coerce.number().min(1, { error: "category must not be blank" }),
});

export type TodoFormData = z.infer<typeof schema>;
