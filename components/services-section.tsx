import { Sparkles } from "lucide-react";
import { ServiceItem, type ServiceDetail } from "@/components/service-item";
import Image from "next/image";

const services: {
  title: string;
  description: string;
  badge?: string;
  detail: ServiceDetail;
}[] = [
    {
      title: "Russian Manicure",
      description: "Short, Medium & Long Nails",
      detail: {
        duration: "2 – 2.5 hours",
        price: "from $95",
        image: "/images/russian-mauve-closeup.webp",
        longDescription:
          "Our signature Russian manicure uses precise e-file techniques for meticulous cuticle work that promotes healthy, long-term nail growth. Each session includes nail shaping, cuticle care, and your choice of gel polish or structured gel overlay for lasting strength and shine.",
        highlights: ["E-file cuticle care", "Gel polish", "Structured overlay", "Nail shaping"],
      },
    },
    {
      title: "Smart Pedicure",
      description: "Dry Pedicure",
      badge: "Coming Soon",
      detail: {
        duration: "2 hours",
        price: "$80",
        image: "/images/smart-pedicure.webp",
        longDescription:
          "A waterless pedicure using professional-grade tools for precise callus removal and cuticle care. The dry technique allows for more accurate work and longer-lasting results, finished with a luxurious moisturizing treatment and your choice of polish.",
        highlights: ["Waterless technique", "Callus treatment", "Cuticle care", "Polish finish"],
      },
    },
    {
      title: "Nail Art",
      description: "French Tip, Chrome & Cat Eye",
      detail: {
        duration: "Varies by design",
        price: "Add-on",
        image: "/images/russian-mauve-1.webp",
        longDescription:
          "Elevate your manicure with custom nail art designed to match your personal style. From classic French tips to trending chrome and mesmerizing cat eye effects — each design is hand-crafted with precision and premium materials.",
        highlights: ["French tip", "Chrome finish", "Cat eye", "Custom designs"],
      },
    },
  ];

export function ServicesSection() {
  return (
    <section className="p-6 md:p-10 my-10 md:my-20">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12 lg:sticky lg:top-32">
          <div className="flex items-center gap-4 text-stone-400">
            <Sparkles className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-base font-medium tracking-widest uppercase font-sans">
              Treatment Menu
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-[7rem] tracking-tighter uppercase leading-[0.85] wrap-break-word font-heading font-normal">
            Our
            <br />
            Services
          </h2>

          <div className="w-full aspect-4/5 md:aspect-3/2 lg:aspect-4/5 rounded-2xl overflow-hidden bg-stone-200">
            <Image
              src="/images/nail-services.webp"
              className="transition-all duration-700 w-full h-full object-cover"
              alt="Nail care treatment"
              width={1920}
              height={1280}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col border-t-2 mt-8 lg:mt-0 border-stone-800">
          {services.map((service) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              description={service.description}
              badge={service.badge}
              detail={service.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
