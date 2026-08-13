import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar'
import Footer from './Footer'
import Cursor from '../ui/Cursor'
import { ScrollProgress } from '../../lib/gsap.jsx'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

function scrollToTop() {
  window.__lenis?.scrollTo(0, { immediate: true, force: true })
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      autoRaf: false,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const ticker = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)
    window.__lenis = lenis
    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    scrollToTop()
    const frame = requestAnimationFrame(() => {
      scrollToTop()
      ScrollTrigger.refresh()
    })
    const timer = window.setTimeout(scrollToTop, 80)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [location.pathname, location.search, location.hash])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
