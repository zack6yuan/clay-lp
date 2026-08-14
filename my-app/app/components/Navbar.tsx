"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="relative mx-auto max-w-7xl rounded-full bg-[#FFFDF8] py-3 px-4 md:pr-3 md:pl-5 text-black shadow-gray-300 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-5 h-5 from-red-500 to-orange-400 rounded-full bg-linear-to-r" />
          <span className="text-2xl font-bold">Lorem</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden gap-10 items-center md:flex">
          <ul className="flex gap-8 font-medium text-gray-500">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 items-center font-medium">
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-black"
            >
              Sign in
            </a>
            <a
              href="#"
              className="px-5 py-2 text-white bg-black rounded-full"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-2 rounded-full md:hidden"
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
        <div className="absolute right-0 left-0 top-full p-5 mt-2 bg-white rounded-3xl shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 font-medium text-gray-500">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-5 font-medium">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="text-gray-500"
            >
              Sign in
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="px-5 py-2 text-center text-white bg-black rounded-full"
            >
              Get started
            </a>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}