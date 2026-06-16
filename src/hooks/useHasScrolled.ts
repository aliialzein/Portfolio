import { useEffect, useState } from 'react'

export function useHasScrolled(threshold = 8) {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return hasScrolled
}