"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { ZodErrors } from "../../ZodErrors";
import { useFormState } from "react-dom";
import { LoginUserAction } from "../../Validation";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

export function LoginCard() {
  const [formState, formAction] = useFormState(LoginUserAction, INITIAL_STATE);

  return (
    <Card className="w-96">
      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="Enter your email" />
          <ZodErrors error={formState?.zodErrors?.email} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Enter your password"
          />
          <ZodErrors error={formState?.zodErrors?.password} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
