import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X, PhoneCall } from 'lucide-react'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'border-forest-100 bg-white/90 shadow-lg shadow-forest-950/5 backdrop-blur-md'
            : 'border-white/40 bg-white/60 backdrop-blur-sm'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 cursor-pointer">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-800 text-white">
            <Leaf className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-forest-950">
            Cityscape
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-forest-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+15551234567"
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-forest-800"
          >
            <PhoneCall className="h-4 w-4" />
            (555) 123-4567
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-xl bg-forest-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-forest-700"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer rounded-lg p-2 text-forest-950 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-forest-100 bg-white/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-forest-50 hover:text-forest-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 cursor-pointer rounded-xl bg-forest-800 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Free Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
