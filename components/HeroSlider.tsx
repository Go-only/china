"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, UserCheck } from "lucide-react";
import { asset } from "@/lib/assets";

type Slide = {
  badge: string;
  title: string;
  subtitle: string;
  image?: string;
  gradient: string;
};

const slides: Slide[] = [
  {
    badge: "ВАШ ЛОГИСТИЧЕСКИЙ ПАРТНЁР",
    title: "Доставляем грузы туда,\nкуда нужно вам",
    subtitle:
      "Белый импорт, таможенное оформление, сертификация\nи логистика по всему миру.",
    image: asset("/images/home/sl1.jpg"),
    gradient: "linear-gradient(135deg, #0f214d 0%, #1b3a8a 40%, #2451b5 100%)",
  },
  {
    badge: "МОРЕ · АВИА · АВТО · Ж/Д",
    title: "Мультимодальные перевозки\nиз Китая в Россию",
    subtitle:
      "Быстрая доставка, прозрачное отслеживание\nи выгодные ставки на каждом маршруте.",
    image: asset("/images/home/sl2.jpg"),
    gradient: "linear-gradient(135deg, #0b1a3a 0%, #153e7a 40%, #1d6fb5 100%)",
  },
  {
    badge: "ПОЛНОЕ ТАМОЖЕННОЕ СОПРОВОЖДЕНИЕ",
    title: "Оформление, сертификация\nи белый импорт",
    subtitle:
      "Берём на себя документы, налоги и сертификаты —\nвы получаете груз вовремя.",
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
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat transition-[background] duration-700"
          style={
            slide.image
              ? { backgroundImage: `url(${slide.image})` }
              : { backgroundImage: slide.gradient }
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-900/60 via-transparent to-transparent sm:from-brand-900/40" />

        {!slide.image && (
          <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none text-[180px] font-extrabold leading-none text-white/25 sm:right-12 sm:text-[260px] lg:right-20 lg:text-[340px]">
            {index + 1}
          </div>
        )}

        <div className="pointer-events-none relative mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-4 pt-32 pb-32 sm:min-h-[680px] sm:px-6 lg:min-h-[720px] lg:px-10">
          <div className="max-w-2xl text-white">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-brand-200 [text-shadow:_0_2px_12px_rgba(0,0,0,0.8),_0_1px_3px_rgba(0,0,0,0.7)]">
              <span className="flex h-2 w-2 rounded-full bg-accent-500" />
              {slide.badge}
            </div>
            <h1 className="whitespace-pre-line text-4xl font-extrabold leading-tight [text-shadow:_0_3px_18px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.9)] sm:text-5xl sm:[text-shadow:none] lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 whitespace-pre-line text-base font-medium text-white [text-shadow:_0_2px_16px_rgba(0,0,0,1),_0_1px_4px_rgba(0,0,0,1),_0_0_2px_rgba(0,0,0,0.9)] sm:text-lg sm:font-normal sm:text-white/85 sm:[text-shadow:none]">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://t.me/DOLART_NORA_LI"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Связаться с менеджером <UserCheck className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Предыдущий слайд"
          style={{ zIndex: 40, pointerEvents: "auto" }}
          className="absolute left-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition hover:bg-white/20 active:scale-95 sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Следующий слайд"
          style={{ zIndex: 40, pointerEvents: "auto" }}
          className="absolute right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition hover:bg-white/20 active:scale-95 sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          className="absolute bottom-[60px] left-1/2 flex -translate-x-1/2 items-center gap-4 sm:bottom-[97px] sm:gap-2"
          style={{ zIndex: 40, pointerEvents: "auto" }}
        >
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Предыдущий слайд"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition hover:bg-white/20 active:scale-95 sm:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Перейти к слайду ${i + 1}`}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Следующий слайд"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition hover:bg-white/20 active:scale-95 sm:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 block h-[36px] w-full sm:h-[80px] lg:h-[140px]"
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
