import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

const PROJECTS = [
  {
    title: 'Maple Ridge Backyard',
    tag: 'Residential Patio',
    gradient: 'from-forest-700 via-forest-800 to-forest-950',
  },
  {
    title: 'Hillcrest Estate Grounds',
    tag: 'Full Redesign',
    gradient: 'from-gold-500 via-gold-600 to-forest-900',
  },
  {
    title: 'Riverside Office Park',
    tag: 'Commercial Grounds',
    gradient: 'from-forest-500 via-forest-700 to-forest-950',
  },
  {
    title: 'Oakwood Xeriscape Garden',
    tag: 'Drought-Tolerant Design',
    gradient: 'from-forest-800 via-gold-600 to-gold-500',
  },
  {
    title: 'Willow Creek Pool Deck',
    tag: 'Pool Landscaping',
    gradient: 'from-forest-950 via-forest-800 to-forest-500',
  },
  {
    title: 'The Birchwood Kitchen',
    tag: 'Outdoor Kitchen',
    gradient: 'from-gold-600 via-forest-900 to-forest-950',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal className="text-xs font-semibold uppercase tracking-widest text-forest-700">
              Recent work
            </Reveal>
            <Reveal
              as="h2"
              delay={0.06}
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl"
            >
              Projects our clients love
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-forest-800 transition-colors duration-200 hover:text-forest-950"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ title, tag, gradient }, i) => (
            <Reveal key={title} delay={0.05 * (i % 3)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-forest-100"
              >
                <div
                  className={`relative flex h-52 items-end bg-gradient-to-br ${gradient} p-5`}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {tag}
                  </span>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="bg-forest-50 p-4">
                  <h3 className="font-heading text-base font-semibold text-forest-950">
                    {title}
                  </h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
