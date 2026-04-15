"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Mail, X } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Решения", href: "#solutions" },
  { label: "Поддержка", href: "#support" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-4 py-5 sm:px-8 lg:px-14 xl:px-20">
        <Link href="#home" aria-label="DOLART Global" className="flex h-[70px] w-[70px] shrink-0 items-center justify-center">
          <img
            src="./images/logo-dolart.jpg"
            alt="DOLART Global"
            width={682}
            height={770}
            className="h-full w-full object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-accent-400"
            >
              {item.label}
            </Link>
          ))}
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
        <div className="fixed inset-0 z-50 bg-brand-900/95 backdrop-blur-sm lg:hidden">
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-base font-medium text-white transition hover:text-accent-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4 px-4 text-white sm:px-8">
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
