"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  type ReactNode,
} from "react"

// useLayoutEffect fires before paint on the client (eliminating the flash),
// but it doesn't exist on the server — fall back to useEffect there.
const useSyncEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export type TextSize = "normal" | "large" | "larger"

interface A11yContextType {
  textSize: TextSize
  highContrast: boolean
  setTextSize: (size: TextSize) => void
  toggleHighContrast: () => void
}

const A11yContext = createContext<A11yContextType | undefined>(undefined)

const TEXT_SIZE_KEY = "heights-text-size"
const HIGH_CONTRAST_KEY = "heights-high-contrast"

function applyTextSize(size: TextSize) {
  const { classList } = document.documentElement
  classList.remove("text-size-large", "text-size-larger")
  if (size === "large") classList.add("text-size-large")
  if (size === "larger") classList.add("text-size-larger")
}

function applyHighContrast(enabled: boolean) {
  document.documentElement.classList.toggle("high-contrast", enabled)
}

export function A11yProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSizeState] = useState<TextSize>("normal")
  const [highContrast, setHighContrast] = useState(false)

  // Sync state with whatever the anti-FOUC script already applied.
  // useLayoutEffect fires before paint so the button reflects the correct
  // active size immediately, without a visible flash on navigation.
  useSyncEffect(() => {
    try {
      const savedSize =
        (localStorage.getItem(TEXT_SIZE_KEY) as TextSize | null) ?? "normal"
      const savedContrast =
        localStorage.getItem(HIGH_CONTRAST_KEY) === "true"
      setTextSizeState(savedSize)
      setHighContrast(savedContrast)
    } catch {
      // localStorage unavailable (private browsing, etc.)
    }
  }, [])

  const setTextSize = useCallback((size: TextSize) => {
    setTextSizeState(size)
    try {
      localStorage.setItem(TEXT_SIZE_KEY, size)
    } catch {}
    applyTextSize(size)
  }, [])

  const toggleHighContrast = useCallback(() => {
    setHighContrast((prev) => {
      const next = !prev
      try {
        localStorage.setItem(HIGH_CONTRAST_KEY, String(next))
      } catch {}
      applyHighContrast(next)
      return next
    })
  }, [])

  return (
    <A11yContext.Provider
      value={{ textSize, highContrast, setTextSize, toggleHighContrast }}
    >
      {children}
    </A11yContext.Provider>
  )
}

export function useA11y() {
  const context = useContext(A11yContext)
  if (!context) throw new Error("useA11y must be used within an A11yProvider")
  return context
}
