"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "en" | "es"

type TranslationValue = string | Record<string, string>
type Translations = Record<string, TranslationValue>

const translations: Record<Locale, Translations> = {
  en: {
    // Header
    "site.title": "Heights Streetscape Plan",
    "site.subtitle": "City of Hood River",
    "site.tagline": "Building Better Streets Together",

    // Navigation
    "nav.home": "All Projects",
    "nav.back": "Back to All Projects",
    "nav.viewProject": "View Details",

    // Home page
    "home.hero.title": "Heights Streetscape Plan",
    "home.hero.subtitle": "A comprehensive plan for improving the streets and intersections of the Heights neighborhood in Hood River, Oregon.",
    "home.hero.cta": "Explore Projects",
    "home.filter.all": "All Projects",
    "home.filter.pedestrian": "Pedestrian & Bicycle",
    "home.filter.circulation": "Key Circulation",
    "home.filter.fillBlocks": "Fill in the Blocks",

    // Project details
    "project.cost": "Estimated Cost",
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

    // Footer
    "footer.info": "This project is part of the Heights Streetscape Plan, initiated by the City of Hood River and Urban Renewal Agency (URA) to establish a comprehensive plan for improving streets and intersections in the Heights neighborhood.",
    "footer.adopted": "Plan adopted December 2023",
    "footer.contact": "For more information, contact the City of Hood River Planning Department.",
    "footer.accessibility": "This site is designed to be accessible to all visitors.",

    // Language
    "lang.toggle": "Espa\u00f1ol",
    "lang.current": "English",
  },
  es: {
    // Header
    "site.title": "Plan de Paisaje Urbano de Heights",
    "site.subtitle": "Ciudad de Hood River",
    "site.tagline": "Construyendo Mejores Calles Juntos",

    // Navigation
    "nav.home": "Todos los Proyectos",
    "nav.back": "Volver a Todos los Proyectos",
    "nav.viewProject": "Ver Detalles",

    // Home page
    "home.hero.title": "Plan de Paisaje Urbano de Heights",
    "home.hero.subtitle": "Un plan integral para mejorar las calles e intersecciones del vecindario Heights en Hood River, Oreg\u00f3n.",
    "home.hero.cta": "Explorar Proyectos",
    "home.filter.all": "Todos los Proyectos",
    "home.filter.pedestrian": "Peatonal y Bicicleta",
    "home.filter.circulation": "Circulaci\u00f3n Clave",
    "home.filter.fillBlocks": "Completar las Cuadras",

    // Project details
    "project.cost": "Costo Estimado",
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

    // Footer
    "footer.info": "Este proyecto es parte del Plan de Paisaje Urbano de Heights, iniciado por la Ciudad de Hood River y la Agencia de Renovaci\u00f3n Urbana (URA) para establecer un plan integral de mejora de calles e intersecciones en el vecindario Heights.",
    "footer.adopted": "Plan adoptado en diciembre de 2023",
    "footer.contact": "Para m\u00e1s informaci\u00f3n, contacte al Departamento de Planificaci\u00f3n de la Ciudad de Hood River.",
    "footer.accessibility": "Este sitio est\u00e1 dise\u00f1ado para ser accesible a todos los visitantes.",

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

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    document.documentElement.lang = newLocale
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
