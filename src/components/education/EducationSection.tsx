import Section from '../layout/Section'
import { education } from '../../data/site'

export default function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic Background"
    >
      <article className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-soft backdrop-blur-xl">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Bachelor of Engineering in
              <br />
              Computer and Communications Engineering
            </h3>
            <p className="text-sm text-slate-300">Antonine University</p>
            <p className="text-sm font-medium text-slate-400 lg:hidden">{education.period}</p>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Focus Areas</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                <li>• Software Engineering</li>
                <li>• Networks</li>
                <li>• System Design</li>
                <li>• Full-stack Development</li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="text-sm font-medium text-slate-400">{education.period}</p>
          </div>
        </div>
      </article>
    </Section>
  )
}