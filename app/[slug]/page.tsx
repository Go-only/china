import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { services, LOREM, type ServiceSlug } from "@/lib/services";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(services)
    .filter((slug) => slug !== "faq")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = services[slug as ServiceSlug];
  if (!data) return {};
  const title = `${data.title} — DOLART Global`;
  const path = `/${slug}/`;
  return {
    title,
    description: data.subtitle,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: SITE_NAME,
      title,
      description: data.subtitle,
      url: path,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1920,
          height: 1080,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.subtitle,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = services[slug as ServiceSlug];
  if (!data) notFound();

  return (
    <>
      <div className="relative">
        <Header />
        <HeroSlider />
      </div>

      <section id="content" className="scroll-mt-28 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {data.title}
          </h1>
          <p className="mt-3 text-base text-slate-600">{data.subtitle}</p>

          <div className="mt-8 text-base leading-relaxed text-slate-700">
            {(data.body ?? LOREM).split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mt-12 text-2xl font-bold text-ink-900 first:mt-0 sm:text-3xl"
                  >
                    {block.slice(3)}
                  </h2>
                );
              }
              return (
                <p key={i} className="mt-5 first:mt-0">
                  {block}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
