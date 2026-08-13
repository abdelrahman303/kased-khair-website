import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Primitives'
import { heroImages } from '../../data/projects'
import 'swiper/css'
import 'swiper/css/effect-fade'

export default function HeroSlider() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const slides = t('hero.slides', { returnObjects: true })
  const list = Array.isArray(slides) ? slides : []
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const swiperRef = useRef(null)
  const slide = list[index] || {}

  return (
    <section className="relative h-[88svh] min-h-[520px] overflow-hidden md:h-[100svh] md:min-h-[620px]">
      <Swiper
        key={lang}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={900}
        autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
        onSwiper={(s) => {
          swiperRef.current = s
        }}
        onSlideChange={(s) => setIndex(s.realIndex)}
        onAutoplayTimeLeft={(_s, _time, p) => setProgress(1 - p)}
        className="h-full"
      >
        {list.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[88svh] min-h-[520px] overflow-hidden md:h-[100svh] md:min-h-[620px]">
              <img src={heroImages[i]} alt="" className="hero-ken absolute inset-0 h-full w-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />

      <div className="absolute inset-0 z-10 flex flex-col justify-end px-4 pb-20 sm:px-6 md:px-10 md:pb-28">
        <div className="wrap !m-0 w-full max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold-2)]">{slide.kicker}</p>
              <h1 className="font-display mt-3 text-[1.85rem] leading-[1.1] text-white sm:mt-4 sm:text-4xl md:text-6xl lg:text-7xl">{slide.title}</h1>
              <p className="mt-3 max-w-xl text-sm text-white/80 sm:mt-5 sm:text-base md:text-lg">{slide.subtitle}</p>
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-auto mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            <Button to="/projects">{t('hero.cta')}</Button>
            <Button to="/contact" variant="ghost" className="border-white/30 text-white hover:text-[var(--gold)]">
              {t('hero.cta2')}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 start-6 z-20 flex items-center gap-4 text-white md:start-10">
        <span className="text-sm tracking-wide">
          {String(index + 1).padStart(2, '0')}
          <span className="text-white/45"> / {String(list.length).padStart(2, '0')}</span>
        </span>
        <div className="h-[2px] w-24 overflow-hidden rounded-full bg-white/25 md:w-36">
          <div className="h-full bg-[var(--gold)]" style={{ width: `${Math.max(progress, 0.04) * 100}%` }} />
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white hover:border-[var(--gold)]"
          >
            <ChevronLeft size={16} className="rtl:rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white hover:border-[var(--gold)]"
          >
            <ChevronRight size={16} className="rtl:rotate-180" />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 end-6 z-20 hidden items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/65 md:end-10 md:flex">
        <span>{t('hero.scroll')}</span>
        <ArrowDown size={14} />
      </div>
    </section>
  )
}
