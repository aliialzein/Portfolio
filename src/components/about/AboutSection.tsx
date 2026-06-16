import Section from '../layout/Section'
import { site } from '../../data/site'

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building Systems with Purpose"
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-base leading-8 text-slate-300 sm:p-8 sm:text-lg">
          <p className="whitespace-pre-line">{site.about}</p>
        </div>

        <div className="space-y-4 text-sm text-slate-200">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Education</p>
            <p className="mt-3 font-semibold text-white">Final Year (starting)</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Focus</p>
            <p className="mt-3 font-semibold text-white">Backend · Full-stack · AI</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Primary Stack</p>
            <p className="mt-3 font-semibold text-white">ASP.NET · React · FastAPI</p>
          </div>
        </div>
      </div>
    </Section>
  )
}