import { useEffect, useState } from 'react'
import { personal } from '../data/profile'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#career', label: 'Career' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#mba', label: 'MBA' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = scrolled || open
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        light ? 'bg-paper/95 backdrop-blur border-b border-rule text-ink' : 'bg-transparent text-paper on-green'
      }`}
    >
      <nav className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <a href="#top" className="font-serif text-lg">
          {personal.name}
        </a>
        <ul className="hidden md:flex items-center gap-8 text-[0.9rem]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`hover:underline underline-offset-4 ${light ? 'text-muted hover:text-ink' : 'text-paper/80 hover:text-paper'}`}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.resumeFile}
              download
              className={`px-4 py-2 border text-[0.9rem] ${
                light ? 'border-green text-green hover:bg-green hover:text-paper' : 'border-paper/60 hover:bg-paper hover:text-green'
              }`}
            >
              Download CV
            </a>
          </li>
        </ul>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden px-5 pb-6 flex flex-col gap-1 text-base">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href={personal.resumeFile} download className="inline-block px-4 py-2 border border-green text-green">
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
