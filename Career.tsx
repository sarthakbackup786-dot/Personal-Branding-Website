import Section from './Section'
import { career } from '../data/profile'

export default function Career() {
  return (
    <Section id="career" title="Career" lede="Two fast track promotions took me from Analyst to Associate in under two and a half years.">
      <ol className="relative border-l border-rule ml-1.5">
        {career.map((c) => (
          <li key={c.role + c.dates} className="relative pl-7 pb-10 last:pb-0">
            <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-green" aria-hidden="true" />
            <p className="text-[0.85rem] text-muted num">{c.dates}</p>
            <h3 className="mt-1 font-serif text-[1.25rem] leading-snug text-ink">{c.role}</h3>
            <p className="text-[0.95rem] text-green">
              {c.place ? `${c.org}, ${c.place}` : c.org}
            </p>
            <p className="mt-2 text-muted text-[0.97rem] leading-relaxed max-w-[40rem]">{c.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
