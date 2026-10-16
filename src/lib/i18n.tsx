import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, { pt: string; en: string }>;

// Central dictionary. Keep strings short — the site prioritizes visuals.
export const dict = {
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre Mim", en: "About Me" },
  "nav.portfolio": { pt: "Portfólio", en: "Portfolio" },
  "nav.contact": { pt: "Contato", en: "Contact" },
  "nav.cta": { pt: "Fale comigo", en: "Get in touch" },

  "hero.kicker": {
    pt: "Jornalista • Recife, PE",
    en: "Journalist • Recife, Brazil",
  },
  "hero.title": {
    pt: "Meu olhar sobre esporte e cultura",
    en: "My take on sports and culture",
  },
  "hero.title.intro": { pt: "Meu olhar sobre", en: "My take on" },
  "hero.title.sport": { pt: "esporte", en: "sports" },
  "hero.title.and": { pt: "e", en: "and" },
  "hero.title.culture": { pt: "cultura", en: "culture" },
  "hero.note": { pt: "Meu caderno de pautas", en: "My reporting notebook" },
  "hero.subtitle": {
    pt: "Produzo **reportagens de campo** e **conteúdo digital** sobre esporte e cultura pernambucana.",
    en: "I produce **field reports** and **digital content** about sports and Pernambuco culture.",
  },
  "hero.cta": { pt: "Fale comigo", en: "Get in touch" },
  "hero.cta2": { pt: "Ver meu portfólio", en: "View my work" },

  "stats.title": { pt: "Em números", en: "By the numbers" },
  "stats.matterias": { pt: "Matérias produzidas", en: "Stories produced" },
  "stats.jogos": { pt: "Jogos cobertos", en: "Games covered" },
  "stats.seguidores": { pt: "Seguidores", en: "Followers" },
  "stats.clubes": { pt: "Clubes cobertos", en: "Clubs covered" },

  "areas.title": { pt: "Minhas áreas de atuação", en: "What I do" },
  "areas.sport.t": { pt: "Jornalismo esportivo", en: "Sports journalism" },
  "areas.sport.d": {
    pt: "Cubro **futebol e futsal** com apuração e agilidade.",
    en: "I cover **football and futsal** with accuracy and speed.",
  },
  "areas.culture.t": { pt: "Cultura pernambucana", en: "Pernambuco culture" },
  "areas.culture.d": {
    pt: "Conto histórias sobre a **cultura**, os eventos e a **identidade de Pernambuco**.",
    en: "I tell stories about Pernambuco’s **culture**, events and **identity**.",
  },
  "areas.field.t": { pt: "Repórter de campo", en: "Field reporter" },
  "areas.field.d": {
    pt: "Faço **entrevistas** e participo de **transmissões ao vivo** direto dos estádios.",
    en: "I conduct **interviews** and contribute to **live coverage** from the stadiums.",
  },
  "areas.mkt.t": { pt: "Jornalismo & Marketing", en: "Journalism & Marketing" },
  "areas.mkt.d": {
    pt: "Atuo com **comunicação e marketing** na Federação Pernambucana de Futsal.",
    en: "I work in **communications and marketing** at the Pernambuco Futsal Federation.",
  },

  "portfolio.title": { pt: "Meu portfólio", en: "My work" },
  "portfolio.clippings": { pt: "Recortes do meu trabalho", en: "Clippings from my work" },
  "portfolio.subtitle": {
    pt: "Reuni aqui minhas **reportagens**, **transmissões** e produções para diferentes veículos.",
    en: "Here are my **reports**, **broadcasts** and productions for different outlets.",
  },
  "portfolio.all": { pt: "Todos", en: "All" },
  "portfolio.sport": { pt: "Esporte", en: "Sports" },
  "portfolio.culture": { pt: "Cultura", en: "Culture" },
  "portfolio.tv": { pt: "TV", en: "TV" },
  "portfolio.federation": { pt: "Federação", en: "Federation" },
  "portfolio.watch": { pt: "Assistir / ler", en: "Watch / read" },
  "portfolio.video": { pt: "vídeo", en: "video" },
  "portfolio.viewAll": {
    pt: "Ver meu portfólio completo",
    en: "View all my work",
  },
  "portfolio.featured": {
    pt: "Conheça meu trabalho nesta reportagem de campo.",
    en: "Discover my work in this field report.",
  },
  "portfolio.previewUnavailable": {
    pt: "Prévia indisponível. Abra a publicação.",
    en: "Preview unavailable. Open the post.",
  },
  "portfolio.mediahint": {
    pt: "Espaço para vídeo ou imagem",
    en: "Space for video or image",
  },

  "insta.title": { pt: "No meu Instagram", en: "On my Instagram" },
  "insta.subtitle": {
    pt: "Compartilho minhas **reportagens**, **bastidores** e momentos em campo.",
    en: "I share my **reports**, **behind-the-scenes** moments and field coverage.",
  },
  "insta.follow": { pt: "Seguir @malu.informa", en: "Follow @malu.informa" },
  "insta.open": {
    pt: "Abrir publicação no Instagram",
    en: "Open post on Instagram",
  },

  "about.title": { pt: "Sobre Mim", en: "About Me" },
  "about.p1": {
    pt: "Sou **jornalista pernambucana** e apaixonada por esporte e cultura. Meu trabalho inclui reportagens de campo para a **BetoCastTV** e o **Mosaico Esportivo** na cobertura do futebol.",
    en: "I’m a **Pernambuco journalist** with a passion for sports and culture. My work includes field reporting for **BetoCastTV** and **Mosaico Esportivo** covering football.",
  },
  "about.p2": {
    pt: "Produzi matérias para a **TVNova** e hoje atuo como jornalista e profissional de marketing na **Federação Pernambucana de Futsal**. Também mantenho o perfil @malu.informa.",
    en: "I produced stories for **TVNova** and now work as a journalist and marketing professional at the **Pernambuco Futsal Federation**. I also run @malu.informa.",
  },
  "about.timeline": { pt: "Minha trajetória", en: "My journey" },
  "about.photohint": { pt: "Foto profissional", en: "Professional photo" },
  "about.portraitAlt": {
    pt: "Retrato profissional de Maria Luiza, sorrindo, com cabelo solto e blusa preta.",
    en: "Professional portrait of Maria Luiza smiling, with her hair down and wearing a black top.",
  },
  "about.portraitCaption": { pt: "Pode me chamar de Malu.", en: "You can call me Malu." },

  "tl.1.t": {
    pt: "Repórter de campo — BetoCastTV",
    en: "Field reporter — BetoCastTV",
  },
  "tl.1.d": {
    pt: "Meu trabalho na cobertura de **Sport Recife** e **Náutico Capibaribe**.",
    en: "My coverage of **Sport Recife** and **Náutico Capibaribe**.",
  },
  "tl.2.t": { pt: "Matérias — TVNova", en: "Stories — TVNova" },
  "tl.2.d": {
    pt: "Produzi conteúdo e realizei **reportagens** para a emissora.",
    en: "I produced content and **reported** for the broadcaster.",
  },
  "tl.3.t": {
    pt: "Federação Pernambucana de Futsal",
    en: "Pernambuco Futsal Federation",
  },
  "tl.3.d": {
    pt: "Atuo com **jornalismo e marketing**.",
    en: "I work in **journalism and marketing**.",
  },
  "tl.4.t": {
    pt: "Repórter de campo — Mosaico Esportivo",
    en: "Field reporter — Mosaico Esportivo",
  },
  "tl.4.d": {
    pt: "Faço coberturas esportivas, **entrevistas** e participo de **pré-jogos**.",
    en: "I cover sports, conduct **interviews** and report before **matches**.",
  },

  "contact.title": { pt: "Vamos conversar", en: "Let's talk" },
  "contact.subtitle": {
    pt: "Estou disponível para **reportagens**, coberturas e **parcerias**.",
    en: "I’m available for **reporting**, coverage and **partnerships**.",
  },
  "contact.email": { pt: "E-mail", en: "Email" },
  "contact.linkedin": { pt: "Meu perfil profissional", en: "My professional profile" },
  "contact.instagram": {
    pt: "Instagram profissional",
    en: "Professional Instagram",
  },

  "footer.title": {
    pt: "Vamos tirar sua pauta do papel?",
    en: "Let’s bring your next story to life.",
  },
  "footer.description": {
    pt: "Se você se interessou pelo meu trabalho, vamos conversar sobre o seu **próximo projeto**.",
    en: "If my work caught your interest, let’s talk about your **next project**.",
  },
  "footer.cta": { pt: "Enviar uma proposta", en: "Send a proposal" },
  "footer.social": { pt: "Me acompanhe", en: "Find me online" },
  "footer.rights": {
    pt: "Todos os direitos reservados.",
    en: "All rights reserved.",
  },
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
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

// Shared contact info
export const CONTACT = {
  email: "marialuizadecarvalho1201@gmail.com",
  emailHref: "mailto:marialuizadecarvalho1201@gmail.com",
  linkedin: "https://www.linkedin.com/in/maria-luiza-carvalho-9610a4342/",
  instagram: "https://www.instagram.com/malu.informa",
  instagramHandle: "@malu.informa",
};
