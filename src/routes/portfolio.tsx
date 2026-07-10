import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { works, categoryLabelKey, type Category } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Maria Luiza, Jornalista" },
      {
        name: "description",
        content:
          "Reportagens, transmissões e conteúdos de Maria Luiza para BetoCastTV, TVNova, Federação Pernambucana de Futsal e @malu.informa.",
      },
      { property: "og:title", content: "Portfólio — Maria Luiza, Jornalista" },
      {
        property: "og:description",
        content: "Matérias de esporte e cultura pernambucana em veículos de referência.",
      },
    ],
  }),
  component: Portfolio,
});

type Filter = "all" | Category;

function Portfolio() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("portfolio.all") },
    { key: "sport", label: t("portfolio.sport") },
    { key: "culture", label: t("portfolio.culture") },
    { key: "tv", label: t("portfolio.tv") },
    { key: "federation", label: t("portfolio.federation") },
  ];

  const filtered = filter === "all" ? works : works.filter((w) => w.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Reveal>
        <h1 className="font-display text-4xl text-primary md:text-5xl">
          {t("portfolio.title")}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          {t("portfolio.subtitle")}
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={
                "rounded-sm border px-4 py-2 text-sm font-semibold transition-colors " +
                (filter === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-secondary hover:text-primary")
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((w, i) => (
          <Reveal key={w.id} delay={(i % 3) * 0.06}>
            <article className="group break-inside-avoid overflow-hidden rounded-sm border border-border bg-card">
              <div className="relative">
                <MediaPlaceholder aspect={w.aspect} kind={w.kind} />
                {w.kind === "video" && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-sm bg-primary/85 px-2 py-1 text-[11px] font-semibold text-primary-foreground">
                    <PlayCircle size={13} /> vídeo
                  </span>
                )}
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  {t(categoryLabelKey[w.category])} • {w.outlet}
                </span>
                <h3 className="mt-2 font-display text-lg text-primary">
                  {w.title[lang]}
                </h3>
                <span className="mt-3 inline-block text-sm font-medium text-muted-foreground group-hover:text-primary">
                  {t("portfolio.watch")} →
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
