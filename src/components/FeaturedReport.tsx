import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Work } from "@/lib/portfolio-data";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export function FeaturedReport({ work }: { work: Work }) {
  const { t, lang } = useI18n();

  return (
    <figure className="mx-auto w-full max-w-sm">
      <a
        href={work.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-sm bg-card"
        aria-label={`${t("portfolio.watch")}: ${work.title[lang]}`}
      >
        <MediaPlaceholder
          src={work.image}
          alt={work.title[lang]}
          aspect="portrait"
          kind={work.kind}
          priority
        />
        <div className="flex items-center justify-between gap-4 px-5 py-5">
          <div className="min-w-0">
            <p className="text-sm text-secondary">{work.outlet}</p>
            <p className="mt-1 font-display text-lg text-primary">{work.title[lang]}</p>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            size={22}
            className="shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </a>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {t("portfolio.featured")}
      </figcaption>
    </figure>
  );
}
