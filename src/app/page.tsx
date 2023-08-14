import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import LatestPosts from '@/components/LatestPosts'
import BookingInfo from '@/components/BookingInfo'
import NewsletterSignup from '@/components/NewsletterSignup'
import ContactInfo from '@/components/ContactInfo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <AboutMe />
      <Services />
      <Testimonials />
      <CTA />
      <LatestPosts />
      <BookingInfo />
      <NewsletterSignup />
      <ContactInfo />
    </main>
  )
}
