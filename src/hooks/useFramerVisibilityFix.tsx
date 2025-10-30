import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Ensures Framer Motion re-observes visible elements
 * after route change, refresh, or fast navigation.
 */
export function useFramerVisibilityFix() {
  const location = useLocation()

  useEffect(() => {
    // Wait for next paint so the DOM is stable
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("scroll"))
    })
  }, [location.pathname])
}
