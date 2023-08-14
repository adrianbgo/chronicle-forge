import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <AboutMe />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  )
}
