import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function ScrollProgress() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 0.35,
        },
      },
    )
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-transparent">
      <div ref={ref} className="h-full w-full origin-left scale-x-0 bg-[var(--gold)]" />
    </div>
  )
}

export function useParallax(imgRef) {
  useLayoutEffect(() => {
    if (!imgRef.current) return
    const anim = gsap.to(imgRef.current, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: imgRef.current.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [imgRef])
}
