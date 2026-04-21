import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { seoMeta, services } from "@/lib/services";
import { faqItems } from "@/lib/faq";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

const faqTitle = seoMeta.faq?.title ?? `${services.faq.title} — DOLART Global`;
const faqDescription = seoMeta.faq?.description ?? services.faq.subtitle;

export const metadata: Metadata = {
  title: faqTitle,
  description: faqDescription,
  alternates: { canonical: "/faq/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    title: faqTitle,
    description: faqDescription,
    url: "/faq/",
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
    title: faqTitle,
    description: faqDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function FaqPage() {
  const data = services.faq;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

          <div className="mt-10">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
