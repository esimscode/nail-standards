"use client";

import { useActionState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { subscribe, type SubscribeState } from "@/app/actions/subscribe";

export function ContactSection() {
  const [state, formAction, isPending] = useActionState<
    SubscribeState,
    FormData
  >(subscribe, null);

  return (
    <section className="p-6 md:p-10 my-20 rounded-[2rem] mx-6 md:mx-10 shadow-xl border shadow-stone-200/50 border-stone-100 bg-stone-200">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 md:p-10 p-6 items-start">
        {/* Title */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <span className="text-sm font-medium tracking-widest uppercase font-sans">
              Stay in the loop
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span className="text-sm font-medium tracking-widest uppercase font-sans">
              Newsletter
            </span>
          </div>
          <h2 className="capitalize leading-[0.9] md:text-7xl lg:text-6xl text-5xl font-normal tracking-tight font-heading">
            Never Miss
            <br />
            An Opening
          </h2>
          <p className="text-xl md:text-2xl max-w-md mt-4 text-stone-500 font-heading font-normal tracking-tight">
            Be the first to know when bookings open, plus exclusive promos and
            seasonal specials delivered to your inbox.
          </p>
        </div>

        {/* Form / Success */}
        {state?.success ? (
          <div className="flex flex-col items-center justify-center gap-6 lg:pt-16 pt-4 animate-in fade-in duration-500">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
              <Check className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-heading tracking-tight text-stone-800">
              {state.message}
            </p>
            <p className="text-stone-500 font-sans text-sm tracking-wide">
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            action={formAction}
            className="flex flex-col gap-10 lg:pt-16 w-full pt-4"
          >
            <div className="flex flex-col relative group">
              <Label className="text-lg font-medium uppercase tracking-wide mb-2 transition-colors group-focus-within:text-black text-stone-800 font-sans">
                Full name*
              </Label>
              <input
                type="text"
                name="name"
                required
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
                name="email"
                required
                placeholder="Enter email"
                className="w-full border-0 border-b-2 py-3 text-2xl bg-transparent outline-none focus:ring-0 focus:border-black transition-colors rounded-none border-stone-200 placeholder:text-stone-400 tracking-tight"
              />
            </div>

            {state?.success === false && (
              <p className="text-red-600 text-sm font-sans -mt-4">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="uppercase transition-colors self-start flex hover:bg-stone-800 text-xl font-medium text-white tracking-wide font-sans bg-black border-stone-400 border rounded-lg mt-4 py-5 px-10 gap-3 items-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  Joining...
                  <Loader2
                    className="w-6 h-6 animate-spin"
                    strokeWidth={1.5}
                  />
                </>
              ) : (
                "Join the List"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
