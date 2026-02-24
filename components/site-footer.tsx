"use client"

import { useI18n } from "@/lib/i18n"
import { MapPin } from "lucide-react"

export function SiteFooter() {
  const { t } = useI18n()

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
        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
          <p>{t("footer.adopted")}</p>
          <p>{t("footer.contact")}</p>
          <p className="mt-2">{t("footer.accessibility")}</p>
        </div>
      </div>
    </footer>
  )
}
