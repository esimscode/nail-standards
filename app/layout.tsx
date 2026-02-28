import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

const BOOKING_URL =
  "https://www.fresha.com/book-now/nail-standards-j8cmu2r0/all-offer?share=true&pId=1123811"

export const metadata: Metadata = {
  title: "Nail Standards | Russian Manicure Specialist in Lakeway TX",
  description:
    "Private luxury nail studio in Lakeway, TX specializing in Russian manicures, dry pedicures, and natural nail care. 10+ years of experience in meticulous cuticle work, structure, and long-term nail growth.",
  keywords: [
    "Russian manicure",
    "Lakeway TX",
    "nail studio",
    "dry pedicure",
    "natural nail care",
    "luxury nail salon",
    "Lakeway nail salon",
  ],
  openGraph: {
    title: "Nail Standards | Russian Manicure Specialist in Lakeway TX",
    description:
      "Private luxury nail studio specializing in Russian manicures and natural nail care. Book your appointment today.",
    url: "https://nailstandards.com",
    siteName: "Nail Standards",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Standards | Russian Manicure Specialist in Lakeway TX",
    description:
      "Private luxury nail studio specializing in Russian manicures and natural nail care.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nailstandards.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Nail Standards",
  description:
    "Private luxury nail studio specializing in Russian manicures, dry pedicures, and natural nail care. 10+ years of experience in meticulous cuticle work, structure, and long-term nail growth.",
  url: "https://nailstandards.com",
  telephone: "+1-512-502-4921",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1017 RM 620, Suite 108",
    addressLocality: "Lakeway",
    addressRegion: "TX",
    postalCode: "78734",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3563,
    longitude: -97.9862,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "15:00",
    },
  ],
  priceRange: "$$",
  image: "https://nailstandards.com/images/nailstandards-hero-img.webp",
  sameAs: [
    "https://www.instagram.com/nailstandards/",
    "https://www.threads.com/@nailstandards",
    "https://www.tiktok.com/@nailstandards",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nail Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Russian Manicure (Short/Medium)",
          description: "Meticulous cuticle work and natural nail care",
        },
        price: "95.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Russian Manicure (Long Nails)",
          description: "Extended Russian manicure for long nails",
        },
        price: "110.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dry Pedicure",
          description: "Luxury dry pedicure treatment",
        },
        price: "80.00",
        priceCurrency: "USD",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "193",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: BOOKING_URL,
    },
    result: {
      "@type": "Reservation",
      name: "Book an Appointment",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased overflow-x-hidden text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
