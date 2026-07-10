import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Maria Luiza, Jornalista" },
      {
        name: "description",
        content:
          "Entre em contato com Maria Luiza para reportagens, coberturas e parcerias. E-mail, LinkedIn e Instagram @malu.informa.",
      },
      { property: "og:title", content: "Contato — Maria Luiza, Jornalista" },
      {
        property: "og:description",
        content: "E-mail, LinkedIn e Instagram profissional de Maria Luiza.",
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
      value: "in/maria-luiza",
      href: CONTACT.linkedin,
    },
    {
      icon: Instagram,
      label: t("contact.instagram"),
      value: CONTACT.instagramHandle,
      href: CONTACT.instagram,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="azulejo absolute inset-0 opacity-[0.1]" />
      <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-28">
        <Reveal className="text-center">
          <h1 className="font-display text-4xl text-primary md:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary/15 text-secondary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <c.icon size={22} />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.label}
                </span>
                <span className="mt-1 flex items-center gap-1 font-display text-lg text-primary">
                  {c.value}
                  <ArrowUpRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
}
