import { HighlightedText } from "@/components/HighlightedText";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Malu Informa" },
      {
        name: "description",
        content:
          "Fale comigo sobre reportagens, coberturas e parcerias. Me encontre por e-mail, LinkedIn e Instagram @malu.informa.",
      },
      { property: "og:title", content: "Contato | Malu Informa" },
      {
        property: "og:description",
        content: "Me encontre por e-mail, LinkedIn e no Instagram @malu.informa.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();

  const cards = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: CONTACT.email,
      href: CONTACT.emailHref,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: t("contact.linkedin"),
      href: CONTACT.linkedin,
    },
    {
      icon: Instagram,
      label: t("contact.instagram"),
      value: CONTACT.instagramHandle,
      href: CONTACT.instagram,
    },
  ];
  const availableCards = cards.filter((card) => Boolean(card.href));

  return (
    <div className="journal-contact relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-28">
        <Reveal className="text-center">
          <h1 className="font-display text-4xl text-primary md:text-5xl">{t("contact.title")}</h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            <HighlightedText text={t("contact.subtitle")} />
          </p>
        </Reveal>

        <div
          className={`mt-12 grid gap-4 ${availableCards.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
        >
          {availableCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="journal-contact-card group flex h-full flex-col rounded-sm bg-card p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary/15 text-secondary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <c.icon size={22} />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.label}
                </span>
                <span className="mt-1 flex min-w-0 items-start gap-1 font-display text-lg text-primary">
                  <span className="min-w-0 [overflow-wrap:anywhere]">{c.value}</span>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
