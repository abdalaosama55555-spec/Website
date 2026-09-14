import { motion } from 'framer-motion'
import {
  Sprout,
  Scissors,
  Hammer,
  Droplets,
  TreePine,
  Lightbulb,
  ArrowUpRight,
} from 'lucide-react'
import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    icon: Sprout,
    title: 'Landscape Design',
    desc: 'Custom design plans built around your property, budget, and how you actually use the space.',
  },
  {
    icon: Scissors,
    title: 'Lawn Care & Maintenance',
    desc: 'Mowing, fertilization, and seasonal cleanup on a schedule that keeps your lawn consistently sharp.',
  },
  {
    icon: Hammer,
    title: 'Hardscaping',
    desc: 'Patios, walkways, retaining walls, and outdoor kitchens built to last through every season.',
  },
  {
    icon: Droplets,
    title: 'Irrigation Systems',
    desc: 'Smart sprinkler design, installation, and repair that waters efficiently and saves you money.',
  },
  {
    icon: TreePine,
    title: 'Tree & Shrub Care',
    desc: 'Planting, pruning, and health treatments from arborists who know what your greenery needs.',
  },
  {
    icon: Lightbulb,
    title: 'Outdoor Lighting',
    desc: 'Landscape lighting design that adds safety, ambiance, and curb appeal after dark.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-forest-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="text-xs font-semibold uppercase tracking-widest text-forest-700">
            What we do
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl"
          >
            Full-service landscaping, start to finish
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="mt-4 text-base leading-relaxed text-slate-600"
          >
            From the first sketch to year-round upkeep, one team handles it
            all — so nothing falls through the cracks.
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={0.05 * (i % 3)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group h-full cursor-pointer rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg hover:shadow-forest-900/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-800 text-white transition-colors duration-200 group-hover:bg-gold-500 group-hover:text-forest-950">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-forest-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-forest-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
