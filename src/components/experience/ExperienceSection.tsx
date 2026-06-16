import { motion } from 'framer-motion'
import { experiences } from '../../data/site'
import Section from '../layout/Section'

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional Experience"
    >
      <div className="space-y-5">
        {experiences.map((experience) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{experience.role}</p>
                <p className="mt-1 text-sm text-sky-300/90">
                  {experience.company} · {experience.location}
                </p>
              </div>
              <p className="text-sm font-medium text-slate-400">{experience.period}</p>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{experience.summary}</p>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
              {experience.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}