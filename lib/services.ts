export type ServiceSlug =
  | "sea-freight"
  | "road-freight"
  | "air-freight"
  | "rail-freight"
  | "multimodal"
  | "white-import"
  | "customs-clearance"
  | "certification"
  | "global-logistics";

export const services: Record<
  ServiceSlug,
  { title: string; subtitle: string }
> = {
  "sea-freight": {
    title: "Морские перевозки",
    subtitle: "Надёжные морские перевозки по всему миру.",
  },
  "road-freight": {
    title: "Автоперевозки",
    subtitle: "Быстрая и безопасная доставка автотранспортом.",
  },
  "air-freight": {
    title: "Авиаперевозки",
    subtitle: "Экспресс-доставка авиатранспортом для срочных грузов.",
  },
  "rail-freight": {
    title: "Ж/Д перевозки",
    subtitle: "Экономичная доставка железнодорожным транспортом.",
  },
  multimodal: {
    title: "Мультимодальные перевозки",
    subtitle: "Комбинированные решения для оптимального результата.",
  },
  "white-import": {
    title: "Белый импорт",
    subtitle:
      "Работаем строго в правовом поле, обеспечивая безопасные и прозрачные поставки.",
  },
  "customs-clearance": {
    title: "Таможенное оформление",
    subtitle: "Быстро и эффективно проходим все таможенные процедуры.",
  },
  certification: {
    title: "Сертификация",
    subtitle: "Помогаем получить все необходимые сертификаты на товары.",
  },
  "global-logistics": {
    title: "Международная логистика",
    subtitle: "Морские, авиа, авто, ж/д и мультимодальные перевозки по всему миру.",
  },
};

export const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.`;
