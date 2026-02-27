"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectBySlug } from "@/lib/projects"

export const runtime = "edge"

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

  return <ProjectDetail project={project} />
}
