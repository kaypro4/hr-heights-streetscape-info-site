import type { Locale } from "./i18n"

export type ProjectCategory = "pedestrian" | "circulation" | "fillBlocks"

export interface Project {
  id: string
  slug: string
  category: ProjectCategory
  costRange: string
  priorityLevel: number // 1-5
  complexityLevel: number // 1-5
  streets: string[]
  intersections: string[]
  en: {
    name: string
    description: string
    rationale: string
    features: string[]
    goals: string[]
  }
  es: {
    name: string
    description: string
    rationale: string
    features: string[]
    goals: string[]
  }
}

export const projects: Project[] = [
  // SMALLER PEDESTRIAN AND BICYCLE IMPROVEMENTS
  {
    id: "east-west-crossings",
    slug: "east-west-crossings-13th",
    category: "pedestrian",
    costRange: "$1.3M - $1.7M",
    priorityLevel: 4,
    complexityLevel: 2,
    streets: ["13th Street"],
    intersections: ["13th & Taylor Ave", "13th & A Street"],
    en: {
      name: "Key East/West Crossings on 13th Street",
      description:
        "Curb extensions, Rectangular Rapid Flashing Beacons (RRFBs), and other intersection improvements to improve access and safety at Taylor Avenue and A Street crossings on 13th Street.",
      rationale:
        "Start with intersection improvements across 13th Street to improve neighborhood access and safety. These crossings are critical for connecting the east and west sides of the Heights neighborhood.",
      features: [
        "Curb extensions to shorten crossing distances",
        "Rectangular Rapid Flashing Beacons (RRFBs)",
        "Improved intersection markings and signage",
        "Enhanced pedestrian visibility at crossings",
      ],
      goals: [
        "Calm Traffic & Improve Intersections",
        "Safe, Comfortable Streets for People",
      ],
    },
    es: {
      name: "Cruces Clave Este/Oeste en la Calle 13",
      description:
        "Extensiones de acera, balizas de destello r\u00e1pido rectangular (RRFB) y otras mejoras en intersecciones para mejorar el acceso y la seguridad en los cruces de Taylor Avenue y A Street en la Calle 13.",
      rationale:
        "Comenzar con mejoras en las intersecciones de la Calle 13 para mejorar el acceso y la seguridad del vecindario. Estos cruces son cr\u00edticos para conectar los lados este y oeste del vecindario Heights.",
      features: [
        "Extensiones de acera para acortar distancias de cruce",
        "Balizas de destello r\u00e1pido rectangular (RRFB)",
        "Mejor se\u00f1alizaci\u00f3n y marcado de intersecciones",
        "Mayor visibilidad peatonal en los cruces",
      ],
      goals: [
        "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
        "Calles Seguras y C\u00f3modas para las Personas",
      ],
    },
  },
  {
    id: "taylor-ave-connection",
    slug: "taylor-ave-neighborhood-connection",
    category: "pedestrian",
    costRange: "$1.2M - $1.6M",
    priorityLevel: 4,
    complexityLevel: 3,
    streets: ["Taylor Avenue", "12th Street"],
    intersections: ["12th & Taylor Ave", "13th & Taylor Ave", "12th & Pine St"],
    en: {
      name: "Taylor Avenue Neighborhood Connection",
      description:
        "Full reconstruction of Taylor Avenue and interim improvements on 12th Street between Pine Street and Taylor Avenue to create a safe, comfortable bicycle and pedestrian route across the Heights.",
      rationale:
        "Establish Pine Street to Taylor Avenue as a safe, comfortable route across the Heights for people walking and biking. Taylor Avenue is redesigned with a protected two-way cycle track and one-way westbound vehicle traffic.",
      features: [
        "Protected two-way cycle track on Taylor Avenue",
        "One-way westbound vehicle traffic",
        "Wider sidewalks with improved accessibility",
        "Interim improvements on 12th Street between Pine and Taylor",
        "Safe connections to local schools and parks",
      ],
      goals: [
        "Safe, Comfortable Streets for People",
        "Promote Livable Community & Economy",
        "Local Identity",
      ],
    },
    es: {
      name: "Conexi\u00f3n Vecinal de Taylor Avenue",
      description:
        "Reconstrucci\u00f3n completa de Taylor Avenue y mejoras provisionales en la Calle 12 entre Pine Street y Taylor Avenue para crear una ruta segura y c\u00f3moda para bicicletas y peatones a trav\u00e9s de Heights.",
      rationale:
        "Establecer Pine Street a Taylor Avenue como una ruta segura y c\u00f3moda a trav\u00e9s de Heights para personas caminando y en bicicleta. Taylor Avenue se redise\u00f1a con una ciclovia protegida de dos sentidos y tr\u00e1fico vehicular de un solo sentido hacia el oeste.",
      features: [
        "Ciclov\u00eda protegida de dos sentidos en Taylor Avenue",
        "Tr\u00e1fico vehicular de un sentido hacia el oeste",
        "Aceras m\u00e1s anchas con accesibilidad mejorada",
        "Mejoras provisionales en la Calle 12 entre Pine y Taylor",
        "Conexiones seguras a escuelas y parques locales",
      ],
      goals: [
        "Calles Seguras y C\u00f3modas para las Personas",
        "Promover Comunidad y Econom\u00eda Habitable",
        "Identidad Local",
      ],
    },
  },
  {
    id: "east-sidewalk-13th",
    slug: "east-sidewalk-13th-street",
    category: "pedestrian",
    costRange: "$0.8M - $1.1M",
    priorityLevel: 3,
    complexityLevel: 2,
    streets: ["13th Street"],
    intersections: [],
    en: {
      name: "East Sidewalk Along 13th Street",
      description:
        "New sidewalk and planting strip between (but not at) intersections along the east side of 13th Street. Includes driveway removals for access management where possible.",
      rationale:
        "Create a comfortable walking environment along the east side of 13th Street to prepare for future two-way traffic. This is an essential step toward making 13th Street safer for all users.",
      features: [
        "New continuous sidewalk on the east side of 13th Street",
        "Planting strip with street trees",
        "Driveway removals for better access management",
        "Improved pedestrian environment",
      ],
      goals: [
        "Safe, Comfortable Streets for People",
        "Calm Traffic & Improve Intersections",
      ],
    },
    es: {
      name: "Acera Este a lo Largo de la Calle 13",
      description:
        "Nueva acera y franja de plantaci\u00f3n entre (pero no en) las intersecciones a lo largo del lado este de la Calle 13. Incluye eliminaci\u00f3n de entradas de veh\u00edculos para gesti\u00f3n de acceso donde sea posible.",
      rationale:
        "Crear un entorno c\u00f3modo para caminar a lo largo del lado este de la Calle 13 para prepararse para el futuro tr\u00e1fico de dos sentidos. Este es un paso esencial para hacer la Calle 13 m\u00e1s segura para todos los usuarios.",
      features: [
        "Nueva acera continua en el lado este de la Calle 13",
        "Franja de plantaci\u00f3n con \u00e1rboles",
        "Eliminaci\u00f3n de entradas vehiculares para mejor gesti\u00f3n de acceso",
        "Entorno peatonal mejorado",
      ],
      goals: [
        "Calles Seguras y C\u00f3modas para las Personas",
        "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
      ],
    },
  },

  // KEY CIRCULATION PROJECTS
  {
    id: "may-st-roundabout",
    slug: "may-street-roundabout",
    category: "circulation",
    costRange: "$4.9M - $6.3M",
    priorityLevel: 5,
    complexityLevel: 4,
    streets: ["May Street", "13th Street"],
    intersections: ["13th & May St"],
    en: {
      name: "May Street and 13th Street Roundabout",
      description:
        "New roundabout at the intersection of 13th and May Streets, designed to address existing issues, help maintain traffic flow, minimize delays, and provide safe crossings. A new two-way cycle track is integrated into the intersection.",
      rationale:
        "Key intersection improvements that can be developed without converting 13th Street to two-way traffic. The roundabout creates a safe route between local schools, parks, and other neighborhood destinations.",
      features: [
        "New roundabout intersection design",
        "Integrated two-way cycle track",
        "Safe pedestrian crossings at all approaches",
        "Maintained traffic flow with minimal delays",
        "Connection between schools, parks, and neighborhoods",
      ],
      goals: [
        "Calm Traffic & Improve Intersections",
        "Safe, Comfortable Streets for People",
        "Promote Livable Community & Economy",
      ],
    },
    es: {
      name: "Rotonda de May Street y Calle 13",
      description:
        "Nueva rotonda en la intersecci\u00f3n de las calles 13 y May, dise\u00f1ada para abordar problemas existentes, mantener el flujo de tr\u00e1fico, minimizar retrasos y proporcionar cruces seguros. Una nueva ciclov\u00eda de dos sentidos est\u00e1 integrada en la intersecci\u00f3n.",
      rationale:
        "Mejoras clave en intersecciones que pueden desarrollarse sin convertir la Calle 13 a tr\u00e1fico de dos sentidos. La rotonda crea una ruta segura entre escuelas locales, parques y otros destinos del vecindario.",
      features: [
        "Nuevo dise\u00f1o de intersecci\u00f3n con rotonda",
        "Ciclov\u00eda integrada de dos sentidos",
        "Cruces peatonales seguros en todas las aproximaciones",
        "Flujo de tr\u00e1fico mantenido con retrasos m\u00ednimos",
        "Conexi\u00f3n entre escuelas, parques y vecindarios",
      ],
      goals: [
        "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
        "Calles Seguras y C\u00f3modas para las Personas",
        "Promover Comunidad y Econom\u00eda Habitable",
      ],
    },
  },
  {
    id: "belmont-12th-13th",
    slug: "belmont-12th-13th-intersections",
    category: "circulation",
    costRange: "$12.8M - $16.4M",
    priorityLevel: 5,
    complexityLevel: 5,
    streets: ["Belmont Avenue", "12th Street", "13th Street"],
    intersections: ["12th & Belmont Ave", "13th & Belmont Ave"],
    en: {
      name: "Belmont, 12th, and 13th Intersections & Two-Way Traffic",
      description:
        "New intersection improvements at 12th Street, 13th Street, and Belmont Avenue; new medians and restriping on 13th Street and roundabout modifications for two-way traffic; interim cycle track on 12th Street. This project also closes Belmont Avenue to vehicles between 12th and 13th Streets.",
      rationale:
        "Complete key intersections at the south end and convert to two-way traffic on 13th Street. Include an interim cycle track on 12th Street to connect to Pine/Taylor. This is the largest and most complex project in the plan.",
      features: [
        "Conversion of 13th Street to two-way traffic",
        "New medians and restriping on 13th Street",
        "Roundabout modifications for two-way operation",
        "Interim cycle track on 12th Street",
        "Belmont Avenue closed to vehicles between 12th and 13th",
        "New traffic signals and simplified intersections",
        "Gateway and placemaking opportunity at the south entry",
      ],
      goals: [
        "Calm Traffic & Improve Intersections",
        "Safe, Comfortable Streets for People",
        "Promote Livable Community & Economy",
        "Local Identity",
      ],
    },
    es: {
      name: "Intersecciones de Belmont, Calle 12 y Calle 13 y Tr\u00e1fico de Dos Sentidos",
      description:
        "Nuevas mejoras de intersecci\u00f3n en Calle 12, Calle 13 y Belmont Avenue; nuevas medianas y nuevo marcado en Calle 13 y modificaciones de rotonda para tr\u00e1fico de dos sentidos; ciclov\u00eda provisional en Calle 12. Este proyecto tambi\u00e9n cierra Belmont Avenue al tr\u00e1fico vehicular entre las calles 12 y 13.",
      rationale:
        "Completar intersecciones clave en el extremo sur y convertir a tr\u00e1fico de dos sentidos en la Calle 13. Incluir una ciclov\u00eda provisional en la Calle 12 para conectar con Pine/Taylor. Este es el proyecto m\u00e1s grande y complejo del plan.",
      features: [
        "Conversi\u00f3n de la Calle 13 a tr\u00e1fico de dos sentidos",
        "Nuevas medianas y remarcado en la Calle 13",
        "Modificaciones de rotonda para operaci\u00f3n de dos sentidos",
        "Ciclov\u00eda provisional en la Calle 12",
        "Belmont Avenue cerrada a veh\u00edculos entre calles 12 y 13",
        "Nuevos sem\u00e1foros e intersecciones simplificadas",
        "Oportunidad de entrada y dise\u00f1o urbano en el acceso sur",
      ],
      goals: [
        "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
        "Calles Seguras y C\u00f3modas para las Personas",
        "Promover Comunidad y Econom\u00eda Habitable",
        "Identidad Local",
      ],
    },
  },
  {
    id: "may-st-safe-route",
    slug: "may-street-safe-route-to-school",
    category: "circulation",
    costRange: "$4.3M - $5.5M",
    priorityLevel: 5,
    complexityLevel: 4,
    streets: ["May Street", "12th Street"],
    intersections: ["12th & May St"],
    en: {
      name: "May Street Safe Route to School",
      description:
        "Full street improvements along May Street between the roundabout and 12th Street including traffic signal improvements. Extends the interim cycle track from Taylor Avenue to May Street.",
      rationale:
        "Cycle track and street improvements along May Street for Safe Routes to School access. This extends the interim cycle track on 12th Street from Taylor Avenue, creating a connected network for families and students.",
      features: [
        "Complete street reconstruction on May Street",
        "Traffic signal improvements at 12th & May",
        "Extended cycle track from Taylor Ave to May St",
        "Safe Routes to School infrastructure",
        "Bicycle, pedestrian, and vehicle improvements",
      ],
      goals: [
        "Safe, Comfortable Streets for People",
        "Calm Traffic & Improve Intersections",
        "Promote Livable Community & Economy",
      ],
    },
    es: {
      name: "Ruta Segura a la Escuela por May Street",
      description:
        "Mejoras completas de calle a lo largo de May Street entre la rotonda y la Calle 12, incluyendo mejoras de sem\u00e1foros. Extiende la ciclov\u00eda provisional desde Taylor Avenue hasta May Street.",
      rationale:
        "Ciclov\u00eda y mejoras de calle a lo largo de May Street para acceso de Rutas Seguras a la Escuela. Esto extiende la ciclov\u00eda provisional en la Calle 12 desde Taylor Avenue, creando una red conectada para familias y estudiantes.",
      features: [
        "Reconstrucci\u00f3n completa de May Street",
        "Mejoras de sem\u00e1foros en Calle 12 y May",
        "Ciclov\u00eda extendida de Taylor Ave a May St",
        "Infraestructura de Rutas Seguras a la Escuela",
        "Mejoras para bicicletas, peatones y veh\u00edculos",
      ],
      goals: [
        "Calles Seguras y C\u00f3modas para las Personas",
        "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
        "Promover Comunidad y Econom\u00eda Habitable",
      ],
    },
  },
  {
    id: "bike-connection-pacific",
    slug: "bike-connection-pacific-avenue",
    category: "circulation",
    costRange: "$11.8M - $15.1M",
    priorityLevel: 4,
    complexityLevel: 5,
    streets: ["12th Street", "Pacific Avenue"],
    intersections: ["12th & Union St", "12th & Pacific Ave"],
    en: {
      name: "Bike Connection to Pacific Avenue",
      description:
        "Restripe 12th Street, narrow the roadway, and widen the existing sidewalk with a new retaining wall to allow construction of a shared use path along the east side of 12th Street south of Union Street.",
      rationale:
        "Coordinate with ODOT to reconfigure and widen 12th Street from Union Street to Pacific Avenue to provide a Safe Route to School. This critical link connects the Heights neighborhood to Pacific Avenue.",
      features: [
        "Shared use path along east side of 12th Street",
        "New retaining wall construction",
        "Roadway narrowing and restriping",
        "Improved safety for people walking and biking to Pacific Ave",
        "Coordination with ODOT for jurisdictional transfer",
      ],
      goals: [
        "Safe, Comfortable Streets for People",
        "Calm Traffic & Improve Intersections",
      ],
    },
    es: {
      name: "Conexi\u00f3n de Bicicletas a Pacific Avenue",
      description:
        "Remarcar la Calle 12, estrechar la carretera y ampliar la acera existente con un nuevo muro de contenci\u00f3n para permitir la construcci\u00f3n de un camino de uso compartido a lo largo del lado este de la Calle 12 al sur de Union Street.",
      rationale:
        "Coordinar con ODOT para reconfigurar y ampliar la Calle 12 desde Union Street hasta Pacific Avenue para proporcionar una Ruta Segura a la Escuela. Este enlace cr\u00edtico conecta el vecindario Heights con Pacific Avenue.",
      features: [
        "Camino de uso compartido a lo largo del lado este de la Calle 12",
        "Construcci\u00f3n de nuevo muro de contenci\u00f3n",
        "Estrechamiento y remarcado de carretera",
        "Seguridad mejorada para personas caminando y en bicicleta hacia Pacific Ave",
        "Coordinaci\u00f3n con ODOT para transferencia jurisdiccional",
      ],
      goals: [
        "Calles Seguras y C\u00f3modas para las Personas",
        "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
      ],
    },
  },

  // FILL IN THE BLOCKS
  {
    id: "abc-streets",
    slug: "a-b-c-streets",
    category: "fillBlocks",
    costRange: "$3.4M - $4.4M",
    priorityLevel: 3,
    complexityLevel: 3,
    streets: ["A Street", "B Street", "C Street"],
    intersections: [],
    en: {
      name: "A, B, and C Streets",
      description:
        "Reconstruction of east/west streets to provide new sidewalks and other intersection and infrastructure improvements. These streets will become one-way, alternating between eastbound and westbound traffic.",
      rationale:
        "Improve east/west streets with new sidewalks and amenities to complete street improvements in the Heights. One-way conversion allows on-street parking along both sides while providing wider sidewalks.",
      features: [
        "One-way street conversions (alternating directions)",
        "New sidewalks on both sides",
        "On-street parking along both sides",
        "Wider sidewalks for improved pedestrian access",
        "Infrastructure and intersection improvements",
      ],
      goals: [
        "Safe, Comfortable Streets for People",
        "Promote Livable Community & Economy",
        "Local Identity",
      ],
    },
    es: {
      name: "Calles A, B y C",
      description:
        "Reconstrucci\u00f3n de calles este/oeste para proporcionar nuevas aceras y otras mejoras de intersecciones e infraestructura. Estas calles se convertir\u00e1n en un solo sentido, alternando entre tr\u00e1fico hacia el este y el oeste.",
      rationale:
        "Mejorar las calles este/oeste con nuevas aceras y servicios para completar las mejoras de calles en Heights. La conversi\u00f3n a un solo sentido permite estacionamiento en ambos lados mientras proporciona aceras m\u00e1s anchas.",
      features: [
        "Conversiones de calles a un solo sentido (direcciones alternadas)",
        "Nuevas aceras en ambos lados",
        "Estacionamiento en la calle en ambos lados",
        "Aceras m\u00e1s anchas para mejor acceso peatonal",
        "Mejoras de infraestructura e intersecciones",
      ],
      goals: [
        "Calles Seguras y C\u00f3modas para las Personas",
        "Promover Comunidad y Econom\u00eda Habitable",
        "Identidad Local",
      ],
    },
  },
  {
    id: "12th-belmont-taylor",
    slug: "12th-street-belmont-to-taylor",
    category: "fillBlocks",
    costRange: "$10.4M - $13.4M",
    priorityLevel: 4,
    complexityLevel: 4,
    streets: ["12th Street"],
    intersections: [
      "12th & Belmont Ave",
      "12th & A St",
      "12th & B St",
      "12th & C St",
      "12th & Taylor Ave",
    ],
    en: {
      name: "12th Street: Belmont Avenue to Taylor Avenue",
      description:
        "Full reconstruction of 12th Street in phases between Union Street and Taylor Avenue to provide wider sidewalks, the protected cycle track, and other streetscape amenities. 12th Street is designed as the neighborhood street \u2014 a local destination and nexus of neighborhood life.",
      rationale:
        "Phased reconstruction of the commercial core along 12th Street with new sidewalks, streetscape improvements, and the final cycle track to Taylor Avenue. This is the heart of the Heights neighborhood.",
      features: [
        "Protected two-way cycle track",
        "Wider sidewalks with street trees",
        "Curb extensions for safer crossings",
        "Opportunities for parklets and outdoor seating",
        "Streetscape amenities reflecting local identity",
        "Phased construction approach",
      ],
      goals: [
        "Promote Livable Community & Economy",
        "Local Identity",
        "Safe, Comfortable Streets for People",
        "Calm Traffic & Improve Intersections",
      ],
    },
    es: {
      name: "Calle 12: Belmont Avenue a Taylor Avenue",
      description:
        "Reconstrucci\u00f3n completa de la Calle 12 en fases entre Union Street y Taylor Avenue para proporcionar aceras m\u00e1s anchas, la ciclov\u00eda protegida y otros servicios de paisaje urbano. La Calle 12 est\u00e1 dise\u00f1ada como la calle del vecindario, un destino local y centro de la vida vecinal.",
      rationale:
        "Reconstrucci\u00f3n por fases del n\u00facleo comercial a lo largo de la Calle 12 con nuevas aceras, mejoras de paisaje urbano y la ciclov\u00eda final hasta Taylor Avenue. Este es el coraz\u00f3n del vecindario Heights.",
      features: [
        "Ciclov\u00eda protegida de dos sentidos",
        "Aceras m\u00e1s anchas con \u00e1rboles",
        "Extensiones de acera para cruces m\u00e1s seguros",
        "Oportunidades para parklets y asientos al aire libre",
        "Servicios de paisaje urbano que reflejan la identidad local",
        "Enfoque de construcci\u00f3n por fases",
      ],
      goals: [
        "Promover Comunidad y Econom\u00eda Habitable",
        "Identidad Local",
        "Calles Seguras y C\u00f3modas para las Personas",
        "Calmar el Tr\u00e1fico y Mejorar Intersecciones",
      ],
    },
  },
  {
    id: "12th-taylor-may",
    slug: "12th-street-taylor-to-may",
    category: "fillBlocks",
    costRange: "$1.9M - $2.5M",
    priorityLevel: 3,
    complexityLevel: 3,
    streets: ["12th Street"],
    intersections: ["12th & Taylor Ave", "12th & May St"],
    en: {
      name: "12th Street: Taylor Avenue to May Street",
      description:
        "Full reconstruction of 12th Street to provide wider sidewalks, the protected cycle track, and other streetscape amenities north of Taylor Avenue to May Street.",
      rationale:
        "Continued reconstruction of 12th Street with new sidewalks and the final cycle track north of Taylor Avenue, extending the neighborhood street experience toward May Street.",
      features: [
        "Protected two-way cycle track extension",
        "Wider sidewalks with planting strips",
        "Street trees and landscaping",
        "Streetscape amenities",
      ],
      goals: [
        "Safe, Comfortable Streets for People",
        "Promote Livable Community & Economy",
        "Local Identity",
      ],
    },
    es: {
      name: "Calle 12: Taylor Avenue a May Street",
      description:
        "Reconstrucci\u00f3n completa de la Calle 12 para proporcionar aceras m\u00e1s anchas, la ciclov\u00eda protegida y otros servicios de paisaje urbano al norte de Taylor Avenue hasta May Street.",
      rationale:
        "Reconstrucci\u00f3n continuada de la Calle 12 con nuevas aceras y la ciclov\u00eda final al norte de Taylor Avenue, extendiendo la experiencia de calle vecinal hacia May Street.",
      features: [
        "Extensi\u00f3n de ciclov\u00eda protegida de dos sentidos",
        "Aceras m\u00e1s anchas con franjas de plantaci\u00f3n",
        "\u00c1rboles y paisajismo",
        "Servicios de paisaje urbano",
      ],
      goals: [
        "Calles Seguras y C\u00f3modas para las Personas",
        "Promover Comunidad y Econom\u00eda Habitable",
        "Identidad Local",
      ],
    },
  },
  {
    id: "belmont-shared-street",
    slug: "belmont-shared-street",
    category: "fillBlocks",
    costRange: "$2.8M - $3.6M",
    priorityLevel: 4,
    complexityLevel: 4,
    streets: ["Belmont Avenue"],
    intersections: ["12th & Belmont Ave", "13th & Belmont Ave"],
    en: {
      name: "Belmont Shared Street",
      description:
        "Full reconstruction of Belmont Avenue as a plaza and shared street for all. Creates a flexible, pedestrian-oriented space that allows vehicle access to local businesses while serving as a community gathering space.",
      rationale:
        "Reconstruct Belmont Avenue as a shared street and community space for all. This must happen after (or as part of) key intersection improvements at Belmont Avenue. The space can host farmers markets and community events.",
      features: [
        "Shared street / plaza design",
        "Flexible space for farmers markets and events",
        "Pedestrian-priority environment",
        "Vehicle access maintained for local businesses",
        "Community gathering space",
        "Gateway and placemaking elements",
      ],
      goals: [
        "Local Identity",
        "Promote Livable Community & Economy",
        "Safe, Comfortable Streets for People",
      ],
    },
    es: {
      name: "Calle Compartida de Belmont",
      description:
        "Reconstrucci\u00f3n completa de Belmont Avenue como plaza y calle compartida para todos. Crea un espacio flexible orientado al peat\u00f3n que permite el acceso vehicular a negocios locales mientras sirve como espacio de reuni\u00f3n comunitaria.",
      rationale:
        "Reconstruir Belmont Avenue como una calle compartida y espacio comunitario para todos. Esto debe ocurrir despu\u00e9s de (o como parte de) las mejoras clave de intersecci\u00f3n en Belmont Avenue. El espacio puede albergar mercados de agricultores y eventos comunitarios.",
      features: [
        "Dise\u00f1o de calle compartida / plaza",
        "Espacio flexible para mercados y eventos",
        "Entorno con prioridad peatonal",
        "Acceso vehicular mantenido para negocios locales",
        "Espacio de reuni\u00f3n comunitaria",
        "Elementos de entrada y dise\u00f1o urbano",
      ],
      goals: [
        "Identidad Local",
        "Promover Comunidad y Econom\u00eda Habitable",
        "Calles Seguras y C\u00f3modas para las Personas",
      ],
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getProjectName(project: Project, locale: Locale): string {
  return project[locale].name
}

export function getCategoryLabel(
  category: ProjectCategory,
  locale: Locale
): string {
  const labels: Record<ProjectCategory, Record<Locale, string>> = {
    pedestrian: {
      en: "Pedestrian & Bicycle Improvements",
      es: "Mejoras Peatonales y de Bicicletas",
    },
    circulation: {
      en: "Key Circulation Projects",
      es: "Proyectos de Circulaci\u00f3n Clave",
    },
    fillBlocks: {
      en: "Fill in the Blocks",
      es: "Completar las Cuadras",
    },
  }
  return labels[category][locale]
}
