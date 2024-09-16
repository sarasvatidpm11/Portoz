"use client";

import { useFormStatus } from "react-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormFields, signUpSchema } from "@/lib/form/validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <div className="block">
          <Label htmlFor="fullname" value="Fullname" />
        </div>

        <TextInput
          {...register("fullname")}
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Enter your fullname"
        />
        {errors.fullname && (
          <p className="text-xs text-red-500 mt-1">{errors.fullname.message}</p>
        )}
      </div>
      <div>
        <div className="block">
          <Label htmlFor="email" value="Email" />
        </div>

        <TextInput
          {...register("email")}
          id="email"
          name="email"
          type="email"
          placeholder="youremail@gmail.com"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <div className="block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          {...register("password")}
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>
      <div>
        <div className="block">
          <Label htmlFor="confirmPassword" value="Confirm password" />
        </div>
        <TextInput
          {...register("confirmPassword")}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Sign In"}
      </Button>
    </form>
  );
}
