import { useTranslation } from 'react-i18next'
import { PageHero, Reveal } from '../components/ui/Primitives'
import MediaFrame from '../components/ui/MediaFrame'
import { projects } from '../data/projects'

export default function About() {
  const { t } = useTranslation()
  const photos = [
    projects[0].image,
    projects.find((p) => p.slug === 'submarines-hanger').image,
    projects.find((p) => p.slug === 'el-mistral-quay').image,
  ]
  const history = [t('about.historyP1'), t('about.historyP2'), t('about.historyP3'), t('about.historyP4')]
  const pillars = [
    { title: t('about.aboutTitle'), text: t('about.aboutText'), image: photos[0] },
    { title: t('about.visionTitle'), text: t('about.visionText'), image: photos[1] },
    { title: t('about.missionTitle'), text: t('about.missionText'), image: photos[2] },
  ]

  return (
    <div>
      <PageHero kicker={t('about.heroKicker')} title={t('about.heroTitle')} lead={t('about.heroLead')} image={photos[0]} />

      <section className="wrap py-16 md:py-24">
        <Reveal>
          <p className="max-w-3xl text-xl leading-relaxed md:text-2xl">{t('about.intro')}</p>
        </Reveal>
      </section>

      <section className="wrap space-y-20 pb-20 md:space-y-28 md:pb-28">
        {pillars.map((p, i) => (
          <Reveal key={p.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <MediaFrame src={p.image} className={`aspect-[4/3] ${i % 2 ? 'lg:order-2' : ''}`} />
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">0{i + 1}</p>
              <h3 className="font-display mt-3 text-3xl md:text-4xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="wrap pb-20 md:pb-28">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">1991</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl">{t('about.historyTitle')}</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {history.map((text, i) => (
            <Reveal key={i} delay={i * 0.05} className="border-t border-[var(--line)] pt-6">
              <p className="text-sm font-semibold text-[var(--gold)]">0{i + 1}</p>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <MediaFrame src={photos[1]} className="aspect-[16/10]" />
          <MediaFrame src={photos[2]} className="aspect-[16/10]" />
        </div>
      </section>

      <section className="wrap pb-24">
        <Reveal className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">{t('about.assetsTitle')}</h2>
            <p className="mt-5 max-w-md leading-relaxed text-[var(--muted)]">{t('about.assetsText')}</p>
          </div>
          <MediaFrame src={photos[0]} className="aspect-[4/3]" />
        </Reveal>
      </section>
    </div>
  )
}
