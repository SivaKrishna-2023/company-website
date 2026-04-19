// src/validation/contactValidation.js
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be 80 characters or fewer")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name may only contain letters, spaces, hyphens, or apostrophes"),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(
      /^\+?[0-9\s\-()]{7,15}$/,
      "Enter a valid mobile number (7–15 digits)"
    ),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be 1000 characters or fewer"),
});


export const contactInitialValues = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};
