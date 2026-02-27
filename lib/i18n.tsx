"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

export type Locale = "en" | "es"

type TranslationValue = string | Record<string, string>
type Translations = Record<string, TranslationValue>

const translations: Record<Locale, Translations> = {
  en: {
    // Header
    "site.title": "Heights Streetscape Plan",
    "site.subtitle": "City of Hood River",
    "site.tagline": "Building Better Streets Together",
    "site.disclaimer": "This is not the official site. It is an independent, exploratory tool designed to help residents better understand the Heights plan, its projects, current status, and sequencing. For official information, visit the",
    "site.officialLinkLabel": "City of Hood River's Urban Renewal Agency page",

    // Navigation
    "nav.home": "All Projects",
    "nav.back": "Back to All Projects",
    "nav.viewProject": "View Details",
    "nav.feedback": "Plan/Project Feedback",

    // Home page
    "home.hero.title": "Heights Streetscape Plan",
    "home.hero.subtitle": "A comprehensive plan for improving the streets and intersections of the Heights neighborhood in Hood River, Oregon.",
    "home.hero.cta": "Explore Projects",
    "home.cta.sequence": "Explore Project Sequence",
    "home.snapshot.totalProjects": "Total Projects",
    "home.snapshot.implementationDesign": "In Implementation Design",
    "home.snapshot.conceptualDesign": "In Conceptual Design",
    "home.snapshot.nextCompletion": "Next Est. Completion",
    "home.sequence.subtitle": "Explore projects in planned implementation order.",
    "home.sequence.stage.todo": "To Do",
    "home.sequence.stage.inProgress": "In Progress",
    "home.sequence.stage.done": "Done",
    "home.active.title": "Active Now",
    "home.active.subtitle": "Projects currently in implementation design.",
    "home.active.empty": "No active implementation-design projects found.",
    "home.feedback.title": "Share Your Feedback",
    "home.feedback.body": "The City of Hood River wants to hear from residents. Share your thoughts on the Heights Streetscape Plan or specific projects.",
    "home.filter.all": "All Projects",
    "home.filter.pedestrian": "Pedestrian & Bicycle",
    "home.filter.circulation": "Key Circulation",
    "home.filter.fillBlocks": "Fill in the Blocks",

    // Project details
    "project.cost": "Estimated Cost",
    "project.currentStatus": "Current Status",
    "project.estimatedCompletion": "Estimated Completion",
    "project.category": "Category",
    "project.location": "Location",
    "project.description": "Description",
    "project.rationale": "Why This Project?",
    "project.features": "Key Features",
    "project.goals": "Community Goals Addressed",
    "project.complexity": "Project Complexity",
    "project.priority": "Community Priority",
    "project.otherProjects": "Other Projects in This Plan",
    "project.phase": "Implementation Phase",
    "project.sequence": "Project Implementation Sequence",
    "project.sequencePrevious": "Previous",
    "project.sequenceCurrent": "Current",
    "project.sequenceNext": "Next",
    "project.sequenceStart": "Start of sequence",
    "project.sequenceEnd": "End of sequence",
    "project.imageTitle": "Project Image",
    "project.sitemapTitle": "Project Sitemap",
    "project.imageExpand": "Expand image",
    "project.imageClose": "Close image",
    "project.imageTag.futureRendering": "Future Rendering",
    "project.imageTag.example": "Example",
    "project.imageTag.currentState": "Current State",
    "project.imageTag.design": "Design",

    // Categories
    "category.pedestrian": "Pedestrian & Bicycle Improvements",
    "category.circulation": "Key Circulation Projects",
    "category.fillBlocks": "Fill in the Blocks",

    // Goals
    "goal.livable": "Promote Livable Community & Economy",
    "goal.traffic": "Calm Traffic & Improve Intersections",
    "goal.identity": "Local Identity",
    "goal.safe": "Safe, Comfortable Streets for People",

    // Complexity
    "complexity.low": "Lower Complexity",
    "complexity.medium": "Moderate Complexity",
    "complexity.high": "Higher Complexity",

    // Timeline & Status
    "project.timeline": "Timeline & Current Status",
    "project.status": "Current Status",
    "project.gallery": "Project Images",
    "project.galleryClose": "Close Gallery",
    "timeline.complete": "Complete",
    "timeline.active": "In Progress",
    "timeline.upcoming": "Upcoming",
    "status.implementationDesign": "Implementation Design",
    "status.conceptualDesign": "Conceptual Design",
    "completion.spring2027": "Spring 2027",
    "completion.tbd": "TBD",

    // Footer
    "footer.info": "This project is part of the Heights Streetscape Plan, initiated by the City of Hood River and Urban Renewal Agency (URA) to establish a comprehensive plan for improving streets and intersections in the Heights neighborhood.",
    "footer.adopted": "Plan adopted December 2023",
    "footer.contact": "For official information and contacts, use the link above.",
    "footer.updated": "Site last updated",

    // Language
    "lang.toggle": "Espa\u00f1ol",
    "lang.current": "English",
  },
  es: {
    // Header
    "site.title": "Plan de Paisaje Urbano de Heights",
    "site.subtitle": "Ciudad de Hood River",
    "site.tagline": "Construyendo Mejores Calles Juntos",
    "site.disclaimer": "Este no es el sitio oficial. Es una herramienta exploratoria para comprender los proyectos del plan, su estado y secuencia.",
    "site.officialLinkLabel": "Pagina oficial de Heights de la Ciudad de Hood River",

    // Navigation
    "nav.home": "Todos los Proyectos",
    "nav.back": "Volver a Todos los Proyectos",
    "nav.viewProject": "Ver Detalles",
    "nav.feedback": "Comentarios del Plan/Proyecto",

    // Home page
    "home.hero.title": "Plan de Paisaje Urbano de Heights",
    "home.hero.subtitle": "Un plan integral para mejorar las calles e intersecciones del vecindario Heights en Hood River, Oreg\u00f3n.",
    "home.hero.cta": "Explorar Proyectos",
    "home.cta.sequence": "Explorar Secuencia de Proyectos",
    "home.snapshot.totalProjects": "Proyectos Totales",
    "home.snapshot.implementationDesign": "En Diseno de Implementacion",
    "home.snapshot.conceptualDesign": "En Diseno Conceptual",
    "home.snapshot.nextCompletion": "Proxima Finalizacion Estimada",
    "home.sequence.subtitle": "Explore los proyectos en el orden planificado de implementacion.",
    "home.sequence.stage.todo": "Por Hacer",
    "home.sequence.stage.inProgress": "En Progreso",
    "home.sequence.stage.done": "Listo",
    "home.active.title": "Activos Ahora",
    "home.active.subtitle": "Proyectos actualmente en diseno de implementacion.",
    "home.active.empty": "No se encontraron proyectos activos en diseno de implementacion.",
    "home.feedback.title": "Comparta sus Comentarios",
    "home.feedback.body": "La Ciudad de Hood River quiere escuchar a los residentes. Comparta sus opiniones sobre el Plan de Paisaje Urbano de Heights o proyectos especificos.",
    "home.filter.all": "Todos los Proyectos",
    "home.filter.pedestrian": "Peatonal y Bicicleta",
    "home.filter.circulation": "Circulaci\u00f3n Clave",
    "home.filter.fillBlocks": "Completar las Cuadras",

    // Project details
    "project.cost": "Costo Estimado",
    "project.currentStatus": "Estado Actual",
    "project.estimatedCompletion": "Finalizacion Estimada",
    "project.category": "Categor\u00eda",
    "project.location": "Ubicaci\u00f3n",
    "project.description": "Descripci\u00f3n",
    "project.rationale": "\u00bfPor Qu\u00e9 Este Proyecto?",
    "project.features": "Caracter\u00edsticas Principales",
    "project.goals": "Metas Comunitarias Abordadas",
    "project.complexity": "Complejidad del Proyecto",
    "project.priority": "Prioridad Comunitaria",
    "project.otherProjects": "Otros Proyectos en Este Plan",
    "project.phase": "Fase de Implementaci\u00f3n",
    "project.sequence": "Secuencia de Implementaci\u00f3n del Proyecto",
    "project.sequencePrevious": "Anterior",
    "project.sequenceCurrent": "Actual",
    "project.sequenceNext": "Siguiente",
    "project.sequenceStart": "Inicio de la secuencia",
    "project.sequenceEnd": "Fin de la secuencia",
    "project.imageTitle": "Imagen del Proyecto",
    "project.sitemapTitle": "Mapa del Proyecto",
    "project.imageExpand": "Ampliar imagen",
    "project.imageClose": "Cerrar imagen",
    "project.imageTag.futureRendering": "Representacion Futura",
    "project.imageTag.example": "Ejemplo",
    "project.imageTag.currentState": "Estado Actual",
    "project.imageTag.design": "Diseno",

    // Categories
    "category.pedestrian": "Mejoras Peatonales y de Bicicletas",
    "category.circulation": "Proyectos de Circulaci\u00f3n Clave",
    "category.fillBlocks": "Completar las Cuadras",

    // Goals
    "goal.livable": "Promover Comunidad y Econom\u00eda Habitable",
    "goal.traffic": "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
    "goal.identity": "Identidad Local",
    "goal.safe": "Calles Seguras y C\u00f3modas para las Personas",

    // Complexity
    "complexity.low": "Menor Complejidad",
    "complexity.medium": "Complejidad Moderada",
    "complexity.high": "Mayor Complejidad",

    // Timeline & Status
    "project.timeline": "Cronograma y Estado Actual",
    "project.status": "Estado Actual",
    "project.gallery": "Imagenes del Proyecto",
    "project.galleryClose": "Cerrar Galeria",
    "timeline.complete": "Completado",
    "timeline.active": "En Progreso",
    "timeline.upcoming": "Proximo",
    "status.implementationDesign": "Diseno de Implementacion",
    "status.conceptualDesign": "Diseno Conceptual",
    "completion.spring2027": "Primavera 2027",
    "completion.tbd": "Por Definir",

    // Footer
    "footer.info": "Este proyecto es parte del Plan de Paisaje Urbano de Heights, iniciado por la Ciudad de Hood River y la Agencia de Renovaci\u00f3n Urbana (URA) para establecer un plan integral de mejora de calles e intersecciones en el vecindario Heights.",
    "footer.adopted": "Plan adoptado en diciembre de 2023",
    "footer.contact": "Para informacion y contactos oficiales, use el enlace de arriba.",
    "footer.updated": "Sitio actualizado por ultima vez",

    // Language
    "lang.toggle": "English",
    "lang.current": "Espa\u00f1ol",
  },
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)
const LOCALE_STORAGE_KEY = "heights-locale"

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en"
  const candidates = [...(navigator.languages ?? []), navigator.language]
  const hasSpanish = candidates.some((lang) => lang?.toLowerCase().startsWith("es"))
  return hasSpanish ? "es" : "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en"
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (saved === "en" || saved === "es") return saved
    return detectBrowserLocale()
  })

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    document.documentElement.lang = newLocale
    window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
  }, [])

  const t = useCallback(
    (key: string): string => {
      const value = translations[locale][key]
      if (typeof value === "string") return value
      return key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
