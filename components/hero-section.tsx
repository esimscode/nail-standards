import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="md:p-10 p-6">
      <div className="relative w-full h-[75vh] min-h-[600px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-8 md:p-12 text-white shadow-2xl shadow-black/5 bg-stone-900">
        {/* Background Image */}
        <Image
          src="/images/nailstandards-hero-img.webp"
          className="hover:scale-100 transition-transform duration-[2s] ease-out sepia-[.5] opacity-40 blur-xs w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-105"
          alt="Minimalist nail art"
          width={1920}
          height={1280}
        />

        {/* Top elements */}
        <div className="relative z-10 flex justify-between items-start w-full">
          <span className="text-sm md:text-base font-medium tracking-widest uppercase py-1 px-3 border border-white/30 rounded-full backdrop-blur-sm font-sans">
            Est. 2023
          </span>
          <Link
            href="https://www.fresha.com/book-now/nail-standards-j8cmu2r0/all-offer?share=true&pId=1123811"
            className="hidden md:flex items-center gap-2 transition-colors hover:text-stone-300 hover:border-stone-300 text-lg font-medium tracking-tight font-sans border-border border-b pb-1"
          >
            Book an Appointment{" "}
            <ArrowUpRight className="w-5 h-5" strokeWidth={1} />
          </Link>
        </div>

        {/* Middle Content */}
        <div className="relative z-10 flex flex-col gap-6 max-w-xl mt-auto mb-10 md:mb-16">
          <p className="text-xl md:text-3xl leading-relaxed text-stone-200 font-heading font-normal tracking-tight">
            Your elevated nail experience begins here. Welcome to the new
            standard in nail care.
          </p>
          <a
            href="https://www.fresha.com/a/nail-standards-russian-manicure-specialist-in-lakeway-tx-lakeway-1017-rm-620-k0yy1st4?pId=1123811"
            className="md:hidden w-max flex items-center gap-2 text-xl font-medium border-b border-white pb-1 font-sans tracking-tight"
          >
            Book an Appointment
          </a>
        </div>

        {/* Massive Hero Title */}
        <h1 className="z-10 text-[15vw] leading-[0.8] uppercase font-normal tracking-tighter font-heading relative drop-shadow-lg">
          Nail
          <br />
          Studio
        </h1>
      </div>
    </section>
  );
}
