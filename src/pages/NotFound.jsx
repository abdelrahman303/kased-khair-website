import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/Primitives'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <section className="wrap flex min-h-screen flex-col justify-center py-32">
      <p className="font-display text-7xl text-[var(--gold)]">404</p>
      <h1 className="mt-4 text-3xl font-semibold">{t('notFound.title')}</h1>
      <p className="mt-3 max-w-md text-[var(--muted)]">{t('notFound.text')}</p>
      <div className="mt-8">
        <Button to="/">{t('notFound.home')}</Button>
      </div>
    </section>
  )
}
