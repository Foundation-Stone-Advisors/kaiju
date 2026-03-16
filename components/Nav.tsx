"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors ${
        scrolled ? "bg-neutral-950/90 backdrop-blur border-b border-neutral-800" : "bg-neutral-950"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold tracking-tight">
            KJ
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Kaiju
            </span>
            <span className="text-base font-semibold">Jiu-Jitsu</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  active
                    ? "text-neutral-50"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="md:hidden text-sm text-neutral-400">
          Menu
        </div>
      </nav>
    </header>
  );
}
