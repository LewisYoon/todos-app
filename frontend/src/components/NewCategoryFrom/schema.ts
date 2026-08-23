import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { error: "name must not be blank" }),
});

export type CategoryFormData = z.infer<typeof schema>;
