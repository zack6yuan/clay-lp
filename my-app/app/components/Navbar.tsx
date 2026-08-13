"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative mx-auto w-full max-w-7xl rounded-full bg-[#FFFDF8] py-3 pr-3 pl-5 text-black shadow-gray-300/80 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-linear-to-r from-red-500 to-orange-400" />
          <span className="text-2xl font-bold">Lorem</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex gap-8 font-medium text-gray-500">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 font-medium">
            <Link
              href="/sign-in"
              className="text-gray-500 transition-colors hover:text-black"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="rounded-full bg-black px-5 py-2 text-white"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full p-2 md:hidden"
        >
          {open ? (
            <X size={20} strokeWidth={3} />
          ) : (
            <Menu size={20} strokeWidth={3} />
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="absolute top-full right-0 left-0 mt-2 rounded-3xl bg-white p-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 font-medium text-gray-500">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3 font-medium">
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="text-gray-500"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="rounded-full bg-black px-5 py-2 text-center text-white"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}