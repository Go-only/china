import Link from "next/link";
import { Anchor, Truck, Plane, TrainFront, Shuffle } from "lucide-react";

const items = [
  {
    slug: "sea-freight",
    icon: Anchor,
    title: "Sea Freight",
    text: "Reliable ocean shipping worldwide.",
    bg: "linear-gradient(135deg, #1e5a8a 0%, #2a87c5 100%)",
  },
  {
    slug: "road-freight",
    icon: Truck,
    title: "Road Freight",
    text: "Fast and safe delivery by truck.",
    bg: "linear-gradient(135deg, #e85d3a 0%, #f0a060 100%)",
  },
  {
    slug: "air-freight",
    icon: Plane,
    title: "Air Freight",
    text: "Express delivery by air for urgent cargo.",
    bg: "linear-gradient(135deg, #4a8fd8 0%, #8fc4f0 100%)",
  },
  {
    slug: "rail-freight",
    icon: TrainFront,
    title: "Rail Freight",
    text: "Cost-effective delivery by rail.",
    bg: "linear-gradient(135deg, #2a6fa8 0%, #f0a040 100%)",
  },
  {
    slug: "multimodal",
    icon: Shuffle,
    title: "Multimodal",
    text: "Combined solutions for optimal results.",
    bg: "linear-gradient(135deg, #3d7fbf 0%, #e67e4a 100%)",
  },
];

export default function Transportation() {
  return (
    <section id="solutions" className="bg-brand-50/60 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-700 sm:text-3xl">
            Transportation Solutions
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            We deliver your cargo by any method with maximum efficiency.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.slug}
                href={`/services/${it.slug}#content`}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(15,33,77,0.12)] ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(15,33,77,0.2)]"
              >
                <div
                  className="relative flex h-32 w-full items-center justify-center sm:h-36"
                  style={{ backgroundImage: it.bg }}
                >
                  <Icon className="h-12 w-12 text-white/90" strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-col items-center px-4 py-5 text-center">
                  <div className="flex items-center gap-2 text-base font-bold text-brand-700">
                    <Icon className="h-4 w-4" />
                    {it.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {it.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
