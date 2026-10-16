import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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
          "Minhas coberturas de futebol e futsal para Mosaico Esportivo, BetoCastTV, Federação Pernambucana de Futsal e @malu.informa.",
      },
      { property: "og:title", content: "Portfólio | Malu Informa" },
      {
        property: "og:description",
        content:
          "Minhas reportagens e coberturas de futebol e futsal para Mosaico Esportivo, BetoCastTV e Federação Pernambucana de Futsal.",
      },
    ],
  }),
  component: Portfolio,
});
type Filter = "all" | Category;

function Portfolio() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const reduceMotion = useReducedMotion();
  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("portfolio.all") },
    ...Array.from(new Set(works.map((work) => work.category))).map((category) => ({
      key: category,
      label: t(categoryLabelKey[category]),
    })),
  ];
  const filtered = filter === "all" ? works : works.filter((w) => w.category === filter);
  return (
    <div className="journal-page mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Reveal className="journal-page-heading">
        <h1 className="font-display text-4xl text-primary md:text-5xl">{t("portfolio.title")}</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t("portfolio.subtitle")}
        </p>
      </Reveal>
      <div
        className="journal-filters mt-9 flex flex-wrap gap-3"
        role="group"
        aria-label={lang === "pt" ? "Filtrar meu portfólio" : "Filter my work"}
      >
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={filter === f.key}
            aria-controls="portfolio-results"
            onClick={() => setFilter(f.key)}
            className="journal-filter"
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {filtered.length} {lang === "pt" ? "trabalhos exibidos" : "works shown"}
      </p>
      <motion.div
        id="portfolio-results"
        key={filter}
        initial={false}
        animate={reduceMotion ? undefined : { opacity: [0.65, 1], y: [10, 0] }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="journal-portfolio-grid mt-10 columns-1 gap-7 sm:columns-2 lg:columns-3 [&>*]:mb-7"
      >
        {filtered.map((w) => (
          <WorkCard key={w.id} work={w} />
        ))}
      </motion.div>
    </div>
  );
}
