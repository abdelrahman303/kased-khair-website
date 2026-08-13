import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageHero, PhotoCard, Reveal } from '../components/ui/Primitives'
import { categories, projects } from '../data/projects'
import { cn } from '../lib/cn'

export default function Projects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const [filter, setFilter] = useState('all')

  const list = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div>
      <PageHero
        kicker={t('projectsPage.heroKicker')}
        title={t('projectsPage.heroTitle')}
        lead={t('projectsPage.heroLead')}
        image={projects[0].image}
      />

      <section className="wrap py-12 md:py-16">
        <Reveal>
          <p className="max-w-2xl text-[var(--muted)]">{t('projectsPage.intro')}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]',
                  filter === c.id ? 'bg-[var(--gold)] text-[#0b1220]' : 'border border-[var(--line)] text-[var(--muted)]',
                )}
              >
                {t(`projectsPage.${c.key}`)}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap grid gap-8 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {filter === 'roads' && list.length === 0 && (
          <p className="text-[var(--muted)] sm:col-span-2 lg:col-span-3">{t('projectsPage.emptyRoads')}</p>
        )}
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 6) * 0.04}>
            <PhotoCard to={`/projects/${p.slug}`} image={p.image} kicker={p.place[lang]} title={p.title[lang]} />
          </Reveal>
        ))}
      </section>
    </div>
  )
}
