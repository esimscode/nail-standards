import Link from "next/link";
import { Logo } from "@/components/logo";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/nailstandards/" },
  { label: "TikTok", href: "https://www.tiktok.com/@nailstandards" },
  { label: "Threads", href: "https://www.threads.com/@nailstandards" },
] as const;

const hours = [
  { days: "Wed – Thu", time: "10 AM – 7 PM" },
  { days: "Friday", time: "10 AM – 6 PM" },
  { days: "Saturday", time: "9 AM – 5 PM" },
  { days: "Sunday", time: "10 AM – 3 PM" },
] as const;

export function Footer() {
  return (
    <footer className="mt-32 bg-stone-950 text-stone-300">
      {/* Top accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-stone-600 to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Brand statement */}
        <div className="py-16 md:py-24 border-b border-stone-800/60">
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-stone-100 leading-[1.1] max-w-3xl">
            Your elevated nail experience
            <span className="text-stone-500"> begins here.</span>
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 py-16 md:py-20">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="group inline-block self-start">
              <Logo
                variant="light"
                className="h-9 transition-opacity group-hover:opacity-70"
              />
            </Link>
            <p className="text-sm leading-relaxed text-stone-500 max-w-[22ch] font-sans">
              Russian manicure specialist in Lakeway, Texas.
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-stone-500">
              Studio Hours
            </h3>
            <dl className="flex flex-col gap-2.5">
              {hours.map(({ days, time }) => (
                <div key={days} className="flex justify-between gap-4 max-w-[220px]">
                  <dt className="text-sm font-sans text-stone-400">{days}</dt>
                  <dd className="text-sm font-sans text-stone-300 tabular-nums">
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-stone-500">
              Visit Us
            </h3>
            <div className="flex flex-col gap-3">
              <address className="not-italic text-sm font-sans leading-relaxed text-stone-400">
                1017 RM 620, Suite 108
                <br />
                Lakeway, TX 78734
              </address>
              <a
                href="tel:+15125024921"
                className="text-sm font-sans text-stone-300 hover:text-white transition-colors w-fit"
              >
                (512) 502-4921
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-stone-500">
              Follow Along
            </h3>
            <nav className="flex flex-col gap-2.5">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm font-sans text-stone-400 hover:text-white transition-colors w-fit"
                >
                  <span className="inline-block w-4 h-px bg-stone-700 transition-all group-hover:w-6 group-hover:bg-white" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 border-t border-stone-800/60">
          <span className="text-xs font-sans text-stone-600 tracking-wide">
            &copy; {new Date().getFullYear()} Nail Standards. All rights
            reserved.
          </span>
          <a
            href="https://www.fresha.com/a/nail-standards-lakeway-1017-ranch-road-620-s-cqv3hpnp/all-offer?pId=1114939"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-[0.15em] uppercase text-stone-500 hover:text-white transition-colors"
          >
            Book an Appointment &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
