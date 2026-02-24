"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { type Project, getCategoryLabel } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, DollarSign } from "lucide-react"

interface ProjectCardProps {
  project: Project
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const { locale, t } = useI18n()
  const data = project[locale]
  const categoryLabel = getCategoryLabel(project.category, locale)

  const categoryColorMap: Record<string, string> = {
    pedestrian: "bg-accent text-accent-foreground",
    circulation: "bg-primary text-primary-foreground",
    fillBlocks: "bg-secondary text-secondary-foreground",
  }

  if (compact) {
    return (
      <Link href={`/project/${project.slug}`} className="block no-underline">
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{data.name}</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                className={categoryColorMap[project.category]}
                variant="secondary"
              >
                {categoryLabel}
              </Badge>
              {project.streets.length > 0 && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {project.streets.join(", ")}
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Card className="flex flex-col overflow-hidden gap-0 p-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/40">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${data.name} - ${t("project.futureState")}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <Image
            src="/placeholder.svg"
            alt={`${data.name} placeholder`}
            fill
            className="object-contain p-8 opacity-70"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {project.image && (
          <div className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
            {t("project.futureState")}
          </div>
        )}
      </div>
      <CardHeader>
        <div className="mb-2">
          <Badge
            className={categoryColorMap[project.category]}
            variant="secondary"
          >
            {categoryLabel}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-snug">{data.name}</CardTitle>
        <CardDescription className="leading-relaxed line-clamp-3">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 flex-1">
        {project.streets.length > 0 && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{project.streets.join(", ")}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4 shrink-0" />
          <span>{project.costRange}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-muted-foreground">
            {t("project.priority")}:
          </span>
          <div className="flex gap-0.5" aria-label={`Priority level ${project.priorityLevel} of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-4 rounded-sm ${
                  i < project.priorityLevel
                    ? "bg-primary"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-6">
        <Button asChild variant="default" className="w-full">
          <Link href={`/project/${project.slug}`}>
            {t("nav.viewProject")}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
