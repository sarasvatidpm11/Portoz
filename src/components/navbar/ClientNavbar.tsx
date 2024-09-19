"use client";

import { usePathname } from "next/navigation";
import { Navigationbar } from "./Navigationbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  const hideNavbarPaths = ["/login", "/register"];

  const shouldHideNavbar = hideNavbarPaths.includes(pathname);

  return !shouldHideNavbar ? <Navigationbar /> : null;
}
