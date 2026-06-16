import { motion } from 'framer-motion'
import { site } from '../../data/site'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-14">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200"
          >
            {site.title}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {site.name}. I build scalable software systems and end-to-end digital experiences.
          </motion.h1>

          <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300" variants={item}>
            Software Engineering student focused on backend systems, full-stack development, and AI-powered applications built with clean architecture and production mindset.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-4" variants={item}>
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-slate-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/40 hover:bg-sky-400/10"
            >
              Contact
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-white"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}