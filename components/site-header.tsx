"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { LanguageToggle } from "./language-toggle"
import { MapPin } from "lucide-react"

export function SiteHeader() {
  const { t } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
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
        <div className="flex items-center gap-2">
          <Link
            href="https://cityofhoodriver.gov/urban-renewal/heights/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("nav.feedback")}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
