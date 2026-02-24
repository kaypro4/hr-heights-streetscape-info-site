"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import type { ProjectCategory } from "@/lib/projects"

type FilterValue = "all" | ProjectCategory

interface ProjectFilterProps {
  active: FilterValue
  onChange: (filter: FilterValue) => void
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  const { t } = useI18n()

  const filters: { value: FilterValue; label: string }[] = [
    { value: "all", label: t("home.filter.all") },
    { value: "pedestrian", label: t("home.filter.pedestrian") },
    { value: "circulation", label: t("home.filter.circulation") },
    { value: "fillBlocks", label: t("home.filter.fillBlocks") },
  ]

  return (
    <nav aria-label="Project categories" className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={active === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(filter.value)}
          aria-pressed={active === filter.value}
          className="text-sm"
        >
          {filter.label}
        </Button>
      ))}
    </nav>
  )
}
