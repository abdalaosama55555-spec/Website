import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal.jsx'

const REVIEWS = [
  {
    quote:
      'Cityscape turned a patchy backyard into the best room in our house. The design process was easy and they actually showed up when they said they would.',
    name: 'Danielle R.',
    role: 'Homeowner, Maple Ridge',
  },
  {
    quote:
      'We manage grounds for three office parks and Cityscape is the only crew that has never given us a reason to look elsewhere. Reliable and genuinely good work.',
    name: 'Marcus T.',
    role: 'Property Manager, Riverside',
  },
  {
    quote:
      'The irrigation system alone paid for itself in a season. They explained everything in plain language and never tried to upsell us on things we didn’t need.',
    name: 'Priya S.',
    role: 'Homeowner, Hillcrest',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-forest-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="text-xs font-semibold uppercase tracking-widest text-forest-700">
            Client reviews
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl"
          >
            Trusted by homes and businesses across the city
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map(({ quote, name, role }, i) => (
            <Reveal key={name} delay={0.08 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
                <Quote className="h-6 w-6 text-gold-500" strokeWidth={2} />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-forest-100 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 font-heading text-sm font-semibold text-white">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-forest-950">
                      {name}
                    </div>
                    <div className="text-xs text-slate-500">{role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
