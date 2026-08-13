import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    const x = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power3' })
    const y = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power3' })

    const move = (e) => {
      x(e.clientX)
      y(e.clientY)
    }
    const over = (e) => {
      const hot = e.target.closest('a, button')
      gsap.to(ring.current, { scale: hot ? 1.8 : 1, opacity: hot ? 0.55 : 0.35, duration: 0.3 })
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <div
      ref={ring}
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--gold)] opacity-35 lg:block"
    />
  )
}
