import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react'

const SERVICES = [
  'Landscape Design',
  'Lawn Care & Maintenance',
  'Hardscaping',
  'Irrigation Systems',
  'Tree & Shrub Care',
  'Outdoor Lighting',
]

const COMPANY = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Our Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-950 pt-16">
      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex cursor-pointer items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-700 text-white">
                <Leaf className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="font-heading text-lg font-bold text-white">
                Cityscape
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-100/60">
              Design, build, and maintenance for outdoor spaces that work as
              hard as they look good. Serving Rivertown and the surrounding
              area since 2009.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 text-forest-100/70 transition-colors duration-200 hover:border-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="cursor-pointer text-sm text-forest-100/60 transition-colors duration-200 hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="cursor-pointer text-sm text-forest-100/60 transition-colors duration-200 hover:text-white"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-forest-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Cityscape Landscaping. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="cursor-pointer transition-colors duration-200 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
