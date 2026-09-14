import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-950 pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[32rem] w-[32rem] rounded-full bg-forest-700/30 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[26rem] w-[26rem] rounded-full bg-gold-500/20 blur-[110px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-forest-100 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
          Rated 4.9/5 by 300+ homeowners &amp; businesses
        </Reveal>

        <Reveal
          delay={0.08}
          as="h1"
          className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl"
        >
          Outdoor spaces people don&rsquo;t want to leave.
        </Reveal>

        <Reveal
          delay={0.16}
          as="p"
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-forest-100/80 sm:text-lg"
        >
          Cityscape blends landscape design, hardscaping, and year-round care
          into one seamless service — for homes and businesses that want
          their grounds to feel as good as they look.
        </Reveal>

        <Reveal
          delay={0.24}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex cursor-pointer items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-lg shadow-gold-500/20 transition-colors duration-200 hover:bg-gold-400"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#portfolio"
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
          >
            <PlayCircle className="h-4 w-4" />
            View Our Work
          </a>
        </Reveal>

        <Reveal
          delay={0.32}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          {[
            ['15+', 'Years in business'],
            ['800+', 'Projects completed'],
            ['98%', 'Client retention'],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                {stat}
              </div>
              <div className="mt-1 text-xs text-forest-100/70 sm:text-sm">
                {label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
