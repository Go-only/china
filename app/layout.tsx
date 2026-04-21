import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import {
  SITE_ORIGIN,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from "@/lib/site";
import { organizationJsonLd } from "@/lib/organization";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const title = "Доставка товаров и грузов из Китая в Россию";
const description =
  "Доставка товаров и грузов из Китая в Россию под ключ — белая логистика, выкуп товара, поиск поставщика, ВЭД, таможенное оформление, сертификация, международные перевозки и карго | ДОЛАРТ | DOLART";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_ORIGIN}/`),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    title,
    description,
    url: "/",
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
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
