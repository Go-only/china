"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Mail, X, ChevronDown } from "lucide-react";
import { asset } from "@/lib/assets";

const primaryNav = [
  { label: "О компании", href: "/about/#content" },
  { label: "Документы", href: "/documents/#content" },
  { label: "Контакты", href: "/contacts/#content" },
  { label: "Запрещённый груз", href: "/prohibited-cargo/#content" },
  { label: "Сертификация", href: "/certification/#content" },
  { label: "Поиск поставщика", href: "/supplier-search/#content" },
];

const moreNav = [
  { label: "Способы доставки", href: "/delivery-methods/#content" },
  { label: "Таможня", href: "/customs/#content" },
  { label: "Поддержка в Китае", href: "/china-support/#content" },
  { label: "Какие грузы возим", href: "/cargo-types/#content" },
  { label: "Этапы работы", href: "/work-stages/#content" },
  { label: "FAQ", href: "/faq/#content" },
  { label: "Блог", href: "/blog/#content" },
  { label: "Страховка груза", href: "/cargo-insurance/#content" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  return (
    <header className={`${scrolled ? "fixed" : "absolute"} inset-x-0 top-0 z-50`}>
      <div className="flex items-center justify-between bg-brand-900/50 px-4 py-5 sm:px-8 lg:px-14 xl:px-20">
        <Link href="/#home" aria-label="DOLART Global" className="flex h-[70px] w-[70px] shrink-0 items-center justify-center">
          <img
            src={asset("/images/logo-dolart.png")}
            alt="DOLART Global"
            width={710}
            height={740}
            className="h-full w-full object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-accent-400"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={moreOpen}
              className="flex items-center gap-1 transition-colors hover:text-accent-400"
            >
              Смотреть далее
              <ChevronDown
                className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-3 w-60 overflow-hidden rounded-lg border border-white/10 bg-brand-900/95 shadow-xl backdrop-blur">
                {moreNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-5 text-white lg:flex">
          <a href="tel:+79934677703" className="flex items-center gap-3 transition hover:text-accent-400">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">+7 993 46 777 03</span>
              <span className="block text-xs text-white/80">Поддержка 24/7</span>
            </span>
          </a>
          <a href="mailto:DOLART.LLC@gmail.com" className="flex items-center gap-3 transition hover:text-accent-400">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
              <Mail className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">DOLART.LLC@gmail.com</span>
              <span className="block text-xs text-white/80">Корпоративная почта</span>
            </span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center gap-3 lg:hidden">
          <a
            href="tel:+79934677703"
            aria-label="+7 993 46 777 03"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:text-accent-400"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="mailto:DOLART.LLC@gmail.com"
            aria-label="DOLART.LLC@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:text-accent-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-white/30 text-white lg:hidden"
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-900/95 backdrop-blur-sm lg:hidden">
          <div className="flex items-center justify-between px-4 py-5 sm:px-8">
            <span className="text-lg font-semibold text-white">Меню</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white"
              aria-label="Закрыть меню"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4 sm:px-8">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-base font-medium text-white transition hover:text-accent-400"
              >
                {item.label}
              </Link>
            ))}
            <details className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-base font-medium text-white transition hover:text-accent-400">
                <span>Смотреть далее</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col gap-1 pb-2">
                {moreNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 pl-4 text-base text-white/90 transition hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </nav>
          <div className="mt-6 flex flex-col gap-4 px-4 pb-8 text-white sm:px-8">
            <a href="tel:+79934677703" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold">+7 993 46 777 03</span>
                <span className="block text-xs text-white/80">Поддержка 24/7</span>
              </span>
            </a>
            <a href="mailto:DOLART.LLC@gmail.com" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                <Mail className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold">DOLART.LLC@gmail.com</span>
                <span className="block text-xs text-white/80">Корпоративная почта</span>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
