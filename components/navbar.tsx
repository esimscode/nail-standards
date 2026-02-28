"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

export function Navbar() {
  return (
    <nav className="flex md:p-6 sticky bg-background/80 w-full z-50 border-border border-b p-6 top-0 backdrop-blur-md items-center justify-between">
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <Logo showBorder className="h-12 md:h-16" />
      </Link>
      <button className="uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex gap-2 group text-base font-medium tracking-tight font-sans border-stone-800 border rounded-lg py-2.5 px-5 items-center">
        Menu
        <Menu
          className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
          strokeWidth={1.5}
        />
      </button>
    </nav>
  );
}
