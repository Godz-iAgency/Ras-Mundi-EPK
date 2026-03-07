import Image from "next/image"
import { Calendar, Instagram, Music2, Mail } from "lucide-react"

export function BookingSection() {
  return (
    <section id="booking" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1505.JPG-tHVKj3emymS9Lihph0TdXEp9gDTCIN.jpeg"
          alt="Ras Mundi lion artwork"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#FFD700" }} />
        <h2
          className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6"
          style={{ color: "#FFD700", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
        >
          Bring the Movement to Your Stage
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
        >
          Ras Mundi is currently booking venues, festivals, private events, and weddings across Austin, San Antonio, Houston, and Corpus Christi.
        </p>

        {/* Primary CTA */}
        <a
          href="https://calendly.com/rasmundimusic/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 font-serif text-xl font-bold uppercase tracking-wider rounded-lg transition-colors hover:brightness-110 mb-8"
          style={{ backgroundColor: "#FFD700", color: "#1a1a1a" }}
        >
          <Calendar className="w-6 h-6" />
          Book Ras Mundi
        </a>

        {/* Secondary buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/rasmundimusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 font-serif text-lg font-bold uppercase tracking-wider rounded-lg transition-colors hover:brightness-125"
            style={{ borderColor: "#FFD700", color: "#FFD700" }}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
          <a
            href="https://on.soundcloud.com/9XGbQ6xfBTxQtJTOsf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 font-serif text-lg font-bold uppercase tracking-wider rounded-lg transition-colors hover:brightness-125"
            style={{ borderColor: "#FFD700", color: "#FFD700" }}
          >
            <Music2 className="w-5 h-5" />
            Listen on SoundCloud
          </a>
          <a
            href="#mailing-list"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 font-serif text-lg font-bold uppercase tracking-wider rounded-lg transition-colors hover:brightness-125"
            style={{ borderColor: "#FFD700", color: "#FFD700" }}
          >
            <Mail className="w-5 h-5" />
            Join Mailing List
          </a>
        </div>
      </div>
    </section>
  )
}
