"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { signInSchema, SignInFormFields } from "@/lib/form/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormFields>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  // console.log(isSubmitting)

  return (
    <div className="z-0 flex w-full items-center justify-center">
      <Card className="md:w-[400px] lg:mt-12 xl:w-96">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
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
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
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

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Sign In"}
          </Button>
        </form>
        <div className="flex items-center justify-center">
          <p className="text-black">
            Don't have an account yet?{" "}
            <Link href="/register" className="font-bold text-cyan-700">
              Sign Up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
