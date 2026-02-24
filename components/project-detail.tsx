"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import {
  type Project,
  getCategoryLabel,
  projects,
} from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  DollarSign,
  CheckCircle2,
  Target,
  Wrench,
} from "lucide-react"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale, t } = useI18n()
  const data = project[locale]
  const categoryLabel = getCategoryLabel(project.category, locale)

  const categoryColorMap: Record<string, string> = {
    pedestrian: "bg-accent text-accent-foreground",
    circulation: "bg-primary text-primary-foreground",
    fillBlocks: "bg-secondary text-secondary-foreground",
  }

  const complexityLabel =
    project.complexityLevel <= 2
      ? t("complexity.low")
      : project.complexityLevel <= 3
        ? t("complexity.medium")
        : t("complexity.high")
  const currentStatusLabel = t(`status.${project.currentStatus}`)
  const estimatedCompletionLabel = t(`completion.${project.estimatedCompletion}`)

  const orderedProjects = [...projects].sort(
    (a, b) => a.implementationOrder - b.implementationOrder
  )
  const currentProjectIndex = orderedProjects.findIndex(
    (p) => p.id === project.id
  )
  const previousProject =
    currentProjectIndex > 0
      ? orderedProjects[currentProjectIndex - 1]
      : undefined
  const nextProject =
    currentProjectIndex < orderedProjects.length - 1
      ? orderedProjects[currentProjectIndex + 1]
      : undefined

  return (
    <div className="flex flex-col">
      {/* Back nav */}
      <div className="border-b border-border bg-card px-4 py-3">
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="ghost" size="sm" className="gap-1.5">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              {t("nav.back")}
            </Link>
          </Button>
        </div>
      </div>

      {/* Project header */}
      <section className="bg-primary px-4 py-8 text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <Badge
            className={`${categoryColorMap[project.category]} mb-3`}
            variant="secondary"
          >
            {categoryLabel}
          </Badge>
          <h1 className="font-serif text-2xl font-bold leading-tight text-balance md:text-3xl">
            {data.name}
          </h1>

          {/* Location and cost */}
          <div className="mt-4 flex flex-wrap gap-4">
            {project.streets.length > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-primary-foreground/85">
                <MapPin className="h-4 w-4" />
                <span>{project.streets.join(", ")}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-sm text-primary-foreground/85">
              <DollarSign className="h-4 w-4" />
              <span>
                {t("project.cost")}: {project.costRange}
              </span>
            </div>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2">
              <p className="text-[11px] uppercase tracking-wide text-primary-foreground/70">
                {t("project.currentStatus")}
              </p>
              <p className="text-sm font-semibold text-primary-foreground">
                {currentStatusLabel}
              </p>
            </div>
            <div className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2">
              <p className="text-[11px] uppercase tracking-wide text-primary-foreground/70">
                {t("project.estimatedCompletion")}
              </p>
              <p className="text-sm font-semibold text-primary-foreground">
                {estimatedCompletionLabel}
              </p>
            </div>
          </div>

          {/* Priority and complexity indicators */}
          <div className="mt-4 flex flex-wrap gap-6">
            <div>
              <span className="text-xs text-primary-foreground/70">
                {t("project.priority")}
              </span>
              <div
                className="mt-1 flex gap-1"
                aria-label={`Priority level ${project.priorityLevel} of 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2.5 w-5 rounded-sm ${
                      i < project.priorityLevel
                        ? "bg-primary-foreground"
                        : "bg-primary-foreground/25"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs text-primary-foreground/70">
                {t("project.complexity")}
              </span>
              <p className="mt-1 text-sm font-medium">{complexityLabel}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-gradient-to-b from-card to-muted/20 px-4 py-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {t("project.sequence")}
          </h2>
          <div
            className="mb-3 flex flex-wrap items-center justify-center gap-1.5"
            aria-label={`Project ${project.implementationOrder} of ${orderedProjects.length}`}
          >
            {orderedProjects.map((p) => (
              <span key={p.id} className="group relative inline-flex">
                <span
                  className={`h-3.5 w-3.5 rounded-full ${
                    p.id === project.id
                      ? "bg-primary ring-2 ring-primary/30"
                      : p.implementationOrder < project.implementationOrder
                        ? "bg-primary/60"
                        : "bg-muted-foreground/35"
                  }`}
                />
                <span className="pointer-events-none absolute -top-8 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-[10px] font-medium text-background shadow-sm group-hover:block">
                  {p[locale].name}
                </span>
              </span>
            ))}
            <span className="ml-1 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              #{project.implementationOrder}/{orderedProjects.length}
            </span>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {previousProject ? (
              <Link
                href={`/project/${previousProject.slug}`}
                className="block rounded-md border border-border bg-background/80 p-2 transition-colors hover:border-primary/40 hover:bg-background"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("project.sequencePrevious")}
                </p>
                <p className="flex items-start gap-1.5 text-sm font-medium leading-snug text-foreground/85">
                  <ArrowLeft className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>
                    #{previousProject.implementationOrder} {previousProject[locale].name}
                  </span>
                </p>
              </Link>
            ) : (
              <div className="rounded-md border border-border bg-background/80 p-2">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("project.sequencePrevious")}
                </p>
                <p className="text-sm leading-snug text-muted-foreground">
                  {t("project.sequenceStart")}
                </p>
              </div>
            )}

            <div className="rounded-md border border-primary/70 bg-primary/10 p-2">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                {t("project.sequenceCurrent")}
              </p>
              <p className="text-sm font-semibold leading-snug text-foreground">
                #{project.implementationOrder} {data.name}
              </p>
            </div>

            {nextProject && (
              <Link
                href={`/project/${nextProject.slug}`}
                className="block rounded-md border border-border bg-background/80 p-2 transition-colors hover:border-primary/40 hover:bg-background"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("project.sequenceNext")}
                </p>
                <p className="flex items-start gap-1.5 text-sm font-medium leading-snug text-foreground/85">
                  <span>
                    #{nextProject.implementationOrder} {nextProject[locale].name}
                  </span>
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>

      {project.image && (
        <section className="bg-card px-4 py-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t("project.futureStateTitle")}
            </h2>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border">
              <Image
                src={project.image}
                alt={`${data.name} - ${t("project.futureState")}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute left-3 top-3 rounded bg-black/70 px-2.5 py-1 text-xs font-medium text-white">
                {t("project.futureState")}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Details */}
      <section className="px-4 py-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="h-4 w-4 text-primary" />
                {t("project.description")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-foreground">
                {data.description}
              </p>
            </CardContent>
          </Card>

          {/* Rationale */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Wrench className="h-4 w-4 text-primary" />
                {t("project.rationale")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-foreground">
                {data.rationale}
              </p>
            </CardContent>
          </Card>

          {/* Key features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {t("project.features")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2.5">
                {data.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground"
                  >
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                {t("project.goals")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {data.goals.map((goal, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs font-normal"
                  >
                    {goal}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Intersections if any */}
          {project.intersections.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <MapPin className="h-4 w-4 text-primary" />
                  {t("project.location")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.intersections.map((intersection, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {intersection}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section className="border-t border-border bg-card px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              {t("nav.home")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
