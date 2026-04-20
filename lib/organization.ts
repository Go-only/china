import { SITE_ORIGIN } from "@/lib/site";

export const ORG_PHONE_DISPLAY = "+7 (993) 46-777-03";
export const ORG_PHONE_TEL = "+79934677703";
export const ORG_EMAIL = "dolart.llc@gmail.com";
export const ORG_WEBSITE = "https://dolart.pro";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: "DOLART Global",
  alternateName: ["DOLART LLC", "ООО «ДОЛАРТ»"],
  legalName: "Общество с ограниченной ответственностью «ДОЛАРТ»",
  url: `${SITE_ORIGIN}/`,
  logo: `${SITE_ORIGIN}/images/logo-dolart.png`,
  email: ORG_EMAIL,
  telephone: ORG_PHONE_TEL,
  sameAs: [ORG_WEBSITE],
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Самарская, д. 130, помещ. 010",
    addressLocality: "Самара",
    addressRegion: "Самарская область",
    postalCode: "443010",
    addressCountry: "RU",
  },
  taxID: "6317164760",
  identifier: [
    { "@type": "PropertyValue", propertyID: "INN", value: "6317164760" },
    { "@type": "PropertyValue", propertyID: "KPP", value: "631701001" },
    { "@type": "PropertyValue", propertyID: "OGRN", value: "1236300027787" },
    { "@type": "PropertyValue", propertyID: "BIC", value: "044525104" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: ORG_PHONE_TEL,
      email: ORG_EMAIL,
      contactType: "customer service",
      areaServed: ["RU", "CN"],
      availableLanguage: ["Russian", "English", "Chinese"],
    },
  ],
  founder: {
    "@type": "Person",
    name: "Долбичкин Сергей Александрович",
    jobTitle: "Генеральный директор",
  },
};
