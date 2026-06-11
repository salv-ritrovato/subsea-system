import { useState } from 'react'
import { faqItems } from '../../data/supportData'
import './faq-accordion.css'

/**
 * FAQ accordion — single-open pattern, minimal transitions.
 */
export default function FaqAccordion() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="faq-accordion divide-y divide-white/6 border border-white/8">
      {faqItems.map(({ id, question, answer }) => {
        const isOpen = openId === id

        return (
          <div key={id} className="faq-accordion__item">
            <button
              type="button"
              className="faq-accordion__trigger flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-white/[0.02]"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${id}`}
              onClick={() => toggle(id)}
            >
              <span className="font-sans text-sm text-white/85">{question}</span>
              <span className={`faq-accordion__icon shrink-0 ${isOpen ? 'faq-accordion__icon--open' : ''}`} aria-hidden="true" />
            </button>

            <div
              id={`faq-panel-${id}`}
              className={`faq-accordion__panel ${isOpen ? 'faq-accordion__panel--open' : ''}`}
              role="region"
              aria-hidden={!isOpen}
            >
              <div className="faq-accordion__panel-inner">
                <p className="px-6 pb-5 text-sm leading-relaxed text-white/55">{answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
