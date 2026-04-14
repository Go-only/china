import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    slug: "white-import",
    icon: "📦",
    title: "White Import",
    text: "We work strictly within the legal framework, ensuring safe and transparent deliveries.",
  },
  {
    slug: "customs-clearance",
    icon: "🛃",
    title: "Customs Clearance",
    text: "We handle all customs procedures quickly and efficiently.",
  },
  {
    slug: "certification",
    icon: "📜",
    title: "Certification",
    text: "We help you obtain all necessary certificates for your goods.",
  },
  {
    slug: "global-logistics",
    icon: "🌐",
    title: "Global Logistics",
    text: "Sea, air, road, rail, and multimodal transportation worldwide.",
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.slug}
              href={`/services/${f.slug}#content`}
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
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
