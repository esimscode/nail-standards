"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BOOKING_URL =
  "https://www.fresha.com/book-now/nail-standards-j8cmu2r0/all-offer?share=true&pId=1123811";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Newsletter", href: "#newsletter" },
] as const;

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/nailstandards/" },
  { label: "TikTok", href: "https://www.tiktok.com/@nailstandards" },
  { label: "Threads", href: "https://www.threads.com/@nailstandards" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex md:p-6 sticky bg-background/80 w-full z-50 border-border border-b p-6 top-0 backdrop-blur-md items-center justify-between">
      <Link
        href="/"
        className="flex items-center hover:opacity-80 transition-opacity"
      >
        <Logo showBorder className="h-12 md:h-16" />
      </Link>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex gap-2 group text-base font-medium tracking-tight font-sans border-stone-800 border rounded-lg py-2.5 px-5 items-center">
            <Menu
              className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
              strokeWidth={1.5}
            />
          </button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="bg-stone-950/95" />
          <DialogContent
            showCloseButton={false}
            className="fixed! inset-0! translate-x-0! translate-y-0! max-w-none! w-full! h-full! rounded-none! ring-0! bg-transparent! flex! flex-col! justify-center! items-center! gap-0! p-0! data-closed:zoom-out-100! data-open:zoom-in-100!"
          >
            <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

            {/* Close button — top right */}
            <DialogClose asChild>
              <button className="absolute top-6 right-6 md:right-10 uppercase hover:bg-white hover:text-stone-950 transition-colors duration-300 flex gap-2 group text-base font-medium tracking-tight font-sans border-stone-600 border rounded-lg py-2.5 px-5 items-center text-white">
                Close
                <X
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
                  strokeWidth={1.5}
                />
              </button>
            </DialogClose>

            {/* Navigation links */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    const target = document.querySelector(link.href);
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth" });
                      }, 150);
                    }
                  }}
                  className="text-5xl md:text-7xl lg:text-8xl font-heading font-normal tracking-tight text-stone-100 hover:text-white transition-colors duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                  style={{ animationDelay: `${i * 100}ms`, animationDuration: "500ms" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Book Now CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 md:mt-16 uppercase flex items-center gap-3 text-lg md:text-xl font-sans font-medium tracking-wide text-stone-950 bg-white hover:bg-stone-200 transition-colors duration-300 rounded-lg py-4 px-8 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: "200ms", animationDuration: "500ms" }}
            >
              Book Now
              <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
            </a>

            {/* Social links */}
            <div
              className="mt-12 md:mt-16 flex items-center gap-6 md:gap-8 animate-in fade-in fill-mode-both"
              style={{ animationDelay: "350ms", animationDuration: "500ms" }}
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans tracking-widest uppercase text-stone-500 hover:text-white transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </nav>
  );
}
