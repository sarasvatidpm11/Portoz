"use client";

import Transition from "@/components/auth/Transition";
import { usePathname } from "next/navigation";

export default function AuthLayout({ isLogin }: { isLogin: boolean }) {
  const pathname = usePathname();
  const currentIsLogin = pathname.includes("login");

  return <Transition isLogin={currentIsLogin} />;
}
