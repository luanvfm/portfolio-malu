import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { useI18n, CONTACT } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24">
      <div className="azulejo h-2 w-full" />
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2">
          <div>
            <p className="font-display text-2xl">Maria Luiza</p>
            <p className="mt-2 max-w-xs text-sm text-primary-foreground/70">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex gap-3">
              <a
                href={CONTACT.emailHref}
                aria-label="E-mail"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Mail size={18} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram size={18} />
              </a>
            </div>
            <Link to="/contato" className="text-sm text-primary-foreground/80 underline-offset-4 hover:underline">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Maria Luiza. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}