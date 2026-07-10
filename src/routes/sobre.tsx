import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Maria Luiza, Jornalista" },
      {
        name: "description",
        content:
          "Conheça Maria Luiza, jornalista pernambucana com atuação em esporte e cultura: BetoCastTV, TVNova e Federação Pernambucana de Futsal.",
      },
      { property: "og:title", content: "Sobre — Maria Luiza, Jornalista" },
      {
        property: "og:description",
        content: "Trajetória de Maria Luiza no jornalismo esportivo e cultural de Pernambuco.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const timeline = [
    { t: "tl.1.t" as const, d: "tl.1.d" as const },
    { t: "tl.2.t" as const, d: "tl.2.d" as const },
    { t: "tl.3.t" as const, d: "tl.3.d" as const },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <div className="relative md:sticky md:top-28">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-sm border-2 border-accent" />
            <MediaPlaceholder aspect="portrait" kind="image" label={t("about.photohint")} />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h1 className="font-display text-4xl text-primary md:text-5xl">
              {t("about.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("about.p1")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t("about.p2")}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-12 font-display text-2xl text-primary">
              {t("about.timeline")}
            </h2>
            <ol className="mt-6 space-y-6 border-l-2 border-border pl-6">
              {timeline.map((item, i) => (
                <li key={item.t} className="relative">
                  <span className="absolute -left-[1.72rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background" />
                  <h3 className="font-display text-lg text-primary">{t(item.t)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(item.d)}</p>
                  {i === timeline.length - 1 && null}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
