import Section from '../layout/Section'
import { certifications } from '../../data/site'

export default function CertificationsSection() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Training & Certifications"
    >
      <div className="flex gap-4 overflow-x-auto pb-3 pr-1 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="snap-start flex-shrink-0 min-w-[280px] max-w-[320px] sm:max-w-none sm:flex-shrink rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-soft backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              {certification.organization}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {certification.title}
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              {certification.description}
            </p>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Skills
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                {certification.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}