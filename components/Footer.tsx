import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { asset } from "@/lib/assets";

const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2C16.5 4.1 15.5 4 14.5 4c-2.1 0-3.5 1.3-3.5 3.6v3.2H8.3V14H11v8h2.5z" />
  </svg>
);
const Linkedin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-.95 1.8-1.95 3.7-1.95 4 0 4.7 2.6 4.7 6V21H18v-5.4c0-1.3 0-3-1.85-3S14 14 14 15.5V21h-4V9z" />
  </svg>
);
const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const Youtube = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 8.2c-.2-1.4-1.3-2.5-2.7-2.7C17 5 12 5 12 5s-5 0-7.3.5C3.3 5.7 2.2 6.8 2 8.2 1.5 10.5 1.5 12 1.5 12s0 1.5.5 3.8c.2 1.4 1.3 2.5 2.7 2.7C7 19 12 19 12 19s5 0 7.3-.5c1.4-.2 2.5-1.3 2.7-2.7.5-2.3.5-3.8.5-3.8s0-1.5-.5-3.8zM10 15V9l5 3-5 3z" />
  </svg>
);

const company = [
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  { label: "Белый импорт", href: "#" },
  { label: "Таможенное оформление", href: "#" },
  { label: "Сертификация", href: "#" },
  { label: "Международная логистика", href: "#" },
];

const supportLinks = [
  { label: "Поддержка в Китае", href: "#" },
  { label: "Поиск товаров", href: "#" },
  { label: "Переводчики", href: "#" },
  { label: "Бизнес-туры", href: "#" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

function LinkColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-base font-bold text-white">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm" style={{ color: "lab(71 -1.88 -12.6)" }}>
        {items.map((it) => (
          <li key={it.label}>
            <Link href={it.href} className="transition hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const muted = { color: "lab(71 -1.88 -12.6)" };
  return (
    <footer id="contacts" className="bg-[#022440] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <img
              src={asset("/images/logo-dolart.png")}
              alt="DOLART Global"
              width={710}
              height={740}
              className="h-20 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={muted}>
              Международная логистика, белый импорт, таможенное оформление,
              сертификация и поддержка бизнеса в Китае.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15 text-teal-500 transition hover:bg-teal-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <LinkColumn title="Компания" items={company} />
          <LinkColumn title="Услуги" items={services} />
          <LinkColumn title="Поддержка" items={supportLinks} />

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-white">Контакты</h4>
            <ul className="mt-4 space-y-3 text-sm" style={muted}>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal-500" />
                <a href="tel:+79934677703" className="transition hover:text-white">
                  +7 993 46 777 03
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal-500" />
                <a
                  href="mailto:DOLART.LLC@gmail.com"
                  className="transition hover:text-white"
                >
                  DOLART.LLC@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-4 py-5 text-xs sm:flex-row sm:px-6 lg:px-10">
          <p style={muted}>© 2024 DOLART Global. Все права защищены.</p>
          <div className="flex gap-6" style={muted}>
            <Link href="#" className="transition hover:text-white">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="transition hover:text-white">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
