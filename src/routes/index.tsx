import { HighlightedText } from "@/components/HighlightedText";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Instagram,
  Trophy,
  Landmark,
  Mic,
  Megaphone,
  MapPin,
  Quote,
} from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ProfessionalPortrait } from "@/components/ProfessionalPortrait";
import { works } from "@/lib/portfolio-data";
import { WorkCard } from "@/components/WorkCard";
import { featuredInstagramPosts } from "@/lib/instagram-posts";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const { t, lang } = useI18n();
  const stats = [
    { value: "15+", key: "stats.matterias" as const },
    { value: "15+", key: "stats.jogos" as const },
    { value: "500+", key: "stats.seguidores" as const },
    { value: "10+", key: "stats.clubes" as const },
  ];
  const areas = [
    { icon: Trophy, t: "areas.sport.t" as const, d: "areas.sport.d" as const },
    { icon: Landmark, t: "areas.culture.t" as const, d: "areas.culture.d" as const },
    { icon: Mic, t: "areas.field.t" as const, d: "areas.field.d" as const },
    { icon: Megaphone, t: "areas.mkt.t" as const, d: "areas.mkt.d" as const },
  ];

  return (
    <>
      <section className="journal-hero">
        <div className="journal-hero-layout mx-auto max-w-6xl px-5">
          <div className="journal-intro">
            <h1 className="journal-headline">
              <span className="block">{t("hero.title.intro")}</span>
              <span className="word-cut word-cut-salmon">{t("hero.title.sport")}</span>{" "}
              <span className="journal-conjunction">{t("hero.title.and")}</span>{" "}
              <span className="word-cut word-cut-blue">{t("hero.title.culture")}</span>
            </h1>
            <p className="journal-location">
              <MapPin size={15} aria-hidden="true" />
              {t("hero.kicker")}
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              <HighlightedText text={t("hero.subtitle")} />
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/portfolio" className="journal-button journal-button-salmon">
                {t("hero.cta2")} <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link to="/contato" className="journal-text-link">
                {t("hero.cta")}
              </Link>
            </div>
          </div>
          <div className="journal-hero-media">
            <ProfessionalPortrait />
            <div className="journal-note" aria-hidden="true">
              <Quote size={28} strokeWidth={1.7} />
              <p>{t("hero.note")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="journal-stat text-center">
              <p className="journal-stat-number font-display text-4xl text-primary md:text-5xl">
                {s.value}
              </p>
              <p className="journal-stat-label mt-1 text-sm text-muted-foreground">{t(s.key)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal>
          <SectionTitle>{t("areas.title")}</SectionTitle>
        </Reveal>
        <div className="journal-areas mt-10 grid gap-x-12 md:grid-cols-2">
          {areas.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.05}>
              <div className="journal-area group">
                <span className="journal-area-icon">
                  <a.icon size={25} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-primary sm:text-2xl">{t(a.t)}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    <HighlightedText text={t(a.d)} />
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="journal-clippings">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <SectionTitle>{t("portfolio.title")}</SectionTitle>
              <p className="journal-margin-note">{t("portfolio.clippings")}</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {works.slice(0, 3).map((w, i) => (
              <Reveal key={w.id} delay={i * 0.07}>
                <WorkCard work={w} preview />
              </Reveal>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="journal-text-link mt-9 inline-flex min-h-11 items-center gap-2"
          >
            {t("portfolio.viewAll")} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal className="journal-instagram">
          <div className="journal-instagram-heading">
            <Instagram size={32} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">{t("insta.title")}</h2>
              <p className="mt-3 max-w-md leading-relaxed">
                <HighlightedText text={t("insta.subtitle")} />
              </p>
            </div>
          </div>
          <div className="journal-instagram-posts mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {featuredInstagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("insta.open")}: ${post.title[lang]}`}
                className="journal-instagram-post group"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    width={640}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ArrowRight className="journal-post-arrow" size={25} aria-hidden="true" />
                </div>
                <span className="block truncate px-1 pb-1 pt-3 text-xs font-semibold text-primary">
                  {post.author}
                </span>
              </a>
            ))}
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="journal-button journal-button-salmon mt-9"
          >
            {t("insta.follow")} <ArrowRight size={17} aria-hidden="true" />
          </a>
        </Reveal>
      </section>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="journal-section-title font-display text-3xl text-primary md:text-4xl">
      {children}
    </h2>
  );
}
