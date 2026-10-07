import Section from './Section'
import { leadership } from '../data/profile'

export default function Leadership() {
  return (
    <Section id="leadership" tone="sheet" title="Leadership" lede="Building teams, offices and programs, not only deliverables.">
      <div className="space-y-12">
        {leadership.map((g) => (
          <div key={g.where}>
            <h3 className="text-[0.95rem] font-semibold text-green pb-3 border-b border-rule">{g.where}</h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {g.items.map((it) => (
                <div key={it.title}>
                  <h4 className="font-serif text-[1.15rem] text-ink">{it.title}</h4>
                  <p className="mt-1.5 text-muted text-[0.97rem] leading-relaxed">{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
