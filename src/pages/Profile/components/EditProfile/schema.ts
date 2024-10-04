import z from "zod";

export const ProfileSchema = z.object({
  birthDate: z
    .date()
    .min(new Date("1900-01-01"), {
      message: "Birth date must be after 1900-01-01",
    })
    .max(new Date(), "Birth date must be before today"),
  phone: z.string().length(10, {
    message: "Phone must be 10 characters",
  }),
  photo: z.string().url("Photo must be a valid URL"),
});
