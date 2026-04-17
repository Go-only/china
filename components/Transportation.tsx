import Link from "next/link";
import { Anchor, Truck, Plane, TrainFront, Shuffle } from "lucide-react";
import { asset } from "@/lib/assets";

type Item = {
  slug: string;
  icon: typeof Anchor;
  title: string;
  text: string;
  bg: string;
  image?: string;
};

const items: Item[] = [
  {
    slug: "sea-freight",
    icon: Anchor,
    title: "Морские перевозки",
    text: "Надёжные морские перевозки по всему миру.",
    bg: "linear-gradient(135deg, #1e5a8a 0%, #2a87c5 100%)",
    image: "/images/home/ship.png",
  },
  {
    slug: "road-freight",
    icon: Truck,
    title: "Автоперевозки",
    text: "Быстрая и безопасная доставка автотранспортом.",
    bg: "linear-gradient(135deg, #e85d3a 0%, #f0a060 100%)",
    image: "/images/home/truck.png",
  },
  {
    slug: "air-freight",
    icon: Plane,
    title: "Авиаперевозки",
    text: "Экспресс-доставка авиатранспортом для срочных грузов.",
    bg: "linear-gradient(135deg, #4a8fd8 0%, #8fc4f0 100%)",
    image: "/images/home/airplane.png",
  },
  {
    slug: "rail-freight",
    icon: TrainFront,
    title: "Ж/Д перевозки",
    text: "Экономичная доставка железнодорожным транспортом.",
    bg: "linear-gradient(135deg, #2a6fa8 0%, #f0a040 100%)",
    image: "/images/home/train.png",
  },
  {
    slug: "multimodal",
    icon: Shuffle,
    title: "Мультимодальные",
    text: "Комбинированные решения для оптимального результата.",
    bg: "linear-gradient(135deg, #3d7fbf 0%, #e67e4a 100%)",
    image: "/images/home/multi.png",
  },
];

export default function Transportation() {
  return (
    <section id="solutions" className="scroll-mt-28 bg-brand-50/60 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-700 sm:text-3xl">
            Виды транспортировки
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Доставляем грузы любым способом с максимальной эффективностью.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Link
                key={it.slug}
                href={`/${it.slug}/#content`}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(15,33,77,0.12)] ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(15,33,77,0.2)]"
              >
                <div
                  className="relative flex aspect-[3/2] w-full items-center justify-center overflow-hidden"
                  style={it.image ? undefined : { backgroundImage: it.bg }}
                >
                  {it.image ? (
                    <img
                      src={asset(it.image)}
                      alt={it.title}
                      width={800}
                      height={533}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Icon className="h-12 w-12 text-white/90" strokeWidth={1.5} />
                  )}
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
