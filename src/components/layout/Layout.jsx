import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLenis, getLenis } from '../../lib/useLenis'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useLenis()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (!el) return
        const lenis = getLenis()
        if (lenis) {
          lenis.scrollTo(el, { offset: -96, duration: 1.4 })
        } else {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    }

    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
