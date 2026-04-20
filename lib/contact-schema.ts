import { z } from "zod";

export const DELIVERY_METHODS = [
  "Море",
  "Авто",
  "Авиа",
  "Ж/Д",
  "Мультимодальный",
] as const;

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Укажите имя").max(100),
  lastName: z.string().trim().max(100).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(6, "Укажите телефон")
    .max(32)
    .regex(/^[+\d\s()\-]+$/, "Неверный формат телефона"),
  email: z
    .string()
    .trim()
    .max(200)
    .email("Неверный формат e-mail")
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  inn: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  deliveryMethods: z.array(z.enum(DELIVERY_METHODS)).optional(),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
