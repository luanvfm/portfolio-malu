import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";
import { BrandMark } from "@/components/BrandMark";
import { HighlightedText } from "@/components/HighlightedText";

export function Footer() {
  const { t } = useI18n();
  const channels = [
    { icon: Mail, label: t("contact.email"), href: CONTACT.emailHref },
    { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin },
    { icon: Instagram, label: "Instagram", href: CONTACT.instagram },
  ];

  return (
    <footer className="journal-footer">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-10 text-center md:py-12">
        <Link to="/" className="brand-lockup inline-flex items-center gap-2.5 rounded-sm">
          <BrandMark className="h-10 w-8" />
          <span className="brand-wordmark font-display text-xl tracking-tight">Malu Informa</span>
        </Link>

        <h2 className="journal-footer-title mt-6">
          <HighlightedText text={t("footer.title")} />
        </h2>

        <div className="mt-6 flex items-center gap-3">
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
                className="journal-footer-channel inline-flex h-11 w-11 items-center justify-center rounded-full"
              >
                <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
              </a>
            ))}
        </div>
        <a href={CONTACT.emailHref} className="journal-footer-cta journal-button mt-4">
          {t("footer.cta")}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <p className="mt-4 max-w-[45ch] text-balance text-sm leading-relaxed">
          <HighlightedText text={t("footer.description")} />
        </p>

        <p className="mt-8 text-xs text-primary/80">
          © {new Date().getFullYear()} Maria Luiza. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
