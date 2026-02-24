"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { projects, type ProjectCategory } from "@/lib/projects"
import { ProjectCard } from "./project-card"
import { ProjectFilter } from "./project-filter"
import { MapPin, Users, Shield, Bike } from "lucide-react"

type FilterValue = "all" | ProjectCategory

export function HomePage() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<FilterValue>("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary px-4 py-10 text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-3xl font-bold leading-tight text-balance md:text-4xl">
            {t("home.hero.title")}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-primary-foreground/85 text-pretty md:text-lg">
            {t("home.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Goals strip */}
      <section className="border-b border-border bg-card px-4 py-6">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <GoalItem
              icon={<Users className="h-5 w-5" />}
              label={t("goal.livable")}
            />
            <GoalItem
              icon={<Shield className="h-5 w-5" />}
              label={t("goal.traffic")}
            />
            <GoalItem
              icon={<MapPin className="h-5 w-5" />}
              label={t("goal.identity")}
            />
            <GoalItem
              icon={<Bike className="h-5 w-5" />}
              label={t("goal.safe")}
            />
          </div>
        </div>
      </section>

      {/* Projects listing */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <ProjectFilter active={filter} onChange={setFilter} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              {filter === "all"
                ? "No projects found."
                : "No projects in this category."}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

function GoalItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
        {icon}
      </div>
      <span className="text-xs font-medium leading-snug text-foreground">
        {label}
      </span>
    </div>
  )
}
