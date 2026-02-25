"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { projects, getCategoryLabel } from "@/lib/projects"
import { ProjectCard } from "./project-card"
import { ListOrdered, Clock3, Layers, CheckCircle2 } from "lucide-react"

export function HomePage() {
  const { t, locale } = useI18n()
  const orderedProjects = [...projects].sort(
    (a, b) => a.implementationOrder - b.implementationOrder
  )
  const implementationDesignProjects = orderedProjects.filter(
    (p) => p.currentStatus === "implementationDesign"
  )
  const conceptualDesignProjects = orderedProjects.filter(
    (p) => p.currentStatus === "conceptualDesign"
  )
  const nextCompletionProject = orderedProjects.find(
    (p) => p.estimatedCompletion !== "tbd"
  )
  const nextCompletionLabel = nextCompletionProject
    ? t(`completion.${nextCompletionProject.estimatedCompletion}`)
    : t("completion.tbd")

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-16 text-primary-foreground md:py-20">
        <Image
          src="/images/hero-heights.png"
          alt="Heights Streetscape Plan future state rendering"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-900/15 to-transparent" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl font-bold leading-tight text-balance md:text-4xl">
            {t("home.hero.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/90 text-pretty md:text-lg">
            {t("home.hero.subtitle")}
          </p>
          <p className="mt-3 max-w-2xl rounded-md border border-white/30 bg-black/45 px-3 py-2 text-xs leading-relaxed text-primary-foreground/95">
            {t("site.disclaimer")}{" "}
            <Link
              href="https://cityofhoodriver.gov/urban-renewal/heights/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-2"
            >
              {t("site.officialLinkLabel")}
            </Link>
            .
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
            <SnapshotItem
              icon={<Layers className="h-4 w-4" />}
              label={t("home.snapshot.totalProjects")}
              value={String(orderedProjects.length)}
            />
            <SnapshotItem
              icon={<CheckCircle2 className="h-4 w-4" />}
              label={t("home.snapshot.implementationDesign")}
              value={String(implementationDesignProjects.length)}
            />
            <SnapshotItem
              icon={<ListOrdered className="h-4 w-4" />}
              label={t("home.snapshot.conceptualDesign")}
              value={String(conceptualDesignProjects.length)}
            />
            <SnapshotItem
              icon={<Clock3 className="h-4 w-4" />}
              label={t("home.snapshot.nextCompletion")}
              value={nextCompletionLabel}
            />
          </div>
        </div>
      </section>

      {/* Sequence roadmap */}
      <section className="border-b border-border bg-card px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground">
            {t("project.sequence")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("home.sequence.subtitle")}
          </p>

          <div className="mt-4 flex flex-col gap-2.5">
            {orderedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="group flex items-start gap-2.5 rounded-lg border border-border bg-background px-2.5 py-2.5 transition-colors hover:border-primary/40 hover:bg-accent/40 sm:items-center sm:gap-3 sm:px-3"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded border border-border bg-muted/40 sm:h-24 sm:w-36">
                  <Image
                    src={project.image ?? "/placeholder.svg"}
                    alt={project[locale].name}
                    fill
                    className={project.image ? "object-cover" : "object-contain p-1"}
                    sizes="(max-width: 640px) 112px, 144px"
                  />
                </div>
                <div className="relative h-20 w-12 shrink-0 overflow-hidden rounded border border-border bg-muted/25 sm:h-24 sm:w-16">
                  <Image
                    src={project.sitemapImage ?? "/placeholder.svg"}
                    alt={`${project[locale].name} ${t("project.sitemapTitle").toLowerCase()}`}
                    fill
                    className={project.sitemapImage ? "object-contain p-0.5" : "object-contain p-1"}
                    sizes="(max-width: 640px) 48px, 64px"
                  />
                </div>
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-foreground sm:h-7 sm:w-7 sm:text-xs">
                  {project.implementationOrder}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary sm:line-clamp-1">
                    {project[locale].name}
                  </p>
                  <p className="line-clamp-1 text-xs text-muted-foreground">
                    {getCategoryLabel(project.category, locale)}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-1 sm:hidden">
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-foreground">
                      {t(`status.${project.currentStatus}`)}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {t(`completion.${project.estimatedCompletion}`)}
                    </span>
                  </div>
                </div>
                <div className="hidden shrink-0 flex-col items-end gap-1 text-right sm:flex">
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-foreground">
                    {t(`status.${project.currentStatus}`)}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {t(`completion.${project.estimatedCompletion}`)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Active projects */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground">
            {t("home.active.title")}
          </h2>
          <p className="mt-1 mb-4 text-sm text-muted-foreground">
            {t("home.active.subtitle")}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {implementationDesignProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {implementationDesignProjects.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              {t("home.active.empty")}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

function SnapshotItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-md border border-white/30 bg-black/50 px-2.5 py-2">
      <div className="flex items-center gap-1.5 text-primary-foreground/90">
        {icon}
        <span className="text-[11px] leading-tight">{label}</span>
      </div>
      <span className="mt-1 block text-sm font-semibold text-primary-foreground">
        {value}
      </span>
    </div>
  )
}
