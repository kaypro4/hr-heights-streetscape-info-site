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
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        {/* Logo — takes remaining space, title wraps as needed */}
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2.5 no-underline"
          aria-label={t("site.title")}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary"
            aria-hidden="true"
          >
            <MapPin className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold leading-tight text-foreground">
              {t("site.title")}
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              {t("site.subtitle")}
            </span>
          </div>
        </Link>

        {/* Controls — fixed width, never shrink */}
        <div className="flex shrink-0 items-center gap-2">
          <AccessibilityControls />
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
