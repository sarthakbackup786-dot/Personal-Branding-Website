import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  lede?: string
  children: ReactNode
  tone?: 'paper' | 'sheet'
}

/** Shared section frame: heading column on the left, content on the right (stacked on mobile). */
export default function Section({ id, title, lede, children, tone = 'paper' }: Props) {
  return (
    <section id={id} className={`border-t border-rule ${tone === 'sheet' ? 'bg-sheet' : ''}`}>
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-[15rem_1fr] gap-8 md:gap-14">
        <div>
          <h2 className="font-serif text-[1.75rem] md:text-[2rem] leading-tight text-green">{title}</h2>
          {lede && <p className="mt-3 text-muted text-[0.95rem] leading-relaxed max-w-xs">{lede}</p>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
