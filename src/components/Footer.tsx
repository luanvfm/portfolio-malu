import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  const { t } = useI18n();
  const channels = [
    { icon: Mail, label: t("contact.email"), href: CONTACT.emailHref },
    { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin },
    { icon: Instagram, label: "Instagram", href: CONTACT.instagram },
  ];

  return (
    <footer className="journal-footer bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
        <Link to="/" className="brand-lockup inline-flex w-fit items-center gap-3 rounded-sm">
          <span className="flex h-11 w-9 items-center justify-center rounded-sm bg-background">
            <BrandMark className="h-9 w-7" />
          </span>
          <span className="brand-wordmark font-display text-xl tracking-tight">Malu Informa</span>
        </Link>

        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <h2 className="max-w-[24ch] font-display text-2xl leading-snug md:text-3xl">
            {t("footer.title")}
          </h2>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <a
              href={CONTACT.emailHref}
              className="journal-footer-cta journal-button journal-button-salmon"
            >
              {t("footer.cta")}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <div className="flex items-center gap-1">
              {channels
                .filter((channel) => channel.href)
                .map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10 hover:text-accent"
                  >
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </a>
                ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-primary-foreground/75">
          © {new Date().getFullYear()} Maria Luiza. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
