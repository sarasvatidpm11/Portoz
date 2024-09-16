import { z } from "zod";

// Custom regex for password to ensure it has uppercase, lowercase, number, and symbol
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

// Valid email regex with proper domain checking
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Define a schema for signin data
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(validEmailRegex, "Invalid Email Format")
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      passwordRegex,
      "Password must include uppercase, lowercase, number, and symbol"
    ),
});

// Define a schema for signup data
export const signUpSchema = z
  .object({
    fullname: z.string().min(3, "Name must be at least 3 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .regex(validEmailRegex, "Invalid Email Format")
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        passwordRegex,
        "Password must include uppercase, lowercase, number, and symbol"
      ),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters")
      .regex(
        passwordRegex,
        "Confirm password must include uppercase, lowercase, number, and symbol"
      ),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignInFormFields = z.infer<typeof signInSchema>;
export type SignUpFormFields = z.infer<typeof signUpSchema>;
