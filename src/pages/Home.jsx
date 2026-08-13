import { useTranslation } from 'react-i18next'
import { Button, PhotoCard, Reveal } from '../components/ui/Primitives'
import HeroSlider from '../components/home/HeroSlider'
import ExpandMedia from '../components/ui/ExpandMedia'
import { featuredSlugs, projects } from '../data/projects'
import { partners } from '../data/company'

const sectorSlugs = {
  buildings: 'bernis-naval-base-at-ras-banas',
  marine: 'port-said-naval-base-quay',
  roads: 'west-quay-ras-el-tin',
  steel: 'submarines-hanger',
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const featured = featuredSlugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean)
  const sectorKeys = ['buildings', 'marine', 'roads', 'steel']
  const stats = [
    { value: '1991', label: t('stats.founded') },
    { value: '30+', label: t('stats.years') },
    { value: 'ISO', label: t('stats.iso') },
    { value: '03', label: t('stats.offices') },
  ]

  return (
    <div>
      <HeroSlider />

      <section className="wrap py-10 md:py-28">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-y border-[var(--line)] py-6 sm:gap-8 sm:py-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-[1.85rem] leading-none sm:text-5xl md:text-6xl">{s.value}</p>
                <p className="mt-1.5 text-[11px] text-[var(--muted)] sm:mt-2 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap pb-14 md:pb-28">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{t('sectors.kicker')}</p>
          <h2 className="font-display mt-3 max-w-3xl text-[1.75rem] leading-tight md:text-5xl">{t('sectors.title')}</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10">
          {sectorKeys.map((key, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <PhotoCard
                to="/projects"
                image={projects.find((p) => p.slug === sectorSlugs[key])?.image}
                kicker={t(`sectors.items.${key}.line`)}
                title={t(`sectors.items.${key}.title`)}
              />
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">{t(`sectors.items.${key}.text`)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-14 md:pb-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{t('homeProjects.kicker')}</p>
            <h2 className="font-display mt-3 text-[1.75rem] leading-tight md:text-5xl">{t('homeProjects.title')}</h2>
          </div>
          <Button to="/projects" variant="ghost">
            {t('homeProjects.all')}
          </Button>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {featured.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <PhotoCard to={`/projects/${p.slug}`} image={p.image} kicker={p.place[lang]} title={p.title[lang]} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-14 md:pb-28">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{t('partners.kicker')}</p>
          <h2 className="font-display mt-3 max-w-2xl text-[1.75rem] leading-tight md:text-5xl">{t('partners.title')}</h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] md:mt-4 md:text-base">{t('partners.lead')}</p>
        </Reveal>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:mt-10 sm:grid-cols-2 sm:rounded-3xl">
          {partners.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.03} className="bg-[var(--surface)] px-4 py-3.5 sm:px-6 sm:py-5">
              <p className="font-medium">{p[lang]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ExpandMedia src={projects.find((p) => p.slug === 'submarines-hanger').image}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-5 md:p-16">
          <h2 className="font-display max-w-2xl text-2xl text-white md:text-5xl">{t('cta.title')}</h2>
          <p className="mt-4 max-w-lg text-white/80">{t('cta.text')}</p>
          <div className="mt-7">
            <Button to="/contact">{t('cta.button')}</Button>
          </div>
        </div>
      </ExpandMedia>
    </div>
  )
}
