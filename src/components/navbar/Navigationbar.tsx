import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Navigationbar() {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded className="fixed top-0 z-10 w-full p-3 shadow-md">
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-700 dark:text-white">
          PortoZ
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active={pathname === "/"}>
          Home
        </NavbarLink>
        <NavbarLink href="/about" active={pathname === "/about"}>
          About
        </NavbarLink>
        <NavbarLink href="/services" active={pathname === "/services"}>
          Services
        </NavbarLink>
        <NavbarLink href="/contact" active={pathname === "/contact"}>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
