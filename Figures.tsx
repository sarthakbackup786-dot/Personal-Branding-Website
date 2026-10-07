import { figures } from '../data/profile'

export default function Figures() {
  return (
    <section aria-label="Track record in numbers" className="bg-paper">
      <dl className="max-w-content mx-auto px-5 sm:px-8 py-10 md:py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8">
        {figures.map((f) => (
          <div key={f.label} className="pr-4 pl-4 border-l border-rule first:border-l-0 first:pl-0 [&:nth-child(2n+1)]:max-sm:border-l-0 [&:nth-child(2n+1)]:max-sm:pl-0 sm:[&:nth-child(3n+1)]:max-lg:border-l-0 sm:[&:nth-child(3n+1)]:max-lg:pl-0">
            <dt className="sr-only">{f.label}</dt>
            <dd>
              <span className="block font-serif num text-[2rem] leading-none text-green">{f.value}</span>
              <span className="block mt-2 text-[0.85rem] leading-snug text-muted">{f.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
