"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { LanguageToggle } from "./language-toggle"
import { AccessibilityControls } from "./accessibility-controls"
import { MapPin } from "lucide-react"

export function SiteHeader() {
  const { t } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto max-w-3xl px-4 py-3">
        {/* Mobile: logo on top row, controls on bottom row
            sm+:   single row with logo left, controls right    */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 no-underline"
            aria-label={t("site.title")}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary"
              aria-hidden="true"
            >
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight text-foreground">
                {t("site.title")}
              </span>
              <span className="text-xs leading-tight text-muted-foreground">
                {t("site.subtitle")}
              </span>
            </div>
          </Link>

          <div className="flex items-center justify-end gap-2 sm:justify-normal">
            <AccessibilityControls />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
