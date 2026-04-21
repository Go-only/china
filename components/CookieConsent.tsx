"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "dolart-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Согласие на обработку cookie"
      className="fixed inset-x-0 bottom-0 z-[60] bg-[#022440] text-sm text-white shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 md:flex-row md:items-center md:gap-6 lg:px-10">
        <p className="flex-1 leading-relaxed text-white/90">
          Продолжая использовать наш сайт, вы даете согласие на обработку
          файлов cookie, пользовательских данных (сведения о местоположении;
          тип и версия ОС; тип и версия Браузера; тип устройства и разрешение
          его экрана; источник откуда пришел на сайт пользователь; с какого
          сайта или по какой рекламе; язык ОС и Браузера; какие страницы
          открывает и на какие кнопки нажимает пользователь; ip-адрес) в целях
          функционирования сайта и проведения статистических исследований и
          обзоров. Если вы не хотите, чтобы ваши данные обрабатывались,
          нажмите «Отклоняю».{" "}
          <Link
            href="/privacy-policy/#content"
            className="underline decoration-white/40 underline-offset-2 transition hover:text-white hover:decoration-white"
          >
            Политика конфиденциальности
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Принимаю
          </button>
          <button
            type="button"
            onClick={() => respond("declined")}
            className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Отклоняю
          </button>
        </div>
      </div>
    </div>
  );
}
