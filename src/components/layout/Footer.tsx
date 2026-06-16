import { socialLinks, site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-white">{site.name}</p>
          <p className="mt-2 text-sm text-slate-400">{site.title}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}