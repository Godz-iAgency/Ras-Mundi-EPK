import Image from "next/image"
import { Guitar, Music, Mic2, Piano } from "lucide-react"

const instruments = [
  { name: "Rhythm Guitar", icon: Guitar },
  { name: "Lead Guitar", icon: Guitar },
  { name: "Bass", icon: Music },
  { name: "Keys", icon: Piano },
  { name: "Vocals (3 Female Harmonies)", icon: Mic2 },
  { name: "Drums", icon: Music },
  { name: "Trumpet", icon: Music },
  { name: "Djembe", icon: Music },
  { name: "Bongos", icon: Music },
]

export function Instrumentation() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2590.JPG-8CqPaaxG8qyX5nV3mlIvrboatME6cu.jpeg"
          alt="SXSW 2026 Nourishing the Soul showcase flyer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#1a7a3a" }} />
          <h2
            className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: "#FFD700", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            Instrumentation
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {instruments.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-3 p-6 rounded-xl backdrop-blur-sm text-center transition-all hover:scale-105"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,215,0,0.25)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,215,0,0.15)" }}
              >
                <item.icon className="w-6 h-6" style={{ color: "#FFD700" }} />
              </div>
              <span
                className="font-serif text-sm font-semibold uppercase tracking-wide"
                style={{ color: "#FFFFFF" }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
