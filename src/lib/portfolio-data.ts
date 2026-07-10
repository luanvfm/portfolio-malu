import type { DictKey } from "./i18n";

export type Category = "sport" | "culture" | "tv" | "federation";

export type Work = {
  id: string;
  outlet: string;
  category: Category;
  kind: "video" | "image";
  aspect: "video" | "square" | "portrait";
  title: { pt: string; en: string };
  href?: string;
};

export const categoryLabelKey: Record<Category, DictKey> = {
  sport: "portfolio.sport",
  culture: "portfolio.culture",
  tv: "portfolio.tv",
  federation: "portfolio.federation",
};

// Placeholder entries — replace media and titles later.
export const works: Work[] = [
  {
    id: "sport-1",
    outlet: "BetoCastTV",
    category: "sport",
    kind: "video",
    aspect: "video",
    title: { pt: "Cobertura Sport Recife", en: "Sport Recife coverage" },
  },
  {
    id: "nautico-1",
    outlet: "BetoCastTV",
    category: "sport",
    kind: "video",
    aspect: "portrait",
    title: { pt: "Bastidores Náutico Capibaribe", en: "Náutico Capibaribe behind the scenes" },
  },
  {
    id: "tvnova-1",
    outlet: "TVNova",
    category: "tv",
    kind: "video",
    aspect: "video",
    title: { pt: "Matéria especial", en: "Special report" },
  },
  {
    id: "cultura-1",
    outlet: "@malu.informa",
    category: "culture",
    kind: "image",
    aspect: "square",
    title: { pt: "Cultura pernambucana", en: "Pernambuco culture" },
  },
  {
    id: "futsal-1",
    outlet: "Federação PE de Futsal",
    category: "federation",
    kind: "image",
    aspect: "video",
    title: { pt: "Campeonato de futsal", en: "Futsal championship" },
  },
  {
    id: "cultura-2",
    outlet: "@malu.informa",
    category: "culture",
    kind: "image",
    aspect: "portrait",
    title: { pt: "Eventos e tradições", en: "Events and traditions" },
  },
  {
    id: "sport-2",
    outlet: "BetoCastTV",
    category: "sport",
    kind: "video",
    aspect: "square",
    title: { pt: "Entrevista pós-jogo", en: "Post-match interview" },
  },
  {
    id: "tvnova-2",
    outlet: "TVNova",
    category: "tv",
    kind: "video",
    aspect: "portrait",
    title: { pt: "Reportagem de rua", en: "Street reporting" },
  },
];