import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="mt-32 px-6 md:px-10 py-12 border-t-2 flex flex-col md:flex-row justify-between items-center gap-10 border-border bg-stone-200">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Logo className="h-10 md:h-12" />
      </Link>
      <div className="flex gap-8 text-xl font-normal tracking-tight">
        <a href="https://www.instagram.com/nailstandards/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-500 font-sans">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@nailstandards" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-500 font-sans">
          TikTok
        </a>
        <a href="https://www.threads.com/@nailstandards" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-stone-500 font-sans">
          Threads
        </a>
      </div>
      <div className="flex flex-col items-center md:items-end gap-2 text-lg font-normal text-stone-500 font-sans tracking-tight">
        <address className="not-italic text-base">
          1017 RM 620, Suite 108, Lakeway, TX 78734
        </address>
        <a href="tel:+15125024921" className="text-base hover:text-stone-700 transition-colors">
          (512) 502-4921
        </a>
        <span>© {new Date().getFullYear()} Nail Standards. All rights reserved.</span>
      </div>
    </footer>
  );
}
