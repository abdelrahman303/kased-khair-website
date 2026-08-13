import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { mapsUrl, offices, socials } from '../../data/company'
import { projects } from '../../data/projects'

gsap.registerPlugin(ScrollTrigger)

const icons = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin }

export default function Footer() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const year = new Date().getFullYear()
  const root = useRef(null)
  const bg = useRef(null)
  const image = projects.find((p) => p.slug === 'west-quay-ras-el-tin')?.image

  useGSAP(
    () => {
      gsap.fromTo(
        bg.current,
        { yPercent: -8, scale: 1.12 },
        {
          yPercent: 8,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        },
      )
    },
    { scope: root },
  )

  return (
    <footer ref={root} className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          ref={bg}
          src={image}
          alt=""
          className="absolute inset-0 h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      <p className="pointer-events-none absolute -bottom-6 start-0 font-display text-[22vw] leading-none text-white/10 select-none md:text-[12vw]">
        KK
      </p>

      <div className="relative wrap grid gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-5">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Kased Khair"
            className="h-8 w-auto brightness-0 invert md:h-10"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:mt-6">{t('footer.blurb')}</p>
          <div className="mt-5 flex gap-2.5">
            {socials.map((s) => {
              const Icon = icons[s.id]
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-2)]">{t('footer.explore')}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm md:mt-5 md:flex-col md:gap-2">
            <Link to="/about" className="hover:text-[var(--gold-2)]">{t('nav.about')}</Link>
            <Link to="/projects" className="hover:text-[var(--gold-2)]">{t('nav.projects')}</Link>
            <Link to="/equipment" className="hover:text-[var(--gold-2)]">{t('nav.equipment')}</Link>
            <Link to="/awards" className="hover:text-[var(--gold-2)]">{t('nav.awards')}</Link>
            <Link to="/profile" className="hover:text-[var(--gold-2)]">{t('nav.profile')}</Link>
            <Link to="/contact" className="hover:text-[var(--gold-2)]">{t('nav.contact')}</Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold-2)]">{t('footer.locations')}</p>
          <div className="mt-4 grid gap-4 text-sm text-white/70 sm:grid-cols-2 md:mt-5 md:grid-cols-1 md:space-y-0 md:gap-5">
            {offices.map((o) => (
              <div key={o.id}>
                <p className="font-semibold text-white">{o.title[lang]}</p>
                <a href={mapsUrl(o.mapsQuery)} target="_blank" rel="noreferrer" className="hover:text-[var(--gold-2)]">
                  {o.lines[lang][0]}
                </a>
                {o.phones[0] && <p>{o.phones[0]}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-4 text-center text-xs text-white/55 md:py-6">
        © {year} {t('brand.name')}. {t('footer.rights')}
      </div>
    </footer>
  )
}
