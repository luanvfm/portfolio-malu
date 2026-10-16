import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { WorkCard } from "@/components/WorkCard";
import { works, categoryLabelKey, type Category } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio | Malu Informa" },
      {
        name: "description",
        content:
          "Coberturas de futebol e futsal de Maria Luiza para Mosaico Esportivo, BetoCastTV, Federação Pernambucana de Futsal e @malu.informa.",
      },
      { property: "og:title", content: "Portfólio | Malu Informa" },
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
  const { t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("portfolio.all") },
    ...Array.from(new Set(works.map((work) => work.category))).map((category) => ({
      key: category,
      label: t(categoryLabelKey[category]),
    })),
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
              type="button"
              aria-pressed={filter === f.key}
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
            <WorkCard work={w} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
