"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { signUpAction, SignUpState } from "@/lib/validation";
import { Button, Label, TextInput } from "flowbite-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Sign Up"}
    </Button>
  );
}

export default function RegisterForm() {
  const initialState: SignUpState = {};
  const [state, formAction] = useFormState(signUpAction, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <div className="block">
          <Label htmlFor="fullname" value="Fullname" />
        </div>

        <TextInput
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Enter your fullname"
        />
        {state.errors?.fullname && (
          <p style={{ color: "red" }} className="text-xs">
            {state.errors.fullname}
          </p>
        )}
      </div>
      <div>
        <div className="block">
          <Label htmlFor="email" value="Email" />
        </div>

        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="youremail@gmail.com"
        />
        {state.errors?.email && (
          <p style={{ color: "red" }} className="text-xs">
            {state.errors.email}
          </p>
        )}
      </div>
      <div>
        <div className="block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {state.errors?.password && (
          <p style={{ color: "red" }} className="text-xs">
            {state.errors.password}
          </p>
        )}
      </div>
      <div>
        <div className="block">
          <Label htmlFor="confirmPassword" value="Confirm password" />
        </div>
        <TextInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
        {state.errors?.confirmPassword && (
          <p style={{ color: "red" }} className="text-xs">
            {state.errors.confirmPassword}
          </p>
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
