import { personal } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="bg-green text-paper on-green">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Let’s talk</h2>
          <p className="mt-4 max-w-prose text-paper/85 leading-relaxed">
            I am happy to discuss full time roles, live projects and introductions. Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="mt-8 inline-block font-serif text-xl sm:text-2xl md:text-3xl underline decoration-paper/40 underline-offset-[6px] hover:decoration-paper break-all"
          >
            {personal.email}
          </a>
        </div>
        <dl className="space-y-4 text-[0.95rem]">
          <div>
            <dt className="text-green-soft">LinkedIn</dt>
            <dd>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-paper/40 hover:decoration-paper">
                {personal.linkedinLabel}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-green-soft">Based in</dt>
            <dd>{personal.location}</dd>
          </div>
          <div>
            <dt className="text-green-soft">CV</dt>
            <dd>
              <a href={personal.resumeFile} download className="underline underline-offset-4 decoration-paper/40 hover:decoration-paper">
                Download PDF
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
