import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Banknote } from "lucide-react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Features from "@/components/Features";
import Transportation from "@/components/Transportation";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function MoneyTransferBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-14">
        <Link
          href="/money-transfer/#content"
          className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-teal-500 px-6 py-7 text-white shadow-[0_18px_45px_-18px_rgba(15,33,77,0.55)] transition hover:shadow-[0_24px_55px_-18px_rgba(15,33,77,0.7)] sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-8 lg:px-10"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl sm:-right-10"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-500/20 blur-2xl"
          />

          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur sm:h-16 sm:w-16">
            <Banknote className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
          </span>

          <div className="relative flex-1">
            <h2 className="text-xl font-extrabold leading-tight sm:text-2xl lg:text-[26px]">
              Занимаемся переводом денежных средств в Китай по белой схеме
            </h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Оплата китайским поставщикам легально — контракт, валютный контроль и закрывающие документы под ключ.
            </p>
          </div>

          <span className="relative inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition group-hover:gap-3 sm:self-center">
            Подробнее
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        <HeroSlider />
      </div>
      <MoneyTransferBanner />
      <Features />
      <Transportation />
      <WhyUs />
      <Footer />
    </main>
  );
}
