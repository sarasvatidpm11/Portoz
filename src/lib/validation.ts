"use server";

import { z } from "zod";

// Custom regex for password to ensure it has uppercase, lowercase, number, and symbol
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;

// Valid email regex with proper domain checking
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Define a schema for signin data
const signInSchema = z.object({
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

// Define the shape of the form state
export type SignInState = {
  errors?: {
    email?: string;
    password?: string;
  };
  message?: string;
};

export async function signInAction(
  prevState: SignInState,
  formData: FormData
): Promise<SignInState> {
  // Validate the form data
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If form validation fails, return errors
  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;

    // Extract only the first error per field
    const emailError = errors.email?.[0];  // Only the first error from email
    const passwordError = errors.password?.[0];  // Only the first error from password

    return {
      errors: {
        email: emailError,    // Return only one error for email
        password: passwordError, // Return only one error for password
      },
    };
  }

  // Here you would typically check the credentials against a database
  // For this example, we'll just simulate a successful sign in
  const { email, password } = validatedFields.data;
  if (email === "user@example.com" && password === "password123") {
    return {
      message: "Login successful!",
    };
  } else {
    return {
      message: "Invalid credentials",
    };
  }
}
