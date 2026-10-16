import { createFileRoute } from "@tanstack/react-router";
import { useI18n, type DictKey } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ProfessionalPortrait } from "@/components/ProfessionalPortrait";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mim | Malu Informa" },
      {
        name: "description",
        content:
          "Conheça minha trajetória na BetoCastTV, Mosaico Esportivo, TVNova e Federação Pernambucana de Futsal.",
      },
      { property: "og:title", content: "Sobre Mim | Malu Informa" },
      {
        property: "og:description",
        content: "Minha trajetória no jornalismo esportivo e cultural de Pernambuco.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const timeline: { t: DictKey; d: DictKey; href?: string }[] = [
    { t: "tl.1.t", d: "tl.1.d", href: "https://www.instagram.com/betocastv/" },
    {
      t: "tl.4.t",
      d: "tl.4.d",
      href: "https://www.instagram.com/mosaico.esportivo_/",
    },
    { t: "tl.2.t", d: "tl.2.d" },
    {
      t: "tl.3.t",
      d: "tl.3.d",
      href: "https://www.instagram.com/futsalpeoficial/",
    },
  ];

  return (
    <div className="journal-about mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <div className="relative md:sticky md:top-28">
            <ProfessionalPortrait />
          </div>
        </Reveal>
        <div>
          <Reveal className="journal-page-heading">
            <h1 className="font-display text-4xl text-primary md:text-5xl">{t("about.title")}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t("about.p2")}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-12 font-display text-2xl text-primary">{t("about.timeline")}</h2>
            <ol className="journal-timeline mt-6 space-y-6 pl-9">
              {timeline.map((item) => (
                <li
                  key={item.t}
                  className="relative after:absolute after:-bottom-9 after:-left-[29px] after:top-3 after:w-0.5 after:bg-border last:after:hidden"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-9 top-1 z-10 h-4 w-4 rounded-full border-2 border-accent bg-background"
                  />
                  <h3 className="font-display text-lg text-primary">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {t(item.t)}
                      </a>
                    ) : (
                      t(item.t)
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t(item.d)}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
