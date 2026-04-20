import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    slug: "white-import",
    icon: "📦",
    title: "Белый импорт",
    text: "Работаем строго в правовом поле, обеспечивая безопасные и прозрачные поставки.",
  },
  {
    slug: "customs-clearance",
    icon: "🛃",
    title: "Таможенное оформление",
    text: "Быстро и эффективно проходим все таможенные процедуры.",
  },
  {
    slug: "certification",
    icon: "📜",
    title: "Сертификация",
    text: "Помогаем получить все необходимые сертификаты на товары.",
  },
  {
    slug: "global-logistics",
    icon: "🌐",
    title: "Международная логистика",
    text: "Морские, авиа, авто, ж/д и мультимодальные перевозки по всему миру.",
  },
  {
    slug: "cargo-insurance",
    icon: "🛡️",
    title: "Страховка груза",
    text: "Защищаем ваш груз на всём маршруте — от склада поставщика до вашего офиса.",
  },
];

export default function Features() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f) => (
            <Link
              key={f.slug}
              href={`/${f.slug}/#content`}
              className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-[0_10px_30px_-12px_rgba(15,33,77,0.15)] ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(15,33,77,0.25)]"
            >
              <div className="mb-4 flex items-center justify-center text-6xl leading-none">
                <span aria-hidden>{f.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-700">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.text}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent-500 transition group-hover:gap-2 group-hover:text-accent-600">
                Подробнее <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
