import Section from './Section'
import { mbaWork } from '../data/profile'

export default function Mba() {
  return (
    <Section id="mba" title="At IIM Lucknow" lede="Coursework I have applied to real companies this year.">
      <ul className="border-t border-rule">
        {mbaWork.map((m) => (
          <li key={m.title} className="grid sm:grid-cols-[1fr_1.4fr] gap-x-8 gap-y-1 py-5 border-b border-rule">
            <div>
              <h3 className="font-serif text-[1.15rem] text-ink">{m.title}</h3>
              <p className="text-[0.85rem] text-muted">{m.course}</p>
            </div>
            <p className="text-muted text-[0.97rem] leading-relaxed">{m.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
