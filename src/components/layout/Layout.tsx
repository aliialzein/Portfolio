import type { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}