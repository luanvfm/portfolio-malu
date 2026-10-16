import { PlayCircle, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { categoryLabelKey, type Work } from "@/lib/portfolio-data";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export function WorkCard({ work, preview = false }: { work: Work; preview?: boolean }) {
  const { t, lang } = useI18n();
  return (
    <article className="journal-work group relative break-inside-avoid focus-within:ring-2 focus-within:ring-secondary">
      <div className="relative">
        <MediaPlaceholder
          aspect={work.aspect}
          kind={work.kind}
          src={work.image}
          alt={work.title[lang]}
        />
        {work.kind === "video" && (
          <span className="journal-video-label">
            <PlayCircle size={14} aria-hidden="true" />
            {t("portfolio.video")}
          </span>
        )}
      </div>
      <div className="px-2 pb-3 pt-5">
        <span className="journal-category">{t(categoryLabelKey[work.category])}</span>
        <a
          href={work.outletHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-3 block w-fit text-sm font-medium text-secondary underline-offset-4 hover:underline"
        >
          {work.outlet}
        </a>
        <h3 className="mt-2 font-display text-xl leading-snug text-primary">
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
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-primary">
            {t("portfolio.watch")}
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}
