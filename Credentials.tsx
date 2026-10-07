import Section from './Section'
import { education, recognition } from '../data/profile'

export default function Credentials() {
  return (
    <Section id="education" tone="sheet" title="Education and recognition">
      <div className="grid lg:grid-cols-2 gap-12">
        <ul className="space-y-6">
          {education.map((e) => (
            <li key={e.program}>
              <h3 className="font-serif text-[1.15rem] text-ink">{e.program}</h3>
              <p className="text-[0.95rem] text-muted">
                {e.org}, {e.dates}
                {e.note && `, ${e.note}`}
              </p>
            </li>
          ))}
        </ul>
        <ul className="space-y-3">
          {recognition.map((r) => (
            <li key={r} className="text-muted text-[0.97rem] leading-relaxed pl-4 border-l-2 border-rule">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
