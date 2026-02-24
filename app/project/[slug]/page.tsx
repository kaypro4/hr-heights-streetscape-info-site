"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { AppShell } from "@/components/app-shell"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectBySlug } from "@/lib/projects"

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <AppShell>
      <ProjectDetail project={project} />
    </AppShell>
  )
}
