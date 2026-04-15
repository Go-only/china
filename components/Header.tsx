import Link from "next/link";
import { Phone } from "lucide-react";

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
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-between px-4 py-5 sm:px-8 lg:px-14 xl:px-20">
        <Link
          href="#home"
          aria-label="DOLART Global"
          className="flex h-12 w-[200px] items-center justify-center rounded-md bg-fuchsia-500/70 text-xs font-semibold uppercase tracking-widest text-white"
        >
          logo 200×48
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

        <a
          href="tel:+12345678910"
          className="hidden items-center gap-3 text-white sm:flex"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
            <Phone className="h-4 w-4" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">
              +1 (234) 567 89 10
            </span>
            <span className="block text-xs text-white/80">Поддержка 24/7</span>
          </span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-white/30 text-white lg:hidden"
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </div>
    </header>
  );
}
