"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { projects, getCategoryLabel, type Project } from "@/lib/projects"
import { ProjectCard } from "./project-card"
import {
  Clock3,
  Layers,
  CheckCircle2,
  Circle,
  CircleCheckBig,
  CircleDotDashed,
} from "lucide-react"

type PlanStage = "todo" | "inProgress" | "done"

const PLAN_STAGE_STYLE: Record<
  PlanStage,
  {
    line: string
    rail: string
    dot: string
    pill: string
    Icon: typeof Circle
  }
> = {
  done: {
    line: "border-l border-emerald-500/45",
    rail: "bg-emerald-500/80",
    dot: "bg-emerald-500",
    pill: "border-emerald-500/35 bg-emerald-500/10 text-emerald-800",
    Icon: CircleCheckBig,
  },
  inProgress: {
    line: "border-l border-sky-500/55",
    rail: "bg-sky-500/85",
    dot: "bg-sky-500",
    pill: "border-sky-500/35 bg-sky-500/10 text-sky-800",
    Icon: CircleDotDashed,
  },
  todo: {
    line: "border-l border-slate-400/70",
    rail: "bg-slate-400/85",
    dot: "bg-slate-400",
    pill: "border-slate-300 bg-slate-100 text-slate-700",
    Icon: Circle,
  },
}

function getPlanStage(project: Project, firstActiveOrder: number | null): PlanStage {
  if (project.currentStatus === "implementationDesign") return "inProgress"
  if (firstActiveOrder !== null && project.implementationOrder < firstActiveOrder) return "done"
  return "todo"
}

export function HomePage() {
  const { t, locale } = useI18n()
  const orderedProjects = [...projects].sort(
    (a, b) => a.implementationOrder - b.implementationOrder
  )
  const implementationDesignProjects = orderedProjects.filter(
    (p) => p.currentStatus === "implementationDesign"
  )
  const firstActiveOrder = implementationDesignProjects.length
    ? Math.min(...implementationDesignProjects.map((p) => p.implementationOrder))
    : null
  const nextCompletionProject = orderedProjects.find(
    (p) => p.estimatedCompletion !== "tbd"
  )
  const nextCompletionLabel = nextCompletionProject
    ? t(`completion.${nextCompletionProject.estimatedCompletion}`)
    : t("completion.tbd")

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-16 md:py-20">
        <Image
          src="/images/hero-heights.png"
          alt="Heights Streetscape Plan future state rendering"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl">
          <div className="inline-block max-w-2xl rounded-md border border-white/40 bg-white/82 px-3 py-2 shadow-sm backdrop-blur-[1px]">
            <h1 className="font-serif text-3xl font-bold leading-tight text-balance text-slate-950 md:text-4xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-2 text-base leading-relaxed text-slate-900/90 text-pretty md:text-lg">
              {t("home.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Utility band */}
      <section className="px-4 py-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
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
              icon={<Clock3 className="h-4 w-4" />}
              label={t("home.snapshot.nextCompletion")}
              value={nextCompletionLabel}
            />
          </div>
        </div>
      </section>

      {/* Disclaimer strip */}
      <section className="border-b border-border px-4 pb-3">
        <div className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground">
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
        </div>
      </section>

      {/* Sequence roadmap */}
      <section id="project-sequence" className="border-b border-border bg-card px-4 py-8 scroll-mt-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground">
            {t("project.sequence")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("home.sequence.subtitle")}
          </p>

          <div className="mt-4 flex flex-col gap-2.5">
            {orderedProjects.map((project) => {
              const stage = getPlanStage(project, firstActiveOrder)
              const style = PLAN_STAGE_STYLE[stage]
              const StageIcon = style.Icon

              return (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  className={`group relative overflow-hidden flex items-start gap-2.5 rounded-lg border border-border bg-background px-2.5 py-2.5 transition-colors hover:border-primary/40 hover:bg-accent/40 sm:items-center sm:gap-3 sm:px-3 ${style.line}`}
                >
                  <span className={`absolute inset-y-0 left-0 w-1.5 ${style.rail}`} aria-hidden="true" />
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
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${style.pill}`}>
                        <StageIcon className="h-2.5 w-2.5" />
                        {t(`home.sequence.stage.${stage}`)}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {t("project.estimatedCompletion")}:{" "}
                        {t(`completion.${project.estimatedCompletion}`)}
                      </span>
                    </div>
                  </div>
                  <div className="hidden shrink-0 flex-col items-end gap-1 text-right sm:flex">
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${style.pill}`}>
                      <StageIcon className="h-2.5 w-2.5" />
                      {t(`home.sequence.stage.${stage}`)}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {t("project.estimatedCompletion")}:{" "}
                      {t(`completion.${project.estimatedCompletion}`)}
                    </span>
                  </div>
                </Link>
              )
            })}
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
    <span className="inline-flex items-center gap-1.5">
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-semibold text-foreground">{value}</span>
    </span>
  )
}
