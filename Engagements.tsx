import { useState } from 'react'
import Section from './Section'
import { engagements, lenses, type Lens } from '../data/profile'

export default function Engagements() {
  const [lens, setLens] = useState<Lens | 'All'>('All')
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const shown = engagements.map((e, i) => ({ e, i })).filter(({ e }) => lens === 'All' || e.lenses.includes(lens))

  return (
    <Section
      id="work"
      tone="sheet"
      title="Selected work"
      lede="Client names are withheld. Each note covers the situation, what I did and the result."
    >
      <div role="group" aria-label="Filter by type of work" className="flex flex-wrap gap-2">
        {(['All', ...lenses] as const).map((l) => (
          <button
            key={l}
            aria-pressed={lens === l}
            onClick={() => setLens(l)}
            className={`px-3.5 py-1.5 text-[0.85rem] border ${
              lens === l ? 'bg-green border-green text-paper' : 'border-rule text-muted hover:border-green hover:text-green'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <ul className="mt-8 border-t border-rule">
        {shown.map(({ e, i }) => {
          const open = openIdx === i
          const panelId = `eng-${i}`
          return (
            <li key={e.title} className="border-b border-rule">
              <button
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIdx(open ? null : i)}
                className="w-full text-left py-5 grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-1 items-baseline group"
              >
                <span>
                  <span className="font-serif text-[1.3rem] leading-snug text-ink group-hover:text-green">{e.title}</span>
                  <span className="block mt-1 text-[0.9rem] text-muted">{e.client}</span>
                </span>
                <span className="flex items-center gap-3 sm:justify-end">
                  <span className="num text-oxblood font-medium text-[0.97rem]">{e.result}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                    className={`shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
                  >
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
              <div id={panelId} hidden={!open} className="pb-7 max-w-[42rem]">
                <dl className="grid sm:grid-cols-[7.5rem_1fr] gap-x-6 gap-y-3 text-[0.97rem] leading-relaxed">
                  <dt className="font-medium text-ink">Situation</dt>
                  <dd className="text-muted">{e.situation}</dd>
                  <dt className="font-medium text-ink">What I did</dt>
                  <dd className="text-muted">{e.action}</dd>
                  <dt className="font-medium text-ink">Outcome</dt>
                  <dd className="text-ink">{e.outcome}</dd>
                </dl>
                <p className="mt-4 text-[0.8rem] text-muted">Relevant to: {e.lenses.join(', ')}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
