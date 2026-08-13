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

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
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
    window.__lenis?.scrollTo(0, { immediate: true })
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [location.pathname])

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
