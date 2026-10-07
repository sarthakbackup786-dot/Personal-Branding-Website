import Section from './Section'
import { strengths, roles } from '../data/profile'

export default function Strengths() {
  return (
    <Section id="strengths" title="What I bring">
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
        {strengths.map((s) => (
          <div key={s.title}>
            <h3 className="font-serif text-xl leading-snug text-ink">{s.title}</h3>
            <p className="mt-3 text-muted leading-relaxed text-[0.97rem]">{s.body}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-16 font-serif text-xl text-green">Where I fit</h3>
      <dl className="mt-4 border-t border-rule">
        {roles.map((r) => (
          <div key={r.title} className="grid sm:grid-cols-[17rem_1fr] gap-1 sm:gap-8 py-4 border-b border-rule">
            <dt className="font-medium text-ink">{r.title}</dt>
            <dd className="text-muted text-[0.97rem] leading-relaxed">{r.why}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
