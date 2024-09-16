import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Navigationbar() {
  return (
    <Navbar fluid rounded className="fixed z-10 w-full top-0 shadow-md p-3">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="text-gray-700 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PortoZ
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
