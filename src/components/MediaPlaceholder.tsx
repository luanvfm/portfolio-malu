import { ImageIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function MediaPlaceholder({
  aspect = "video",
  label,
  kind = "image",
  className = "",
  src,
  alt = "",
  priority = false,
}: {
  aspect?: "video" | "square" | "portrait";
  label?: string;
  kind?: "image" | "video";
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  const { t } = useI18n();
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const ratio =
    aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square" : "aspect-[3/4]";
  return (
    <div
      className={`azulejo relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-sm ${className}`}
    >
      {src && src !== failedSource ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailedSource(src)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-primary/25" />
          <div className="relative flex flex-col items-center gap-2 text-center text-background">
            {kind === "video" ? <PlayCircle size={40} /> : <ImageIcon size={34} />}
            <span className="text-xs font-medium uppercase tracking-wide text-background/90">
              {src ? t("portfolio.previewUnavailable") : (label ?? t("portfolio.mediahint"))}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
