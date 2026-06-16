import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionProps = {
  id: string
  eyebrow: string
  title?: string
  children: ReactNode
  className?: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  },
}

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 py-14 sm:py-16 ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/80">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </motion.section>
  )
}