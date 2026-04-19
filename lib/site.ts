import { basePath } from "@/lib/assets";

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://go-only.github.io";

export const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");
export const SITE_ORIGIN = `${SITE_URL}${basePath}`;
export const SITE_NAME = "DOLART Global";
export const DEFAULT_OG_IMAGE = "/images/home/sl1.jpg";
