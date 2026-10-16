import { useI18n } from "@/lib/i18n";

export function ProfessionalPortrait() {
  const { t } = useI18n();
  return (
    <figure className="journal-portrait">
      <div className="journal-portrait-art">
        <img
          src="/portrait/maria-luiza-800.webp"
          srcSet="/portrait/maria-luiza-480.webp 480w, /portrait/maria-luiza-800.webp 800w"
          sizes="(min-width: 640px) 352px, min(320px, calc(100vw - 72px))"
          width={800}
          height={977}
          alt={t("about.portraitAlt")}
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <figcaption className="journal-portrait-caption">
        <span className="font-display text-2xl text-primary">Maria Luiza</span>
        <span className="mt-1 block text-sm text-secondary">{t("about.portraitCaption")}</span>
      </figcaption>
    </figure>
  );
}
