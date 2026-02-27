"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { MapPin } from "lucide-react"

export function SiteFooter() {
  const { t, locale } = useI18n()
  const lastUpdated = new Date("2026-02-26")
  const formattedLastUpdated = new Intl.DateTimeFormat(
    locale === "es" ? "es-US" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  ).format(lastUpdated)

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <MapPin className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              {t("site.title")}
            </span>
            <span className="text-xs text-muted-foreground">
              {t("site.subtitle")}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          {t("footer.info")}
        </p>
        <p className="mb-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-900">
          {t("site.disclaimer")}{" "}
          <Link
            href="https://cityofhoodriver.gov/urban-renewal/heights/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            {t("site.officialLinkLabel")}
          </Link>
          .
        </p>
        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
          <p>{t("footer.adopted")}</p>
          <p>{t("footer.updated")}: {formattedLastUpdated}</p>
          <p>{t("footer.contact")}</p>
        </div>
      </div>
    </footer>
  )
}
