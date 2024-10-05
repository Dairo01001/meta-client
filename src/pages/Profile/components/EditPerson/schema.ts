import z from "zod";

export const PersonSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  secondName: z.string().optional(),
  firstSurname: z.string().optional(),
  secondSurname: z.string().optional(),
  email: z.string().email("Email must be a valid email"),
});
