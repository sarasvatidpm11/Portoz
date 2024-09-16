import { Card } from "flowbite-react";
import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="mt-12 w-96">
        <LoginForm />
        <div className="flex justify-center items-center">
          <p className="text-black">
            Don't have an account yet?{" "}
            <Link href="/register">
              <span className="font-bold text-cyan-700">Sign Up</span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
