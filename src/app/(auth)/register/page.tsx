import RegisterForm from "@/components/forms/RegisterForm";
import { Card } from "flowbite-react";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="mt-12 w-96">
        <RegisterForm />
        <div className="flex justify-center items-center">
          <p className="text-black">
            Already have an account?{" "}
            <Link href="/login">
              <span className="font-bold text-cyan-700">Sign In</span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
