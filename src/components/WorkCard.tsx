import { PlayCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { categoryLabelKey, type Work } from "@/lib/portfolio-data";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export function WorkCard({
  work,
  preview = false,
}: {
  work: Work;
  preview?: boolean;
}) {
  const { t, lang } = useI18n();

  return (
    <article
      className={`group relative break-inside-avoid overflow-hidden rounded-sm border border-border transition-colors hover:border-secondary focus-within:ring-2 focus-within:ring-secondary ${preview ? "bg-background" : "bg-card"}`}
    >
      <div className="relative">
        <MediaPlaceholder
          aspect={preview ? "video" : work.aspect}
          kind={work.kind}
          src={work.image}
          alt={work.title[lang]}
        />
        {!preview && work.kind === "video" && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-sm bg-primary/85 px-2 py-1 text-[11px] font-semibold text-primary-foreground">
            <PlayCircle size={13} /> {t("portfolio.video")}
          </span>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {t(categoryLabelKey[work.category])} •{" "}
          <a
            href={work.outletHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 hover:underline"
          >
            {work.outlet}
          </a>
        </span>
        <h3 className="mt-2 font-display text-lg text-primary">
          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            {work.title[lang]}
          </a>
        </h3>
        {!preview && (
          <span className="mt-3 inline-block text-sm font-medium text-secondary group-hover:text-primary">
            {t("portfolio.watch")} →
          </span>
        )}
      </div>
    </article>
  );
}
