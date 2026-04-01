"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="flex items-center gap-2.5 mb-4">
          <Image
            src="/city-logo-header.png"
            alt=""
            width={67}
            height={35}
            className="h-[35px] w-auto"
          />
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
        <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
          {t("footer.accessibility")}
        </p>
      </div>
    </footer>
  )
}
