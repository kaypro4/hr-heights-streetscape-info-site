"use client"

import { useA11y, type TextSize } from "@/lib/a11y"
import { useI18n } from "@/lib/i18n"
import { Contrast } from "lucide-react"

const TEXT_SIZES: { size: TextSize; display: string }[] = [
  { size: "normal", display: "A" },
  { size: "large",  display: "A+" },
  { size: "larger", display: "A++" },
]

export function AccessibilityControls() {
  const { textSize, setTextSize, highContrast, toggleHighContrast } = useA11y()
  const { t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t("a11y.controls.label")}
      className="flex items-center gap-0.5"
    >
      {/* Text-size buttons: hidden on mobile to keep the header compact */}
      <div className="hidden items-center gap-0.5 sm:flex">
        {TEXT_SIZES.map(({ size, display }) => {
          const active = textSize === size
          return (
            <button
              key={size}
              type="button"
              onClick={() => setTextSize(size)}
              aria-pressed={active}
              aria-label={t(`a11y.textSize.${size}`)}
              title={t(`a11y.textSize.${size}`)}
              className={`inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded px-1 text-[11px] font-bold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              <span aria-hidden="true">{display}</span>
            </button>
          )
        })}
        <div className="mx-1 h-4 w-px bg-border" aria-hidden="true" />
      </div>

      <button
        type="button"
        onClick={toggleHighContrast}
        aria-pressed={highContrast}
        aria-label={
          highContrast
            ? t("a11y.highContrast.disable")
            : t("a11y.highContrast.enable")
        }
        title={
          highContrast
            ? t("a11y.highContrast.disable")
            : t("a11y.highContrast.enable")
        }
        className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring ${
          highContrast
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
        }`}
      >
        <Contrast className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
