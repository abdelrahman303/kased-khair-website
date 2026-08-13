import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { cn } from '../../lib/cn'

gsap.registerPlugin(ScrollTrigger)

export default function MediaFrame({ src, alt = '', className, imgClassName, children }) {
  const root = useRef(null)
  const frame = useRef(null)
  const img = useRef(null)

  useGSAP(
    () => {
      if (!frame.current) return
      gsap.fromTo(
        frame.current,
        { clipPath: 'inset(8% 8% 8% 8%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
        },
      )
      gsap.fromTo(
        img.current,
        { scale: 1.18 },
        {
          scale: 1,
          duration: 1.35,
          ease: 'power2.out',
          scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
        },
      )
    },
    { scope: root, dependencies: [src] },
  )

  return (
    <div ref={root} className={cn('group relative overflow-hidden rounded-3xl bg-[var(--bg-2)]', className)}>
      <div ref={frame} className="h-full w-full overflow-hidden" style={{ clipPath: 'inset(8% 8% 8% 8%)' }}>
        <img
          ref={img}
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
            imgClassName,
          )}
        />
      </div>
      {children ? <div className="absolute inset-0 z-10">{children}</div> : null}
    </div>
  )
}
