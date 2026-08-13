import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { mapsUrl, offices, socials } from '../../data/company'

const icons = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin }

export default function Footer() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-2)]">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/logo.png" alt="Kased Khair" className="h-10 w-auto dark:brightness-0 dark:invert" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--muted)]">{t('footer.blurb')}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">{t('footer.commitment')}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => {
              const Icon = icons[s.id]
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">{t('footer.explore')}</p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <Link to="/about" className="hover:text-[var(--gold)]">{t('nav.about')}</Link>
            <Link to="/projects" className="hover:text-[var(--gold)]">{t('nav.projects')}</Link>
            <Link to="/equipment" className="hover:text-[var(--gold)]">{t('nav.equipment')}</Link>
            <Link to="/awards" className="hover:text-[var(--gold)]">{t('nav.awards')}</Link>
            <Link to="/profile" className="hover:text-[var(--gold)]">{t('nav.profile')}</Link>
            <Link to="/contact" className="hover:text-[var(--gold)]">{t('nav.contact')}</Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">{t('footer.locations')}</p>
          <div className="mt-5 space-y-5 text-sm text-[var(--muted)]">
            {offices.map((o) => (
              <div key={o.id}>
                <p className="font-semibold text-[var(--text)]">{o.title[lang]}</p>
                <a href={mapsUrl(o.mapsQuery)} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
                  {o.lines[lang][0]}
                </a>
                {o.phones[0] && <p>{o.phones[0]}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--line)] py-6 text-center text-xs text-[var(--muted)]">
        © {year} {t('brand.name')}. {t('footer.rights')}
      </div>
    </footer>
  )
}
