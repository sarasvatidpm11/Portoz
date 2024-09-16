"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { signInAction, SignInState } from "@/lib/validation";
import { Button, Label, TextInput } from "flowbite-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Sign In"}
    </Button>
  );
}

export default function LoginForm() {
  const initialState: SignInState = {};
  const [state, formAction] = useFormState(signInAction, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>

        <TextInput id="email" name="email" type="email" placeholder="youremail@gmail.com"  />
        {state.errors?.email && (
          <p style={{ color: "red" }} className="text-xs">{state.errors.email}</p>
        )}
      </div>
      <div>
      <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" name="password" type="password"  />
        {state.errors?.password && (
          <p style={{ color: "red" }} className="text-xs">{state.errors.password}</p>
        )}
      </div>
      <SubmitButton />
      {state.message && (
        <p
          style={{
            color: state.message.includes("successful") ? "green" : "red",
          }}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
