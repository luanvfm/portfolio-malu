import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const focusStyle =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);
  const navLabel = lang === "pt" ? "Navegação principal" : "Main navigation";

  useEffect(
    () =>
      router.subscribe("onResolved", ({ fromLocation, pathChanged }) => {
        if (fromLocation && pathChanged) setOpen(false);
      }),
    [router],
  );

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/sobre", label: t("nav.about") },
    { to: "/portfolio", label: t("nav.portfolio") },
    { to: "/contato", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-3">
        <Link
          to="/"
          className={`flex min-h-11 shrink-0 items-center gap-2 rounded-sm ${focusStyle}`}
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary font-display text-lg text-primary-foreground"
            aria-hidden="true"
          >
            M
          </span>
          <span className="font-display text-lg leading-none text-primary">Maria Luiza</span>
        </Link>

        <nav aria-label={navLabel} className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${focusStyle}`}
              activeProps={{
                className:
                  "text-primary underline decoration-accent decoration-2 underline-offset-8",
                "aria-current": "page",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
          <Link
            to="/contato"
            className={`inline-flex min-h-11 items-center rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/80 active:bg-accent/70 ${focusStyle}`}
          >
            {t("nav.cta")}
          </Link>
        </nav>

        <button
          ref={menuButton}
          type="button"
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-primary transition-colors hover:bg-muted active:bg-muted lg:hidden ${focusStyle}`}
          onClick={() => setOpen((v) => !v)}
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={
            lang === "pt"
              ? open
                ? "Fechar menu"
                : "Abrir menu"
              : open
                ? "Close menu"
                : "Open menu"
          }
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id={menuId} hidden={!open} className="border-t border-border/60 bg-background lg:hidden">
        <nav aria-label={navLabel} className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`inline-flex min-h-11 items-center rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary ${focusStyle}`}
              activeProps={{
                className: "bg-muted text-primary",
                "aria-current": "page",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-3 pt-3">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: "pt" | "en"; setLang: (l: "pt" | "en") => void }) {
  return (
    <div
      role="group"
      aria-label={lang === "pt" ? "Idioma do site" : "Site language"}
      className="inline-flex rounded-sm border border-border text-xs font-semibold"
    >
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={l === "pt" ? "Português" : "English"}
          lang={l === "pt" ? "pt-BR" : "en"}
          className={
            `relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm px-2.5 py-2 uppercase transition-colors focus-visible:z-10 ${focusStyle} ` +
            (lang === l
              ? "bg-primary text-primary-foreground"
              : "bg-transparent text-muted-foreground hover:bg-muted hover:text-primary")
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}
