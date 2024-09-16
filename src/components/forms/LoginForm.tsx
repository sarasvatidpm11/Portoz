"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { signInSchema, SignInFormFields } from "@/lib/form/validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormFields>({
    resolver: zodResolver(signInSchema)
  });

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  // console.log(isSubmitting)

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        <div className="mb-2 block">
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
          <p style={{ color: "red" }} className="text-xs">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Sign In"}</Button>
    </form>
  );
}

