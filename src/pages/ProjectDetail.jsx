import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProject, relatedProjects } from '../data/projects'
import { Button, PhotoCard, Reveal } from '../components/ui/Primitives'
import ExpandMedia from '../components/ui/ExpandMedia'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const project = getProject(slug)

  if (!project) return <NotFound />

  const related = relatedProjects(project)
  const catKeys = {
    buildings: 'filterBuildings',
    marine: 'filterMarine',
    steel: 'filterSteel',
    roads: 'filterRoads',
  }
  const catLabel = t(`projectsPage.${catKeys[project.category]}`)

  return (
    <div>
      <section className="pt-32 md:pt-36">
        <div className="wrap pb-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">{project.place[lang]}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] md:text-6xl">{project.title[lang]}</h1>
          </Reveal>
        </div>
        <ExpandMedia src={project.image} alt={project.title[lang]} />
      </section>

      <section className="wrap grid gap-12 py-16 md:py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">{t('project.description')}</p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">{project.description[lang]}</p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-4">
          <div className="space-y-6 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6">
            <Meta label={t('project.place')} value={project.place[lang]} />
            <Meta label={t('project.owner')} value={project.owner[lang]} />
            <Meta label={t('project.category')} value={catLabel} />
            <Button to="/projects" variant="ghost">
              {t('project.back')}
            </Button>
          </div>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="wrap pb-24">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">{t('project.related')}</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <PhotoCard to={`/projects/${p.slug}`} image={p.image} kicker={p.place[lang]} title={p.title[lang]} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">{label}</p>
      <p className="mt-2">{value}</p>
    </div>
  )
}
