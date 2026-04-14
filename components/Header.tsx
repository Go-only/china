import Link from "next/link";
import { Phone, ChevronsRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Support", href: "#support" },
  { label: "Blog", href: "#blog" },
  { label: "Contacts", href: "#contacts" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-between px-4 py-5 sm:px-8 lg:px-14 xl:px-20">
        <Link href="#home" className="flex items-center gap-2 text-white">
          <span className="text-2xl font-extrabold tracking-tight">
            DOLART
          </span>
          <ChevronsRight
            className="h-6 w-6 stroke-[3] text-white"
            aria-hidden
          />
          <span className="sr-only">Global</span>
          <span className="ml-1 hidden text-[10px] font-semibold tracking-[0.3em] text-white/80 sm:block">
            GLOBAL
          </span>
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
            <span className="block text-xs text-white/80">24/7 support</span>
          </span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-white/30 text-white lg:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </div>
    </header>
  );
}
