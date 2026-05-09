import contactBanner from '../assets/images/hero/contact.png'
import { ContactSection } from '../components/sections/ContactSection'

export function ContactPage() {
  return (
    <div className="space-y-14">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={contactBanner}
          alt="Contact Banner"
          className="h-[320px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <ContactSection />
    </div>
  )
}
