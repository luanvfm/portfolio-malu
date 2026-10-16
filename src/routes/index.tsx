import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Trophy, Landmark, Mic, Megaphone } from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { FeaturedReport } from "@/components/FeaturedReport";
import { works } from "@/lib/portfolio-data";
import { WorkCard } from "@/components/WorkCard";
import { featuredInstagramPosts } from "@/lib/instagram-posts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t, lang } = useI18n();

  const stats = [
    { value: "150+", key: "stats.matterias" as const },
    { value: "80+", key: "stats.jogos" as const },
    { value: "500+", key: "stats.seguidores" as const },
    { value: "10+", key: "stats.clubes" as const },
  ];

  const areas = [
    { icon: Trophy, t: "areas.sport.t" as const, d: "areas.sport.d" as const },
    {
      icon: Landmark,
      t: "areas.culture.t" as const,
      d: "areas.culture.d" as const,
    },
    { icon: Mic, t: "areas.field.t" as const, d: "areas.field.d" as const },
    { icon: Megaphone, t: "areas.mkt.t" as const, d: "areas.mkt.d" as const },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="azulejo absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {t("hero.kicker")}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">{t("hero.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("hero.cta")} <ArrowRight size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-sm border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t("hero.cta2")}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <FeaturedReport work={works[0]} />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl text-primary md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t(s.key)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionTitle>{t("areas.title")}</SectionTitle>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.08}>
              <div className="group h-full rounded-sm border border-border bg-card p-6 transition-colors hover:border-accent">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-secondary/15 text-secondary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <a.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-xl text-primary">{t(a.t)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(a.d)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <SectionTitle>{t("portfolio.title")}</SectionTitle>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {works.slice(0, 3).map((w, i) => (
              <Reveal key={w.id} delay={i * 0.08}>
                <WorkCard work={w} preview />
              </Reveal>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary underline-offset-4 hover:text-primary hover:underline"
          >
            {t("portfolio.viewAll")} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="rounded-sm border border-border bg-card p-5 text-center sm:p-8 md:p-14">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Instagram size={26} />
          </span>
          <h2 className="mt-5 font-display text-3xl text-primary">{t("insta.title")}</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">{t("insta.subtitle")}</p>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {featuredInstagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("insta.open")}: ${post.title[lang]}`}
                className="group relative aspect-square overflow-hidden rounded-sm bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <img
                  src={post.image}
                  alt={post.title[lang]}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-3 pt-12 text-left text-xs font-medium text-white">
                  <span className="block truncate">{post.title[lang]}</span>
                  <span className="block text-white/80">{post.author}</span>
                </span>
              </a>
            ))}
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Instagram size={16} /> {t("insta.follow")}
          </a>
        </Reveal>
      </section>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl text-primary md:text-4xl">
      <span className="mr-3 inline-block h-1 w-10 translate-y-[-0.4em] bg-accent" />
      {children}
    </h2>
  );
}
