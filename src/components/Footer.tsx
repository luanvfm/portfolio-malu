import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";
import { BrandMark } from "@/components/BrandMark";
import { HighlightedText } from "@/components/HighlightedText";

export function Footer() {
  const { t } = useI18n();
  const [emailName, emailDomain] = CONTACT.email.split("@");
  return (
    <footer className="journal-footer bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-12">
          <div>
            <h2 className="max-w-[18ch] font-display text-3xl leading-[1.15] md:text-[2.5rem]">
              {t("footer.title")}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/85">
              <HighlightedText text={t("footer.description")} />
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href={CONTACT.emailHref}
              className="journal-footer-cta journal-button journal-button-salmon group"
            >
              {t("footer.cta")}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="mr-1 text-sm text-primary-foreground/85">{t("footer.social")}</span>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin size={19} aria-hidden="true" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-primary-foreground/20 pt-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="brand-lockup inline-flex w-fit items-center gap-3 rounded-sm">
            <span className="flex h-12 w-10 items-center justify-center rounded-sm bg-background">
              <BrandMark className="h-10 w-8" />
            </span>
            <span className="brand-wordmark font-display text-xl tracking-tight">Malu Informa</span>
          </Link>
          <a
            href={CONTACT.emailHref}
            className="journal-footer-email inline-flex min-h-11 items-center gap-2 text-sm text-primary-foreground/90 underline-offset-4 hover:underline"
          >
            <Mail size={17} aria-hidden="true" className="shrink-0" />
            <span className="[overflow-wrap:anywhere]">
              {emailName}
              <wbr />@{emailDomain}
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-primary-foreground/75">
          © {new Date().getFullYear()} Maria Luiza. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
