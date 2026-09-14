import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'

const INFO = [
  { icon: PhoneCall, label: '(555) 123-4567', href: 'tel:+15551234567' },
  {
    icon: Mail,
    label: 'hello@cityscapelandscaping.com',
    href: 'mailto:hello@cityscapelandscaping.com',
  },
  { icon: MapPin, label: '482 Elm Street, Rivertown', href: null },
  { icon: Clock, label: 'Mon–Sat, 7am–6pm', href: null },
]

const SERVICES = [
  'Landscape Design',
  'Lawn Care & Maintenance',
  'Hardscaping',
  'Irrigation Systems',
  'Tree & Shrub Care',
  'Outdoor Lighting',
  'Not sure yet',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="text-xs font-semibold uppercase tracking-widest text-forest-700">
            Get in touch
          </Reveal>
          <Reveal
            as="h2"
            delay={0.06}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-forest-950 sm:text-4xl"
          >
            Get your free quote
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="mt-4 text-base leading-relaxed text-slate-600"
          >
            Tell us a bit about your project and we&rsquo;ll get back to you
            within one business day.
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-forest-950 p-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  Contact information
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                  Prefer to talk it through? Give us a call or stop by during
                  business hours.
                </p>
                <ul className="mt-8 space-y-5">
                  {INFO.map(({ icon: Icon, label, href }) => {
                    const content = (
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-forest-200">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm text-forest-100/90">
                          {label}
                        </span>
                      </div>
                    )
                    return (
                      <li key={label}>
                        {href ? (
                          <a
                            href={href}
                            className="cursor-pointer transition-colors duration-200 hover:text-white"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs leading-relaxed text-forest-100/70">
                  Serving Rivertown and surrounding areas within a 25-mile
                  radius, residential and commercial.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-forest-100 bg-forest-50 p-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-800 text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-forest-950">
                  Thanks — request received!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  We&rsquo;ll review your project details and reach out
                  within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-forest-100 bg-forest-50 p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-forest-950"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-forest-950 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-forest-950"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-forest-950 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-forest-950"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@email.com"
                      className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-forest-950 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-forest-950"
                    >
                      Service interested in
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-2 w-full cursor-pointer rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-forest-950 outline-none transition-colors duration-200 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-forest-950"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your space and what you have in mind..."
                      className="mt-2 w-full resize-none rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-forest-950 placeholder:text-slate-400 outline-none transition-colors duration-200 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20"
                    />
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-6 w-full cursor-pointer rounded-xl bg-forest-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-forest-700 sm:w-auto"
                >
                  Send my quote request
                </motion.button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
