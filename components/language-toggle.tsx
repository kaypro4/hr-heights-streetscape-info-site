"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "es" : "en")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      aria-label={`Switch language to ${locale === "en" ? "Spanish" : "English"}`}
      className="gap-1.5 text-sm font-medium"
    >
      <Globe className="h-4 w-4" />
      <span>{t("lang.toggle")}</span>
    </Button>
  )
}
