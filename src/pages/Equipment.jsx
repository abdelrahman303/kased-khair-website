import { useTranslation } from 'react-i18next'
import { PageHero, Reveal } from '../components/ui/Primitives'
import MediaFrame from '../components/ui/MediaFrame'
import { projects } from '../data/projects'

const keys = [
  { id: 'marine', img: 'port-said-naval-base-quay' },
  { id: 'civil', img: 'bernis-naval-base-at-ras-banas' },
  { id: 'dredging', img: 'dredging-manzala-lake' },
  { id: 'steel', img: 'submarines-hanger' },
]

export default function Equipment() {
  const { t } = useTranslation()

  return (
    <div>
      <PageHero
        kicker={t('equipment.heroKicker')}
        title={t('equipment.heroTitle')}
        lead={t('equipment.heroLead')}
        image={projects.find((p) => p.slug === 'el-mistral-quay').image}
      />
      <section className="wrap py-16 md:py-20">
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">{t('equipment.intro')}</p>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {keys.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <MediaFrame src={projects.find((p) => p.slug === item.img)?.image} className="aspect-[16/10]" />
              <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">0{i + 1}</p>
              <h3 className="font-display mt-2 text-3xl">{t(`equipment.items.${item.id}.title`)}</h3>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{t(`equipment.items.${item.id}.text`)}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
