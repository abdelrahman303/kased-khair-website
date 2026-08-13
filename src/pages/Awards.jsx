import { useTranslation } from 'react-i18next'
import { PageHero, Reveal } from '../components/ui/Primitives'
import MediaFrame from '../components/ui/MediaFrame'
import { awards, iso } from '../data/company'
import { projects } from '../data/projects'

export default function Awards() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const img = projects.find((p) => p.slug === 'submarines-hanger').image

  return (
    <div>
      <PageHero
        kicker={t('awards.heroKicker')}
        title={t('awards.heroTitle')}
        lead={t('awards.heroLead')}
        image={img}
      />

      <section className="wrap grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <MediaFrame src={projects[0].image} className="aspect-[4/3]" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{t('awards.membershipsKicker')}</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl">{t('awards.membershipsTitle')}</h2>
          <p className="mt-5 leading-relaxed text-[var(--muted)]">{t('awards.membershipsText')}</p>
        </Reveal>
      </section>

      <section className="wrap pb-16 md:pb-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{t('awards.awardsKicker')}</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl">{t('awards.awardsTitle')}</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {awards.map((a, i) => (
            <Reveal key={a.en} delay={i * 0.04} className="flex items-center justify-between gap-6 py-5">
              <p className="text-lg md:text-xl">{a[lang]}</p>
              <span className="text-sm text-[var(--gold)]">0{i + 1}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-6 pb-16 md:grid-cols-2 md:pb-24">
        {iso.map((item, i) => (
          <Reveal key={item.code} delay={i * 0.06} className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8">
            <p className="font-display text-3xl text-[var(--gold)] md:text-4xl">{item.code}</p>
            <p className="mt-3 text-lg">{item[lang]}</p>
            <p className="mt-4 text-sm text-[var(--muted)]">{t('awards.isoText')}</p>
          </Reveal>
        ))}
      </section>

      <section className="wrap pb-24">
        <Reveal>
          <h3 className="font-display text-3xl md:text-4xl">{t('awards.completionTitle')}</h3>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--muted)]">{t('awards.completionText')}</p>
        </Reveal>
      </section>
    </div>
  )
}
