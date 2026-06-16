import AboutSection from '../components/about/AboutSection'
import CertificationsSection from '../components/certifications/CertificationsSection'
import ContactSection from '../components/contact/ContactSection'
import EducationSection from '../components/education/EducationSection'
import ExperienceSection from '../components/experience/ExperienceSection'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'
import ProjectsSection from '../components/projects/ProjectsSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </Layout>
  )
}