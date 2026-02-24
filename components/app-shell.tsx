"use client"

import { I18nProvider } from "@/lib/i18n"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </I18nProvider>
  )
}
