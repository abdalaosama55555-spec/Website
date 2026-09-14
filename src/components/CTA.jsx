import { ArrowRight, PhoneCall } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section className="bg-forest-50 px-4 pb-24 sm:px-6">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 px-8 py-14 text-center sm:px-16 sm:py-16">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to transform your outdoor space?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-forest-100/80">
          Quotes are free, estimates are honest, and the first conversation
          costs you nothing but a few minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group flex cursor-pointer items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors duration-200 hover:bg-gold-400"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="tel:+15551234567"
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            <PhoneCall className="h-4 w-4" />
            (555) 123-4567
          </a>
        </div>
      </Reveal>
    </section>
  )
}
