import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import MediaFrame from './MediaFrame'
import ExpandMedia from './ExpandMedia'

export function Button({ to, href, variant = 'gold', className, children, ...props }) {
  const styles = {
    gold: 'bg-[var(--gold)] text-[#0b1220] hover:brightness-110',
    ghost: 'border border-[var(--line)] text-[var(--text)] hover:border-[var(--gold)] hover:text-[var(--gold)]',
    light: 'bg-white text-[#0b1220] hover:bg-[var(--gold-soft)]',
  }

  const cls = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300',
    styles[variant],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}

export function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function PageHero({ kicker, title, lead, image }) {
  return (
    <section>
      <div className="wrap pt-28 pb-6 md:pt-36 md:pb-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold)]">{kicker}</p>
          <h1 className="font-display mt-3 max-w-4xl text-[1.85rem] leading-[1.12] md:mt-4 md:text-6xl">{title}</h1>
          {lead && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:mt-6 md:text-lg">{lead}</p>}
        </Reveal>
      </div>
      {image && <ExpandMedia src={image} />}
    </section>
  )
}

export function PhotoCard({ to, href, image, kicker, title, className }) {
  const inner = (
    <>
      <MediaFrame src={image} className="aspect-[4/3]" />
      {kicker && (
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">{kicker}</p>
      )}
      <h3 className="font-display mt-1 text-xl transition-colors group-hover:text-[var(--gold)] md:text-[1.7rem]">
        {title}
      </h3>
    </>
  )
  const cls = cn('group block', className)
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href) return <a href={href} className={cls}>{inner}</a>
  return <article className={cls}>{inner}</article>
}
