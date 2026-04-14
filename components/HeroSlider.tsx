"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Calculator, UserCheck } from "lucide-react";

type Slide = {
  badge: string;
  title: string;
  subtitle: string;
  image?: string;
  gradient: string;
};

const slides: Slide[] = [
  {
    badge: "GLOBAL LOGISTICS PARTNER",
    title: "We Deliver Freight\nWhere You Need It",
    subtitle:
      "White import, customs clearance, certification,\nand logistics solutions worldwide.",
    gradient: "linear-gradient(135deg, #0f214d 0%, #1b3a8a 40%, #2451b5 100%)",
  },
  {
    badge: "SEA · AIR · ROAD · RAIL",
    title: "Multimodal Cargo\nFrom China to Russia",
    subtitle:
      "Fast delivery, transparent tracking,\nand competitive rates on every route.",
    gradient: "linear-gradient(135deg, #0b1a3a 0%, #153e7a 40%, #1d6fb5 100%)",
  },
  {
    badge: "FULL CUSTOMS SUPPORT",
    title: "Clearance, Certification\nand White Import",
    subtitle:
      "We handle documents, taxes and certificates —\nyou receive the goods on time.",
    gradient: "linear-gradient(135deg, #0a1f2f 0%, #124a6b 40%, #1e7aa0 100%)",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = (i: number) =>
    setIndex(((i % slides.length) + slides.length) % slides.length);

  useEffect(() => {
    const id = setTimeout(() => go(index + 1), 6000);
    return () => clearTimeout(id);
  }, [index]);

  const slide = slides[index];

  return (
    <section id="home" className="relative">
      <div className="relative min-h-[640px] w-full overflow-hidden bg-brand-800 sm:min-h-[680px] lg:min-h-[720px]">
        <div
          className="pointer-events-none absolute inset-0 transition-[background] duration-700"
          style={
            slide.image
              ? { backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }
              : { backgroundImage: slide.gradient }
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/40 to-transparent" />

        {!slide.image && (
          <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none text-[180px] font-extrabold leading-none text-white/25 sm:right-12 sm:text-[260px] lg:right-20 lg:text-[340px]">
            {index + 1}
          </div>
        )}

        <div className="pointer-events-none relative mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-4 pt-32 pb-32 sm:min-h-[680px] sm:px-6 lg:min-h-[720px] lg:px-10">
          <div className="max-w-2xl text-white">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-brand-200">
              <span className="flex h-2 w-2 rounded-full bg-accent-500" />
              {slide.badge}
            </div>
            <h1 className="whitespace-pre-line text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 whitespace-pre-line text-base text-white/85 sm:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-400"
              >
                Calculator <Calculator className="h-4 w-4" />
              </a>
              <a
                href="#contacts"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact manager <UserCheck className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          style={{ zIndex: 40, pointerEvents: "auto" }}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition hover:bg-white/20 active:scale-95 sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          style={{ zIndex: 40, pointerEvents: "auto" }}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition hover:bg-white/20 active:scale-95 sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-28"
          style={{ zIndex: 40, pointerEvents: "auto" }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 block h-[80px] w-full sm:h-[110px] lg:h-[140px]"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,0 C360,160 1080,160 1440,0 L1440,140 L0,140 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
