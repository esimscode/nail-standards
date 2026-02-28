"use client";

import { MoveRight } from "lucide-react";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  return (
    <section className="p-6 md:p-10 my-20 rounded-[2rem] mx-6 md:mx-10 shadow-xl border shadow-stone-200/50 border-stone-100 bg-stone-200">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 md:p-10 p-6 items-start">
        {/* Contact Title */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <span className="text-sm font-medium tracking-widest uppercase font-sans">
              Get in touch
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span className="text-sm font-medium tracking-widest uppercase font-sans">
              Inquiries
            </span>
          </div>
          <h2 className="capitalize leading-[0.9] md:text-7xl lg:text-6xl text-5xl font-normal tracking-tight font-heading">
            We&apos;d Love To
            <br />
            Hear From You
          </h2>
          <p className="text-xl md:text-2xl max-w-md mt-4 text-stone-500 font-heading font-normal tracking-tight">
            Have a question about a service or want to book a private event?
            Send us a note.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-10 lg:pt-16 w-full pt-4">
          <div className="flex flex-col relative group">
            <Label className="text-lg font-medium uppercase tracking-wide mb-2 transition-colors group-focus-within:text-black text-stone-800 font-sans">
              Full name*
            </Label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border-0 border-b-2 py-3 text-2xl bg-transparent outline-none focus:ring-0 focus:border-black transition-colors rounded-none border-stone-200 placeholder:text-stone-400 tracking-tight"
            />
          </div>

          <div className="flex flex-col relative group">
            <Label className="text-lg font-medium uppercase tracking-wide mb-2 transition-colors group-focus-within:text-black text-stone-800 font-sans">
              Email address*
            </Label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border-0 border-b-2 py-3 text-2xl bg-transparent outline-none focus:ring-0 focus:border-black transition-colors rounded-none border-stone-200 placeholder:text-stone-400 tracking-tight"
            />
          </div>

          <div className="flex flex-col relative group">
            <Label className="text-lg font-medium uppercase tracking-wide mb-2 transition-colors group-focus-within:text-black text-stone-800 font-sans">
              Message*
            </Label>
            <textarea
              placeholder="Say Hi!"
              rows={2}
              className="outline-none focus:ring-0 focus:border-black transition-colors resize-none placeholder:text-stone-400 text-2xl bg-transparent w-full border-stone-200 border-0 rounded-none border-b-2 py-3 tracking-tight"
            />
          </div>

          <button
            type="button"
            className="uppercase transition-colors self-start flex hover:bg-stone-800 text-xl font-medium text-white tracking-wide font-sans bg-black border-stone-400 border rounded-lg mt-4 py-5 px-10 gap-3 items-center"
          >
            Submit Inquiry{" "}
            <MoveRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </form>
      </div>
    </section>
  );
}
