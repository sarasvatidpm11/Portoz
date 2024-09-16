"use server";

import { z } from "zod";

// const invalid_type_error = "Invalid type provided for this field";
// const required_error = "This field is required";

// Custom validation function to ensure all characters in password are unique
const uniqueCharacters = (value: string) => {
  const charSet = new Set(value);
  return charSet.size === value.length;
};

// Custom regex for password to ensure it has uppercase, lowercase, number, and symbol
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

// Valid email regex with proper domain checking
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const SchemaLogin = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required" }) // Ensure it's not empty
    .refine((value) => validEmailRegex.test(value), {
      message:
        "Please provide a valid email address with '@' and a valid domain",
    }), // Validate email format using regex
  password: z
    .string()
    .min(6, { message: "Password is too short, minimum 6 characters" }) // Minimum length 6
    .refine(uniqueCharacters, { message: "All characters must be unique" }) // Ensure all characters are unique
    .refine((value) => passwordRegex.test(value), {
      message:
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
    }), // Ensure strong password using regex
});

export async function LoginUserAction(prevState: any, formData: FormData) {
  const validatedFields = SchemaLogin.safeParse({
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  return {
    ...prevState,
    data: "ok",
  };
}
