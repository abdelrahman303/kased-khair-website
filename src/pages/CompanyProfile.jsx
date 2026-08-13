import { useTranslation } from 'react-i18next'
import { Button, PageHero, Reveal } from '../components/ui/Primitives'
import MediaFrame from '../components/ui/MediaFrame'
import { projects } from '../data/projects'

export default function CompanyProfile() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const img = projects.find((p) => p.slug === 'galala-university-conference-hall').image

  const facts = [
    { k: lang === 'ar' ? 'التأسيس' : 'Founded', v: '1991' },
    { k: lang === 'ar' ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO', v: lang === 'ar' ? 'السيد سعيد جمال' : 'Mr. Saeed Gamal' },
    { k: lang === 'ar' ? 'المقر' : 'Headquarters', v: lang === 'ar' ? 'الإسكندرية — القاهرة — جدة' : 'Alexandria · Cairo · Jeddah' },
    { k: 'ISO', v: '9001:2015 · 45001:2018' },
  ]

  return (
    <div>
      <PageHero kicker={t('profile.heroKicker')} title={t('profile.heroTitle')} lead={t('profile.heroLead')} image={img} />

      <section className="wrap grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <Reveal>
          <MediaFrame src={projects[0].image} className="aspect-[4/3]" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{t('profile.snapshot')}</p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl">{t('brand.name')}</h2>
          <p className="mt-2 text-[var(--muted)]">{t('brand.tagline')}</p>
          <div className="mt-8 space-y-4">
            {facts.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-6 border-b border-[var(--line)] pb-4">
                <span className="text-sm text-[var(--muted)]">{f.k}</span>
                <span className="text-right font-semibold">{f.v}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">{t('profile.note')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="https://www.kasedkhair.com/wp-content/uploads/brochure.pdf" target="_blank" rel="noreferrer">
              {t('profile.download')}
            </Button>
            <Button to="/contact" variant="ghost">
              {t('nav.contact')}
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
