"use client"

import { useState } from "react"
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
  Expand,
  MapPin,
  CheckCircle2,
  Target,
  Wrench,
  X,
} from "lucide-react"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [isImageOpen, setIsImageOpen] = useState(false)
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
  const imageTagLabel = project.imageTag
    ? t(`project.imageTag.${project.imageTag}`)
    : ""
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

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {project.streets.length > 0 && (
              <div className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2">
                <p className="text-[11px] uppercase tracking-wide text-primary-foreground/70">
                  {t("project.location")}
                </p>
                <p className="text-sm font-semibold leading-snug text-primary-foreground">
                  {project.streets.join(", ")}
                </p>
              </div>
            )}
            <div className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2">
              <p className="text-[11px] uppercase tracking-wide text-primary-foreground/70">
                {t("project.cost")}
              </p>
              <p className="text-sm font-semibold text-primary-foreground">
                {project.costRange}
              </p>
            </div>
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
            <div className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2">
              <p className="text-[11px] uppercase tracking-wide text-primary-foreground/70">
                {t("project.priority")}
              </p>
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
            <div className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2">
              <p className="text-[11px] uppercase tracking-wide text-primary-foreground/70">
                {t("project.complexity")}
              </p>
              <p className="text-sm font-semibold text-primary-foreground">
                {complexityLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-gradient-to-b from-card to-muted/20 px-4 py-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
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
          <div className="grid gap-2 md:hidden">
            {previousProject ? (
              <Link
                href={`/project/${previousProject.slug}`}
                className="block rounded-md border border-border bg-background/80 p-2 transition-colors hover:border-primary/40 hover:bg-background"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("project.sequencePrevious")}
                </p>
                <p className="text-sm font-medium leading-snug text-foreground/85">
                  #{previousProject.implementationOrder} {previousProject[locale].name}
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
                <p className="text-sm font-medium leading-snug text-foreground/85">
                  #{nextProject.implementationOrder} {nextProject[locale].name}
                </p>
              </Link>
            )}
          </div>

          <div className="hidden md:grid md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-stretch md:gap-2">
            <div className="flex items-center justify-center">
              {previousProject && (
                <Link
                  href={`/project/${previousProject.slug}`}
                  aria-label={`${t("project.sequencePrevious")}: ${previousProject[locale].name}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              )}
            </div>

            {previousProject ? (
              <Link
                href={`/project/${previousProject.slug}`}
                className="block rounded-md border border-border bg-background/80 p-2 transition-colors hover:border-primary/40 hover:bg-background"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("project.sequencePrevious")}
                </p>
                <p className="text-sm font-medium leading-snug text-foreground/85">
                  #{previousProject.implementationOrder} {previousProject[locale].name}
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

            {nextProject ? (
              <Link
                href={`/project/${nextProject.slug}`}
                className="block rounded-md border border-border bg-background/80 p-2 transition-colors hover:border-primary/40 hover:bg-background"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("project.sequenceNext")}
                </p>
                <p className="text-sm font-medium leading-snug text-foreground/85">
                  #{nextProject.implementationOrder} {nextProject[locale].name}
                </p>
              </Link>
            ) : (
              <div />
            )}

            <div className="flex items-center justify-center">
              {nextProject && (
                <Link
                  href={`/project/${nextProject.slug}`}
                  aria-label={`${t("project.sequenceNext")}: ${nextProject[locale].name}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.image && (
        <section className="bg-card px-4 py-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t("project.imageTitle")}
            </h2>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border">
              <Image
                src={project.image}
                alt={imageTagLabel ? `${data.name} - ${imageTagLabel}` : data.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="absolute inset-0 cursor-zoom-in"
                aria-label={`${t("project.imageExpand")}: ${data.name}`}
              />
              {imageTagLabel && (
                <div className="absolute left-3 top-3 rounded bg-black/70 px-2.5 py-1 text-xs font-medium text-white">
                  {imageTagLabel}
                </div>
              )}
              <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/70 p-1.5 text-white">
                <Expand className="h-4 w-4" />
              </div>
            </div>
          </div>
        </section>
      )}

      {project.image && isImageOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
          <button
            type="button"
            className="absolute inset-0"
            onClick={() => setIsImageOpen(false)}
            aria-label={t("project.imageClose")}
          />
          <div className="relative z-10 h-[85vh] w-full max-w-6xl">
            <Image
              src={project.image}
              alt={imageTagLabel ? `${data.name} - ${imageTagLabel}` : data.name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black"
            aria-label={t("project.imageClose")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
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
