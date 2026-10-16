import type { DictKey } from "./i18n";

export type Category = "sport" | "culture" | "tv" | "federation";

export type Work = {
  id: string;
  outlet: string;
  outletHref: string;
  category: Category;
  kind: "video" | "image";
  aspect: "video" | "square" | "portrait";
  title: { pt: string; en: string };
  href: string;
  image: string;
};

export const categoryLabelKey: Record<Category, DictKey> = {
  sport: "portfolio.sport",
  culture: "portfolio.culture",
  tv: "portfolio.tv",
  federation: "portfolio.federation",
};

// Published work supplied by the portfolio owner, with permanent post links.
export const works: Work[] = [
  {
    id: "santa-cruz-floresta",
    outlet: "Mosaico Esportivo",
    outletHref: "https://www.instagram.com/mosaico.esportivo_/",
    category: "sport",
    kind: "video",
    aspect: "portrait",
    title: {
      pt: "Santa Cruz × Floresta | Pré-jogo",
      en: "Santa Cruz vs Floresta | Pre-match",
    },
    href: "https://www.instagram.com/p/DdhNY5dxYi1/",
    image: "/instagram/DdhNY5dxYi1.jpg",
  },
  {
    id: "taca-brasil-sub10",
    outlet: "Federação Pernambucana de Futsal",
    outletHref: "https://www.instagram.com/futsalpeoficial/",
    category: "federation",
    kind: "video",
    aspect: "portrait",
    title: { pt: "Taça Brasil Sub-10", en: "Brazil Cup U10" },
    href: "https://www.instagram.com/reel/DeHNMJyRSUY/",
    image: "/instagram/DeHNMJyRSUY.jpg",
  },
  {
    id: "taca-brasil-sub15-feminina",
    outlet: "Federação Pernambucana de Futsal",
    outletHref: "https://www.instagram.com/futsalpeoficial/",
    category: "federation",
    kind: "video",
    aspect: "portrait",
    title: { pt: "Taça Brasil Sub-15 Feminina", en: "Girls’ Brazil Cup U15" },
    href: "https://www.instagram.com/reel/DekF3FOJqrd/",
    image: "/instagram/DekF3FOJqrd.jpg",
  },
  {
    id: "sport-decisao",
    outlet: "@malu.informa",
    outletHref: "https://www.instagram.com/malu.informa/",
    category: "sport",
    kind: "video",
    aspect: "portrait",
    title: { pt: "Sport × Decisão", en: "Sport vs Decisão" },
    href: "https://www.instagram.com/p/DT1Lx6EEZ6o/",
    image: "/instagram/DT1Lx6EEZ6o.jpg",
  },
  {
    id: "nautico-ceara-2026",
    outlet: "BetoCastTV",
    outletHref: "https://www.instagram.com/betocastv/",
    category: "sport",
    kind: "video",
    aspect: "video",
    title: {
      pt: "Náutico × Ceará | Série B 2026",
      en: "Náutico vs Ceará | 2026 Série B",
    },
    href: "https://www.youtube.com/live/24GBJ29Kb-o",
    image: "https://i.ytimg.com/vi/24GBJ29Kb-o/hqdefault.jpg",
  },
  {
    id: "nautico-america-2026",
    outlet: "BetoCastTV",
    outletHref: "https://www.instagram.com/betocastv/",
    category: "sport",
    kind: "video",
    aspect: "video",
    title: {
      pt: "Náutico × América-MG | Série B 2026",
      en: "Náutico vs América-MG | 2026 Série B",
    },
    href: "https://www.youtube.com/live/goCTQH_Tfgw",
    image: "https://i.ytimg.com/vi/goCTQH_Tfgw/hqdefault.jpg",
  },
  {
    id: "sport-novorizontino-2026",
    outlet: "BetoCastTV",
    outletHref: "https://www.instagram.com/betocastv/",
    category: "sport",
    kind: "video",
    aspect: "video",
    title: {
      pt: "Sport × Novorizontino | Série B 2026",
      en: "Sport vs Novorizontino | 2026 Série B",
    },
    href: "https://www.youtube.com/live/-d5zyAlqxUA",
    image: "https://i.ytimg.com/vi/-d5zyAlqxUA/hqdefault.jpg",
  },
];
