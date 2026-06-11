import { useState } from 'react'
import { missionTypes } from '../../data/supportData'

const inputClass =
  'w-full border border-white/10 bg-white/[0.03] px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 transition-colors duration-300 focus:border-sky-400/40 focus:bg-white/[0.05] focus:outline-none'

/**
 * Contact form — UI only, no backend submission.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center border border-white/8 bg-white/[0.02] px-8 py-12">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/80">
          Message received
        </p>
        <p className="mt-4 max-w-sm font-serif text-2xl font-light text-white">
          Thank you — our engineering team will respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/50 transition-opacity duration-300 hover:text-white/80"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/8 bg-white/[0.02] px-8 py-10"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
            Company
          </label>
          <input id="company" name="company" type="text" required className={inputClass} placeholder="Organisation" />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="email" className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="mission" className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
          Mission type
        </label>
        <select id="mission" name="mission" required className={`${inputClass} cursor-pointer`} defaultValue="">
          <option value="" disabled>
            Select mission type
          </option>
          {missionTypes.map((type) => (
            <option key={type} value={type} className="bg-[#060c12]">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Describe your mission requirements…"
        />
      </div>

      <button
        type="submit"
        className="mt-8 w-full border border-sky-400/30 bg-sky-400/10 px-6 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sky-300 transition-all duration-300 hover:border-sky-400/55 hover:bg-sky-400/18 hover:shadow-[0_0_28px_rgba(56,189,248,0.12)]"
      >
        Contact engineering team
      </button>
    </form>
  )
}
