import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Work } from "@/lib/portfolio-data";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export function FeaturedReport({ work }: { work: Work }) {
  const { t, lang } = useI18n();
  return (
    <figure className="journal-report">
      <a
        href={work.href}
        target="_blank"
        rel="noopener noreferrer"
        className="journal-report-paper group"
        aria-label={`${t("portfolio.watch")}: ${work.title[lang]}`}
      >
        <MediaPlaceholder
          src={work.image}
          alt={work.title[lang]}
          aspect="portrait"
          kind={work.kind}
          priority
        />
        <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-secondary">{work.outlet}</p>
            <p className="mt-1 font-display text-lg leading-snug text-primary">
              {work.title[lang]}
            </p>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            size={23}
            className="shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </a>
      <figcaption className="mt-5 text-center text-sm text-muted-foreground">
        {t("portfolio.featured")}
      </figcaption>
    </figure>
  );
}
