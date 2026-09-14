import { ClipboardList, PencilRuler, HardHat, Sprout } from 'lucide-react'
import Reveal from './Reveal.jsx'

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    desc: 'We walk your property together and talk through your vision, priorities, and budget.',
  },
  {
    icon: PencilRuler,
    title: 'Design',
    desc: 'You get a custom plan with concepts, materials, and a clear price before anything starts.',
  },
  {
    icon: HardHat,
    title: 'Build',
    desc: 'Our crews bring it to life on schedule, with regular updates so you always know where things stand.',
  },
  {
    icon: Sprout,
    title: 'Maintain',
    desc: 'Ongoing care keeps everything thriving — so the results still look this good next year.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-forest-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="text-xs font-semibold uppercase tracking-widest text-forest-200">
            How it works
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            A simple, four-step process
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-6 hidden h-px w-full bg-white/10 lg:block"
            aria-hidden="true"
          />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={0.08 * i} className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-forest-500/30 bg-forest-900 text-forest-200">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="font-heading text-sm font-semibold text-gold-400">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
