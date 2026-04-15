"use client";

import {
  CheckCircle2,
  Car,
  Wrench,
  UtensilsCrossed,
  Shirt,
  Gamepad2,
  MoreHorizontal,
  Briefcase,
  Ship,
  Globe2,
  Headphones,
  Languages,
  Boxes,
  Plane,
  Send,
} from "lucide-react";

const reasons = [
  "Легальный (белый) импорт",
  "Таможенное оформление",
  "Сертификация продукции",
  "Международная логистика и доставка",
  "Переводчики и байинг",
  "Бизнес-поездки в Китай",
];

const cargo = [
  { icon: Car, label: "Автомобили" },
  { icon: Wrench, label: "Оборудование" },
  { icon: UtensilsCrossed, label: "Продукты питания" },
  { icon: Shirt, label: "Одежда" },
  { icon: Gamepad2, label: "Игрушки" },
  { icon: MoreHorizontal, label: "И многое другое" },
];

const stats = [
  { icon: Briefcase, value: "10+", label: "Лет в логистике" },
  { icon: Ship, value: "5000+", label: "Доставленных грузов" },
  { icon: Globe2, value: "120+", label: "Стран" },
  { icon: Headphones, value: "24/7", label: "Поддержка клиентов" },
];

const support = [
  {
    icon: Languages,
    title: "Переводчики",
    text: "Профессиональный перевод и сопровождение переговоров.",
  },
  {
    icon: Boxes,
    title: "Поиск товаров",
    text: "Находим лучшие товары и проверенных поставщиков.",
  },
  {
    icon: Plane,
    title: "Бизнес-туры",
    text: "Организуем деловые поездки и посещение заводов.",
  },
];

function ConsultationForm() {
  const inputCls =
    "rounded-md bg-white px-3 py-2.5 text-sm text-field-400 placeholder-field-400 outline-none ring-1 ring-white/30 focus:ring-white";
  return (
    <div className="rounded-2xl bg-teal-500 p-6 text-white shadow-2xl sm:p-7">
      <h3 className="text-xl font-bold">Оставить заявку на консультацию</h3>
      <p className="mt-1 text-sm text-white/90">
        Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время.
      </p>

      <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3">
          <input type="text" placeholder="Имя" className={inputCls} />
          <input type="text" placeholder="Фамилия" className={inputCls} />
          <input type="tel" placeholder="Телефон" className={inputCls} />
          <input type="email" placeholder="E-mail" className={inputCls} />
          <input
            type="text"
            placeholder="Компания"
            className={`col-span-2 ${inputCls}`}
          />
          <input type="text" placeholder="Организация" className={inputCls} />
          <input type="text" placeholder="ИНН" className={inputCls} />
        </div>
        <textarea
          placeholder="Чем мы можем помочь?"
          rows={3}
          className={`w-full ${inputCls}`}
        />

        <div>
          <p className="mb-2 text-sm font-semibold text-white">
            Предпочтительный способ доставки
          </p>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-white sm:grid-cols-4">
            {["Море", "Авто", "Авиа", "Ж/Д"].map((m) => (
              <label key={m} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-teal-500" />
                {m}
              </label>
            ))}
            <label className="flex items-center gap-2 sm:col-span-4">
              <input type="checkbox" className="h-4 w-4 accent-teal-500" />
              Мультимодальный
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-btn-teal transition hover:bg-white/90"
        >
          Отправить заявку <Send className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-white/80">
          Ваши данные защищены и не передаются третьим лицам.
        </p>
      </form>
    </div>
  );
}

export default function WhyUs() {
  return (
    <div className="relative">
      {/* Block 1 — light */}
      <section className="bg-white pb-12 pt-14 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* LEFT: content columns (span 2) */}
            <div className="lg:col-span-2">
              <div className="relative grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
                {/* Why Work With Us */}
                <div>
                  <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
                    Почему работают с нами
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    DOLART Global — надёжный партнёр в области легального импорта,
                    таможни, сертификации и международной логистики. Мы также
                    оказываем поддержку в Китае, чтобы упростить ваш бизнес.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {reasons.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-2 text-sm font-medium text-ink-900"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div
                  className="hidden w-px self-stretch bg-slate-200 md:block"
                  aria-hidden
                />

                {/* Cargo We Deliver */}
                <div>
                  <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
                    Какие грузы возим
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Работаем с широким ассортиментом товаров — оптом и в розницу.
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-base">
                    {cargo.map(({ icon: Icon, label }) => (
                      <li
                        key={label}
                        className="flex items-center gap-3 font-semibold text-ink-900"
                      >
                        <Icon className="h-7 w-7 text-teal-500" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Globe placeholder — absolutely centered between columns, lower */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-40 hidden -translate-x-[102%] md:block"
                >
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-teal-500/10 ring-1 ring-teal-500/20">
                    <span className="text-[110px] leading-none">🌐</span>
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-navy-900 p-5 sm:grid-cols-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <Icon
                      className="h-10 w-10 shrink-0 text-teal-500"
                      strokeWidth={1.75}
                    />
                    <div>
                      <div className="text-2xl font-extrabold leading-none text-white">
                        {value}
                      </div>
                      <div
                        className="mt-1.5 text-xs"
                        style={{ color: "lab(71 -1.88 -12.6)" }}
                      >
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: form — desktop, overflows into block 2 */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-x-0 top-0 z-10">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2 — light blue */}
      <section id="about" className="bg-brand-50/60 pb-14 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
                  Поддержка в Китае
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Мы больше, чем просто логистика. Помогаем строить ваш бизнес
                  в Китае.
                </p>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {support.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-[0_10px_30px_-12px_rgba(15,33,77,0.12)] ring-1 ring-slate-100"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10">
                      <Icon className="h-6 w-6 text-teal-500" />
                    </div>
                    <div className="text-base font-bold text-ink-900">
                      {title}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Form on mobile/tablet */}
      <section className="bg-brand-50/60 pb-14 lg:hidden">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}
