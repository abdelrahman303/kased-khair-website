import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function ExpandMedia({ src, alt = '', children }) {
  const section = useRef(null)
  const frame = useRef(null)
  const img = useRef(null)

  useGSAP(
    () => {
      const sectionEl = section.current
      const frameEl = frame.current
      const imgEl = img.current
      if (!sectionEl || !frameEl) return undefined

      const startSize = () => ({
        width: Math.min(1120, Math.max(sectionEl.clientWidth - 40, 280)),
        height: Math.min(window.innerHeight * 0.56, 640),
      })

      const from = startSize()
      gsap.set(frameEl, { width: from.width, height: from.height, borderRadius: 24 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.7,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })

      tl.fromTo(
        frameEl,
        {
          width: () => startSize().width,
          height: () => startSize().height,
          borderRadius: 24,
        },
        {
          width: () => sectionEl.clientWidth,
          height: () => window.innerHeight,
          borderRadius: 0,
          ease: 'none',
        },
      )
      tl.fromTo(imgEl, { scale: 1.1 }, { scale: 1, ease: 'none' }, 0)

      const onLoad = () => ScrollTrigger.refresh()
      imgEl?.addEventListener('load', onLoad)
      return () => imgEl?.removeEventListener('load', onLoad)
    },
    { scope: section, dependencies: [src] },
  )

  return (
    <section ref={section} className="relative h-[170vh] md:h-[185vh]">
      <div className="sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden">
        <div ref={frame} className="relative overflow-hidden bg-[var(--bg-2)] will-change-[width,height,border-radius]">
          <img ref={img} src={src} alt={alt} className="h-full w-full origin-center object-cover" />
          {children ? <div className="absolute inset-0 z-10">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
