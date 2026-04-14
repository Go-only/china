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
  "Legal (white) import",
  "Customs clearance",
  "Certification of products",
  "Global logistics and delivery",
  "Translators and sourcing",
  "Business trips to China",
];

const cargo = [
  { icon: Car, label: "Cars" },
  { icon: Wrench, label: "Equipment" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: Shirt, label: "Clothing" },
  { icon: Gamepad2, label: "Toys" },
  { icon: MoreHorizontal, label: "And much more" },
];

const stats = [
  { icon: Briefcase, value: "10+", label: "Years in Logistics" },
  { icon: Ship, value: "5000+", label: "Delivered Shipments" },
  { icon: Globe2, value: "120+", label: "Countries" },
  { icon: Headphones, value: "24/7", label: "Customer Support" },
];

const support = [
  {
    icon: Languages,
    title: "Translators",
    text: "Professional translation and negotiation support.",
  },
  {
    icon: Boxes,
    title: "Product Sourcing",
    text: "We find the best products and verified suppliers.",
  },
  {
    icon: Plane,
    title: "Business Trips",
    text: "We organize business tours and factory visits.",
  },
];

function ConsultationForm() {
  const inputCls =
    "rounded-md bg-white px-3 py-2.5 text-sm text-field-400 placeholder-field-400 outline-none ring-1 ring-white/30 focus:ring-white";
  return (
    <div className="rounded-2xl bg-teal-500 p-6 text-white shadow-2xl sm:p-7">
      <h3 className="text-xl font-bold">Request a Consultation</h3>
      <p className="mt-1 text-sm text-white/90">
        Leave a request, and our manager will contact you shortly.
      </p>

      <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3">
          <input type="text" placeholder="First Name" className={inputCls} />
          <input type="text" placeholder="Last Name" className={inputCls} />
          <input type="tel" placeholder="Phone" className={inputCls} />
          <input type="email" placeholder="Email" className={inputCls} />
          <input
            type="text"
            placeholder="Company"
            className={`col-span-2 ${inputCls}`}
          />
          <input type="text" placeholder="Organization" className={inputCls} />
          <input type="text" placeholder="INN (Tax ID)" className={inputCls} />
        </div>
        <textarea
          placeholder="How can we help you?"
          rows={3}
          className={`w-full ${inputCls}`}
        />

        <div>
          <p className="mb-2 text-sm font-semibold text-white">
            Preferred delivery method
          </p>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-white sm:grid-cols-4">
            {["Sea", "Road", "Air", "Rail"].map((m) => (
              <label key={m} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-teal-500" />
                {m}
              </label>
            ))}
            <label className="flex items-center gap-2 sm:col-span-4">
              <input type="checkbox" className="h-4 w-4 accent-teal-500" />
              Multimodal
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-btn-teal transition hover:bg-white/90"
        >
          Send Request <Send className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-white/80">
          Your data is protected and will not be shared.
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
                    Why Work With Us
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    DOLART Global is your reliable partner for legal import,
                    customs, certification, and global logistics. We also provide
                    support in China to make your business easier.
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
                    Cargo We Deliver
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    We handle a wide range of goods, both wholesale and retail.
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
                  Support in China
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  We are more than just logistics. We help you build your business
                  in China.
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
