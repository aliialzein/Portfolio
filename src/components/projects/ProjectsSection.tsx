import { motion } from 'framer-motion'
import { projects } from '../../data/site'
import Section from '../layout/Section'

export default function ProjectsSection() {
  const featuredProjects = [...projects].sort((left, right) => Number(right.featured) - Number(left.featured))

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected Projects"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <motion.article
            key={project.title}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-3xl sm:p-6 shadow-soft backdrop-blur-xl transition duration-300 min-h-[320px] sm:min-h-0"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-sky-300/80">
                {project.featured ? 'Featured' : 'Project'}
              </span>
            </div>

            <h3 className="mt-3 sm:mt-4 text-xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300 line-clamp-3">{project.description}</p>

            <div className="mt-4 sm:mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-3 sm:p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Impact</p>
              <p className="mt-2 text-sm leading-6 text-slate-200 line-clamp-2">{project.impact}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.github || project.live) && (
              <div className="mt-4 sm:mt-6 flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-full border border-white/10 px-4 py-2 text-center text-slate-200 transition hover:border-sky-400/40 hover:text-white sm:w-auto"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-full bg-white px-4 py-2 text-center text-slate-950 transition hover:bg-slate-200 sm:w-auto"
                  >
                    Live
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  )
}