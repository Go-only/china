import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { asset } from "@/lib/assets";

const company = [
  { label: "О компании", href: "/about/#content" },
  { label: "Документы", href: "/documents/#content" },
  { label: "Контакты", href: "/contacts/#content" },
  { label: "Блог", href: "/blog/#content" },
];

const services = [
  { label: "Белый импорт", href: "/white-import/#content" },
  { label: "Таможенное оформление", href: "/customs-clearance/#content" },
  { label: "Таможня", href: "/customs/#content" },
  { label: "Сертификация", href: "/certification/#content" },
  { label: "Способы доставки", href: "/delivery-methods/#content" },
  { label: "Международная логистика", href: "/global-logistics/#content" },
  { label: "Страховка груза", href: "/cargo-insurance/#content" },
  { label: "Перевод средств в Китай", href: "/money-transfer/#content" },
];

const supportLinks = [
  { label: "Поддержка в Китае", href: "/china-support/#content" },
  { label: "Поиск поставщика", href: "/supplier-search/#content" },
  { label: "Какие грузы возим", href: "/cargo-types/#content" },
  { label: "Этапы работы", href: "/work-stages/#content" },
  { label: "Запрещённый груз", href: "/prohibited-cargo/#content" },
  { label: "Ответы на частые вопросы", href: "/faq/#content" },
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
              width={535}
              height={467}
              className="h-20 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={muted}>
              Международная логистика, белый импорт, таможенное оформление,
              сертификация и поддержка бизнеса в Китае.
            </p>
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
