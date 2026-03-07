import Image from "next/image"
import { Play, Calendar, ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260224-WA0200%20%281%29-krAfemDg0OeInCCrMuj8T4AyJOu7gc.jpg"
          alt="Ras Mundi mystical moon with glowing energy and tree roots"
          fill
          className="object-cover"
          priority
        />
        {/* Darker overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-32 text-center max-w-5xl mx-auto">
        <h1
          className="font-serif text-7xl md:text-9xl font-bold tracking-tight text-balance"
          style={{
            color: "#FFD700",
            textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)",
          }}
        >
          RAS MUNDI
        </h1>
        <p
          className="text-xl md:text-2xl font-sans font-semibold tracking-wide"
          style={{
            color: "#FFFFFF",
            textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          International Reggae Fusion Band | Austin, TX
        </p>
        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed"
          style={{
            color: "#F5F0E8",
            textShadow: "0 1px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.5)",
          }}
        >
          A nine-piece international reggae fusion collective blending reggae, hip-hop, and funk into a massive, conscious sound rooted in culture and unity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 font-serif text-lg font-bold uppercase tracking-wider rounded-lg transition-colors"
            style={{ backgroundColor: "#FFD700", color: "#1a1a1a" }}
          >
            <Calendar className="w-5 h-5" />
            Book Ras Mundi
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLf2ubYUKiqntZOYjM-wOAYsPOAURVt3VT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-serif text-lg font-bold uppercase tracking-wider rounded-lg transition-colors"
            style={{ backgroundColor: "#c0392b", color: "#FFFFFF" }}
          >
            <Play className="w-5 h-5" />
            Watch Live Videos
          </a>
          <a
            href="https://schedule.sxsw.com/2026/artists/2242989"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 font-serif text-lg font-bold uppercase tracking-wider rounded-lg transition-colors"
            style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
          >
            <ExternalLink className="w-5 h-5" />
            View SXSW Profile
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: "rgba(255,255,255,0.5)" }}>
          <div className="w-1.5 h-3 rounded-full" style={{ backgroundColor: "#FFD700" }} />
        </div>
      </div>
    </section>
  )
}
