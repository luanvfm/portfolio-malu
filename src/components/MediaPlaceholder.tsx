import { ImageIcon, PlayCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function MediaPlaceholder({
  aspect = "video",
  label,
  kind = "image",
  className = "",
  src,
  alt = "",
}: {
  aspect?: "video" | "square" | "portrait";
  label?: string;
  kind?: "image" | "video";
  className?: string;
  src?: string;
  alt?: string;
}) {
  const { t } = useI18n();
  const ratio =
    aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square" : "aspect-[3/4]";
  return (
    <div
      className={`azulejo relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-sm ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-primary/25" />
          <div className="relative flex flex-col items-center gap-2 text-center text-background">
            {kind === "video" ? <PlayCircle size={40} /> : <ImageIcon size={34} />}
            <span className="text-xs font-medium uppercase tracking-wide text-background/90">
              {label ?? t("portfolio.mediahint")}
            </span>
          </div>
        </>
      )}
    </div>
  );
}