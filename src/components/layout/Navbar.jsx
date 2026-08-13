import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { applyDocumentLang } from '../../i18n'
import { useTheme } from '../../context/ThemeContext'
import { cn } from '../../lib/cn'

const links = [
  { to: '/', key: 'home', n: '01' },
  { to: '/about', key: 'about', n: '02' },
  { to: '/projects', key: 'projects', n: '03' },
  { to: '/equipment', key: 'equipment', n: '04' },
  { to: '/awards', key: 'awards', n: '05' },
  { to: '/profile', key: 'profile', n: '06' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isDarkHero = location.pathname === '/'
  const lightText = isDarkHero && !scrolled && !open

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 p-3 md:p-4">
      <div
        className={cn(
          'pointer-events-auto relative z-50 mx-auto flex max-w-7xl items-center gap-2 rounded-[22px] border px-3 py-2.5 shadow-[var(--shadow)] backdrop-blur-2xl transition-all duration-500 md:gap-3 md:px-4',
          scrolled || open || !isDarkHero
            ? 'border-[var(--line)] bg-[var(--nav)]'
            : 'border-white/15 bg-black/25',
        )}
      >
        <Link to="/" className="flex shrink-0 items-center rounded-2xl px-1">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Kased Khair"
            className={cn(
              'h-8 w-auto max-w-[132px] object-contain md:h-9 md:max-w-[150px]',
              lightText ? 'brightness-0 invert' : 'dark:brightness-0 dark:invert',
            )}
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto no-scrollbar xl:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative shrink-0 rounded-full px-3 py-2 text-[11px] font-semibold tracking-wide whitespace-nowrap transition-colors lg:px-3.5 lg:text-[12px]',
                  isActive
                    ? 'text-[#0b1220]'
                    : lightText
                      ? 'text-white/80 hover:text-white'
                      : 'text-[var(--muted)] hover:text-[var(--text)]',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[var(--gold)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{t(`nav.${l.key}`)}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-1.5 md:gap-2">
          <div
            className={cn(
              'flex overflow-hidden rounded-full border text-[10px] font-bold tracking-[0.14em]',
              lightText ? 'border-white/25 text-white' : 'border-[var(--line)] text-[var(--text)]',
            )}
          >
            <button
              type="button"
              onClick={() => {
                if (i18n.language !== 'en') {
                  i18n.changeLanguage('en')
                  applyDocumentLang('en')
                }
              }}
              className={cn('px-2.5 py-1.5', i18n.language !== 'ar' && 'bg-[var(--gold)] text-[#0b1220]')}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => {
                if (i18n.language !== 'ar') {
                  i18n.changeLanguage('ar')
                  applyDocumentLang('ar')
                }
              }}
              className={cn('px-2.5 py-1.5', i18n.language === 'ar' && 'bg-[var(--gold)] text-[#0b1220]')}
            >
              AR
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              'grid h-9 w-9 place-items-center rounded-full border',
              lightText ? 'border-white/25 text-white' : 'border-[var(--line)] text-[var(--text)]',
            )}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Link
            to="/contact"
            className="hidden items-center gap-1 rounded-full bg-[var(--gold)] px-4 py-2 text-[11px] font-bold text-[#0b1220] sm:inline-flex"
          >
            {t('nav.contact')}
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className={cn(
              'grid h-9 w-9 place-items-center rounded-full border xl:hidden',
              lightText ? 'border-white/25 text-white' : 'border-[var(--line)] text-[var(--text)]',
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-auto fixed inset-0 z-40 bg-[#07090d]/96 backdrop-blur-xl xl:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-24 md:px-12">
              <p className="text-[11px] tracking-[0.35em] text-[var(--gold)] uppercase">{t('brand.tagline')}</p>
              <div className="mt-8 flex flex-col">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.45 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-baseline gap-4 border-b border-white/10 py-4',
                          isActive ? 'text-[var(--gold)]' : 'text-white',
                        )
                      }
                    >
                      <span className="font-display text-sm text-[var(--gold)]">{l.n}</span>
                      <span className="font-display text-4xl md:text-6xl">{t(`nav.${l.key}`)}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] py-4 text-sm font-bold text-[#0b1220]"
              >
                {t('nav.contact')}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
