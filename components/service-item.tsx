"use client";

import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const BOOKING_URL =
  "https://www.fresha.com/book-now/nail-standards-j8cmu2r0/all-offer?share=true&pId=1123811";

export interface ServiceDetail {
  duration: string;
  price: string;
  longDescription: string;
  image: string;
  highlights?: string[];
}

interface ServiceItemProps {
  title: string;
  description: string;
  badge?: string;
  detail?: ServiceDetail;
  className?: string;
}

export function ServiceItem({
  title,
  description,
  badge,
  detail,
  className,
}: ServiceItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        onClick={() => setOpen(true)}
        className={cn(
          "group py-8 md:py-12 border-b-2 flex justify-between items-center cursor-pointer hover:pl-6 transition-all duration-300 border-border",
          className
        )}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl md:text-6xl tracking-tight uppercase transition-colors group-hover:text-stone-600 font-heading font-normal">
              {title}
            </h3>
            {badge && (
              <span className="text-xs font-medium uppercase tracking-widest font-sans px-3 py-1 rounded-full border border-stone-400 text-stone-500 bg-stone-100 whitespace-nowrap">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xl font-normal text-stone-500 font-sans tracking-tight">
            {description}
          </p>
        </div>
        <div className="p-4 rounded-full border-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 -rotate-45 group-hover:rotate-0 shadow-sm border-border bg-stone-200">
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>
      </div>

      {detail && (
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-xl md:max-w-2xl p-0 overflow-hidden rounded-2xl md:rounded-3xl bg-background border-stone-200 gap-0"
        >
          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-stone-200">
            <Image
              src={detail.image}
              alt={title}
              fill
              className="object-cover"
            />
            {badge && (
              <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-widest font-sans px-3 py-1.5 rounded-full border border-white/30 text-white bg-black/40 backdrop-blur-sm">
                {badge}
              </span>
            )}
            {/* Custom close button overlaying image */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <DialogTitle className="text-3xl md:text-4xl tracking-tight uppercase font-heading font-normal leading-tight">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-base text-stone-500 font-sans tracking-tight mt-1">
                  {description}
                </DialogDescription>
              </div>
              <div className="text-right shrink-0">
                <span className="text-2xl md:text-3xl font-heading tracking-tight">
                  {detail.price}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-stone-200" />

            {/* Details row */}
            <div className="flex items-center gap-6 text-stone-500 font-sans text-sm tracking-tight">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
                <span>{detail.duration}</span>
              </div>
            </div>

            {/* Long description */}
            <p className="text-base md:text-lg text-stone-600 font-sans leading-relaxed tracking-tight">
              {detail.longDescription}
            </p>

            {/* Highlights */}
            {detail.highlights && detail.highlights.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {detail.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs font-medium uppercase tracking-widest font-sans px-3 py-1.5 rounded-full border border-stone-300 text-stone-500 bg-stone-100"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase transition-colors self-start flex hover:bg-primary/80 text-base font-medium text-primary-foreground tracking-wide font-sans bg-primary border-border border rounded-lg mt-1 py-3.5 px-8 gap-2.5 items-center"
            >
              Book Now
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
