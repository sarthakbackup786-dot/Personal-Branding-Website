import { personal } from '../data/profile'

function Portrait({ className }: { className: string }) {
  return (
    <picture>
      <source srcSet="/headshot.webp" type="image/webp" />
      <img
        src="/headshot.jpg"
        alt="Sarthak Gandhi"
        width={1000}
        height={1000}
        className={`object-cover object-[50%_20%] ${className}`}
        loading="eager"
      />
    </picture>
  )
}

export default function Hero() {
  return (
    <section id="top" className="bg-green text-paper on-green">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-28 pb-14 md:pt-36 md:pb-20 grid md:grid-cols-[1fr_20rem] lg:grid-cols-[1fr_22rem] gap-10 md:gap-16 items-end">
        <div className="settle">
          <div className="flex items-end gap-5">
            <h1 className="font-serif text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[5.25rem] tracking-[-0.01em]">
              Sarthak
              <br />
              Gandhi
            </h1>
            <Portrait className="md:hidden w-24 h-28 shrink-0 mb-1" />
          </div>
          <p className="mt-5 text-green-soft text-[1.05rem]">{personal.program}</p>
          <p className="mt-6 max-w-prose text-paper/90 text-[1.05rem] md:text-lg leading-relaxed">{personal.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={personal.resumeFile}
              download
              className="bg-paper text-green px-4 sm:px-5 py-2.5 sm:py-3 text-[0.95rem] font-medium hover:bg-white"
            >
              Download CV
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-paper/50 px-4 sm:px-5 py-2.5 sm:py-3 text-[0.95rem] hover:border-paper hover:bg-green-deep"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="border border-paper/50 px-4 sm:px-5 py-2.5 sm:py-3 text-[0.95rem] hover:border-paper hover:bg-green-deep"
            >
              Email me
            </a>
          </div>
        </div>
        <div className="hidden md:block settle" style={{ animationDelay: '120ms' }}>
          <Portrait className="w-full aspect-[4/5]" />
        </div>
      </div>
    </section>
  )
}
