"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { LanguageToggle } from "./language-toggle"
import { AccessibilityControls } from "./accessibility-controls"

export function SiteHeader() {
  const { t } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* City identity bar */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-1.5">
          <span className="text-xs font-semibold text-primary-foreground">
            {t("nav.cityBar")}
          </span>
          <Link
            href="https://cityofhoodriver.gov"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            {t("nav.cityBarLink")} ↗
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        {/* Logo — takes remaining space, title wraps as needed */}
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2.5 no-underline"
          aria-label={t("site.title")}
        >
          <div className="shrink-0" aria-hidden="true">
            <Image
              src="/city-logo-header.png"
              alt=""
              width={89}
              height={47}
              className="h-[47px] w-auto"
              priority
            />
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
      {/* Breadcrumb back to city Heights page */}
      <div className="border-t border-border/50 bg-card/95">
        <div className="mx-auto max-w-3xl px-4 py-1">
          <Link
            href="https://cityofhoodriver.gov/urban-renewal/heights/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {t("nav.cityHeights")}
          </Link>
        </div>
      </div>
    </header>
  )
}
