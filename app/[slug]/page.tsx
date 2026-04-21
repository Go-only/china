import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { seoMeta, services, type ServiceSlug } from "@/lib/services";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

function parseRow(line: string): string[] {
  return line
    .replace(/^\s*\|/, "")
    .replace(/\|\s*$/, "")
    .split("|")
    .map((c) => c.trim());
}

function renderCell(text: string): React.ReactNode {
  const linkClass = "text-accent-600 underline decoration-slate-300 underline-offset-2 hover:decoration-accent-600";

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
    return (
      <a href={`mailto:${text}`} className={linkClass}>
        {text}
      </a>
    );
  }

  if (/^\+\d[\d\s().\-]{6,}$/.test(text)) {
    const digits = text.replace(/[^\d+]/g, "");
    return (
      <a href={`tel:${digits}`} className={linkClass}>
        {text}
      </a>
    );
  }

  if (/^[a-zA-Z0-9-]+\.(?:pro|ru|com|org|net|io|cn)(?:\/\S*)?$/i.test(text)) {
    const href = text.startsWith("http") ? text : `https://${text}`;
    return (
      <a
        href={href}
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return text;
}

function renderBlock(block: string, i: number) {
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

  const videoMatch = block.trim().match(/^\[video(?::\s*([^\]]+))?\]$/);
  if (videoMatch) {
    const src = videoMatch[1]?.trim();
    return (
      <div
        key={i}
        className="mt-8 aspect-video overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-slate-200 first:mt-0"
      >
        {src ? (
          <video
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            src={src}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-300">
            Видео скоро появится
          </div>
        )}
      </div>
    );
  }

  const lines = block.split("\n");

  if (
    lines.length >= 2 &&
    lines[0].includes("|") &&
    /^\s*\|?[\s\-:|]+\|?\s*$/.test(lines[1])
  ) {
    const header = parseRow(lines[0]);
    const rows = lines.slice(2).map(parseRow);
    return (
      <div
        key={i}
        className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200 first:mt-0"
      >
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-200 text-ink-900">
            <tr>
              {header.map((h, j) => (
                <th key={j} className="px-5 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((row, ri) => (
              <tr key={ri} className="align-top">
                {row.map((c, j) => (
                  <td
                    key={j}
                    className={
                      j === 0
                        ? "px-5 py-4 font-semibold text-ink-900"
                        : "px-5 py-4 leading-relaxed"
                    }
                  >
                    {j === 0 ? c : renderCell(c)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (lines.every((l) => /^\s*>\s/.test(l))) {
    const contentLines = lines.map((l) => l.replace(/^\s*>\s?/, ""));
    const firstLine = contentLines[0] ?? "";
    const titleMatch = firstLine.match(/^\*\*(.+?)\*\*\s*$/);
    const title = titleMatch ? titleMatch[1] : null;
    const bodyLines = title ? contentLines.slice(1) : contentLines;
    return (
      <aside
        key={i}
        className="mt-6 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5 first:mt-0"
      >
        {title && (
          <p className="mb-2 font-semibold text-ink-900">{title}</p>
        )}
        <div className="space-y-2 text-slate-700">
          {bodyLines.map((l, j) => (
            <p key={j}>{l}</p>
          ))}
        </div>
      </aside>
    );
  }

  if (lines.every((l) => /^\s*-\s+/.test(l))) {
    return (
      <ul key={i} className="mt-5 list-disc space-y-2 pl-6 first:mt-0">
        {lines.map((l, j) => (
          <li key={j}>{l.replace(/^\s*-\s+/, "")}</li>
        ))}
      </ul>
    );
  }

  return (
    <p key={i} className="mt-5 first:mt-0">
      {block}
    </p>
  );
}

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
  const seo = seoMeta[slug as ServiceSlug];
  const title = seo?.title ?? `${data.title} — DOLART Global`;
  const description = seo?.description ?? data.subtitle;
  const path = `/${slug}/`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: SITE_NAME,
      title,
      description,
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
      description,
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

          {data.body && data.body.trim() && (
            <div className="mt-8 text-base leading-relaxed text-slate-700">
              {data.body.split("\n\n").map((block, i) => renderBlock(block, i))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
