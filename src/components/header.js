"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";
export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/dashboard">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Coffee Valley
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/dashboard" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/dashboard/catalogue">
          Catalogue
        </Navbar.Link>
        <Navbar.Link href="/dashboard/distributors">Distributors</Navbar.Link>
        <Navbar.Link href="#">Upload</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
