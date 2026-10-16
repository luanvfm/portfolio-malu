import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, { pt: string; en: string }>;

// Central dictionary. Keep strings short — the site prioritizes visuals.
export const dict = {
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.portfolio": { pt: "Portfólio", en: "Portfolio" },
  "nav.contact": { pt: "Contato", en: "Contact" },
  "nav.cta": { pt: "Fale comigo", en: "Get in touch" },

  "hero.kicker": { pt: "Jornalista • Recife, PE", en: "Journalist • Recife, Brazil" },
  "hero.title": {
    pt: "Jornalismo esportivo e cultura pernambucana",
    en: "Sports journalism & Pernambuco culture",
  },
  "hero.subtitle": {
    pt: "Reportagem de campo, narrativas e conteúdo digital com identidade local.",
    en: "Field reporting, storytelling and digital content with local identity.",
  },
  "hero.cta": { pt: "Fale comigo", en: "Get in touch" },
  "hero.cta2": { pt: "Ver portfólio", en: "View portfolio" },

  "stats.title": { pt: "Em números", en: "By the numbers" },
  "stats.matterias": { pt: "Matérias produzidas", en: "Stories produced" },
  "stats.jogos": { pt: "Jogos cobertos", en: "Games covered" },
  "stats.seguidores": { pt: "Seguidores", en: "Followers" },
  "stats.clubes": { pt: "Clubes cobertos", en: "Clubs covered" },

  "areas.title": { pt: "Áreas de atuação", en: "Areas of expertise" },
  "areas.sport.t": { pt: "Jornalismo esportivo", en: "Sports journalism" },
  "areas.sport.d": {
    pt: "Cobertura de futebol e futsal com apuração e agilidade.",
    en: "Football and futsal coverage with accuracy and speed.",
  },
  "areas.culture.t": { pt: "Cultura pernambucana", en: "Pernambuco culture" },
  "areas.culture.d": {
    pt: "Pautas sobre a cultura, os eventos e a identidade de Pernambuco.",
    en: "Stories on culture, events and the identity of Pernambuco.",
  },
  "areas.field.t": { pt: "Repórter de campo", en: "Field reporter" },
  "areas.field.d": {
    pt: "Entrevistas e transmissões ao vivo direto dos estádios.",
    en: "Interviews and live coverage straight from the stadiums.",
  },
  "areas.mkt.t": { pt: "Jornalismo & Marketing", en: "Journalism & Marketing" },
  "areas.mkt.d": {
    pt: "Comunicação e marketing na Federação Pernambucana de Futsal.",
    en: "Communications and marketing at the Pernambuco Futsal Federation.",
  },

  "portfolio.title": { pt: "Portfólio de matérias", en: "Portfolio" },
  "portfolio.subtitle": {
    pt: "Reportagens, transmissões e conteúdos em veículos de referência.",
    en: "Reports, broadcasts and content across leading outlets.",
  },
  "portfolio.all": { pt: "Todos", en: "All" },
  "portfolio.sport": { pt: "Esporte", en: "Sports" },
  "portfolio.culture": { pt: "Cultura", en: "Culture" },
  "portfolio.tv": { pt: "TV", en: "TV" },
  "portfolio.federation": { pt: "Federação", en: "Federation" },
  "portfolio.watch": { pt: "Assistir / ler", en: "Watch / read" },
  "portfolio.video": { pt: "vídeo", en: "video" },
  "portfolio.mediahint": {
    pt: "Espaço para vídeo ou imagem",
    en: "Space for video or image",
  },

  "insta.title": { pt: "No Instagram", en: "On Instagram" },
  "insta.subtitle": {
    pt: "Uma seleção de reportagens, bastidores e momentos de campo.",
    en: "A selection of reports, behind-the-scenes moments and field coverage.",
  },
  "insta.follow": { pt: "Seguir @malu.informa", en: "Follow @malu.informa" },
  "insta.open": { pt: "Abrir publicação no Instagram", en: "Open post on Instagram" },

  "about.title": { pt: "Sobre Maria Luiza", en: "About Maria Luiza" },
  "about.p1": {
    pt: "Jornalista pernambucana apaixonada por esporte e cultura, com trabalhos de reportagem de campo para a BetoCastTV e o Mosaico Esportivo na cobertura do futebol.",
    en: "Pernambuco journalist passionate about sports and culture, with field reporting work for BetoCastTV and Mosaico Esportivo covering football.",
  },
  "about.p2": {
    pt: "Produziu matérias para a TVNova e hoje atua como jornalista e profissional de marketing na Federação Pernambucana de Futsal, além de manter o perfil @malu.informa.",
    en: "Produced stories for TVNova and currently works as a journalist and marketing professional at the Pernambuco Futsal Federation, while running the @malu.informa profile.",
  },
  "about.timeline": { pt: "Trajetória", en: "Timeline" },
  "about.photohint": { pt: "Foto profissional", en: "Professional photo" },

  "tl.1.t": { pt: "Repórter de campo — BetoCastTV", en: "Field reporter — BetoCastTV" },
  "tl.1.d": { pt: "Cobertura de Sport Recife e Náutico Capibaribe.", en: "Coverage of Sport Recife and Náutico Capibaribe." },
  "tl.2.t": { pt: "Matérias — TVNova", en: "Stories — TVNova" },
  "tl.2.d": { pt: "Produção e reportagem para a emissora.", en: "Production and reporting for the broadcaster." },
  "tl.3.t": { pt: "Federação Pernambucana de Futsal", en: "Pernambuco Futsal Federation" },
  "tl.3.d": { pt: "Jornalismo e marketing.", en: "Journalism and marketing." },
  "tl.4.t": { pt: "Repórter de campo — Mosaico Esportivo", en: "Field reporter — Mosaico Esportivo" },
  "tl.4.d": { pt: "Cobertura esportiva, entrevistas e participações em pré-jogos.", en: "Sports coverage, interviews and pre-match reporting." },

  "contact.title": { pt: "Vamos conversar", en: "Let's talk" },
  "contact.subtitle": {
    pt: "Disponível para reportagens, coberturas e parcerias.",
    en: "Available for reporting, coverage and partnerships.",
  },
  "contact.email": { pt: "E-mail", en: "Email" },
  "contact.instagram": { pt: "Instagram profissional", en: "Professional Instagram" },

  "footer.tagline": {
    pt: "Jornalismo com identidade pernambucana.",
    en: "Journalism with Pernambuco identity.",
  },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
} satisfies Dict;

export type DictKey = keyof typeof dict;

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);
  const t = useCallback((key: DictKey) => dict[key][lang], [lang]);
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

// Shared contact info
export const CONTACT = {
  email: "malu.informa@gmail.com",
  emailHref: "mailto:malu.informa@gmail.com",
  linkedin: "", // Add the actual profile URL to show LinkedIn in contact links.
  instagram: "https://www.instagram.com/malu.informa",
  instagramHandle: "@malu.informa",
};
