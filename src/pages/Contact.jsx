import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Button, PageHero, Reveal } from '../components/ui/Primitives'
import { mailUrl, mapsUrl, offices, SALES_EMAIL, socials } from '../data/company'
import { projects } from '../data/projects'

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SUBJECT_KEYS = ['newProject', 'marine', 'buildings', 'steel', 'roads', 'equipment', 'partnership', 'profile', 'other']

export default function Contact() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'
  const [status, setStatus] = useState('idle')
  const [subject, setSubject] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const subjectLabel = t(`contact.subjects.${data.subject}`)
    setStatus('sending')

    const payload = {
      name: data.from_name,
      email: data.from_email,
      subject: subjectLabel,
      message: data.message,
      _subject: `Kased Khair website — ${subjectLabel}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: data.from_email,
    }

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SALES_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('formsubmit')
      setStatus('success')
      form.reset()
      setSubject('')
      return
    } catch {
      /* try EmailJS next */
    }

    if (SERVICE && TEMPLATE && KEY && !String(SERVICE).startsWith('your_')) {
      try {
        await emailjs.send(
          SERVICE,
          TEMPLATE,
          {
            from_name: data.from_name,
            from_email: data.from_email,
            subject: subjectLabel,
            message: data.message,
            to_email: SALES_EMAIL,
          },
          { publicKey: KEY },
        )
        setStatus('success')
        form.reset()
        setSubject('')
        return
      } catch {
        /* mailto fallback */
      }
    }

    window.location.href = mailUrl({
      subject: `Kased Khair website — ${subjectLabel}`,
      body: `Name: ${data.from_name}\nEmail: ${data.from_email}\nSubject: ${subjectLabel}\n\n${data.message}`,
    })
    setStatus('success')
  }

  return (
    <div>
      <PageHero
        kicker={t('contact.heroKicker')}
        title={t('contact.heroTitle')}
        lead={t('contact.heroLead')}
        image={projects.find((p) => p.slug === 'west-quay-ras-el-tin').image}
      />

      <section className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          {offices.map((o, i) => (
            <Reveal key={o.id} delay={i * 0.05} className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-semibold">{o.title[lang]}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{o.city[lang]}</p>
              <div className="mt-4 space-y-3 text-sm">
                {o.lines[lang].map((line) => (
                  <a key={line} href={mapsUrl(o.mapsQuery)} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-[var(--gold)]">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    <span>
                      {line}
                      <ExternalLink size={12} className="ms-1 inline opacity-60" />
                    </span>
                  </a>
                ))}
                {o.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/[^\d+]/g, '')}`} className="flex gap-2 hover:text-[var(--gold)]">
                    <Phone size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    {p}
                  </a>
                ))}
                {o.emails.map((em) => (
                  <a
                    key={`${o.id}-${em}`}
                    href={mailUrl({
                      email: em,
                      subject: t('contact.mailSubject', { office: o.title[lang] }),
                      body: t('contact.mailBody', { office: o.title[lang], city: o.city[lang] }),
                    })}
                    className="flex gap-2 hover:text-[var(--gold)]"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    {em}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.18} className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">{t('contact.socials')}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = s.id === 'instagram' ? Instagram : s.id === 'facebook' ? Facebook : Linkedin
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  >
                    <Icon size={16} />
                    {s.label}
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>

        <Reveal className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 md:p-10 lg:col-span-7">
          <form onSubmit={onSubmit}>
            <h2 className="font-display text-3xl md:text-4xl">{t('contact.formTitle')}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{t('contact.formHint', { email: SALES_EMAIL })}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field name="from_name" label={t('contact.name')} required />
              <Field name="from_email" label={t('contact.email')} type="email" required />
            </div>
            <div className="mt-5">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{t('contact.subject')}</span>
                <select
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-2 w-full appearance-none rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3"
                >
                  <option value="">{t('contact.subjects.placeholder')}</option>
                  {SUBJECT_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {t(`contact.subjects.${key}`)}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mt-5">
              <label className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{t('contact.message')}</label>
              <textarea name="message" rows={6} required className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3" />
            </div>
            <div className="mt-8">
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </Button>
            </div>
            {status === 'success' && <p className="mt-4 text-sm text-emerald-600">{t('contact.success')}</p>}
            {status === 'error' && <p className="mt-4 text-sm text-red-500">{t('contact.error')}</p>}
          </form>
        </Reveal>
      </section>

      <section className="wrap pb-24">
        <div className="overflow-hidden rounded-3xl">
          <iframe
            title="Kased Khair Alexandria"
            src="https://maps.google.com/maps?q=75%20Fawzy%20Moaz%20Street%20Smouha%20Alexandria&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-[42vh] w-full grayscale invert-[.84] dark:invert"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}

function Field({ name, label, type = 'text', required }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{label}</span>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3" />
    </label>
  )
}
