import Image from "next/image"
import { Music, Users, Mic2, Guitar, Drum } from "lucide-react"

const features = [
  { icon: Drum, text: "Audience percussion Jam-Out participation" },
  { icon: Users, text: "Up to 10 musicians live on stage" },
  { icon: Mic2, text: "Multiple songwriters and vocalists" },
  { icon: Guitar, text: "Reggae, ska-pop, conscious hip-hop, rock fusion" },
  { icon: Music, text: "Communal, tribal dance energy" },
]

export function WhatMakesDifferent() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0137.JPEG-cSztvU6XCH8ZAAk48ZE23NZNkPs5Ib.jpeg"
          alt="Ras Mundi band group photo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#c0392b" }} />
          <h2
            className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: "#FFD700", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            What Makes Ras Mundi Different
          </h2>
        </div>

        {/* Feature bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,215,0,0.3)" }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,215,0,0.15)" }}
              >
                <feature.icon className="w-6 h-6" style={{ color: "#FFD700" }} />
              </div>
              <p className="text-lg leading-relaxed font-sans font-medium" style={{ color: "#FFFFFF" }}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting paragraph */}
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#F5F0E8", textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
          >
            At Ras Mundi shows, the crowd becomes part of the rhythm. Fans bring small percussion instruments and join during live jam-outs, expanding the groove beyond the stage. With rotating vocalists and collaborative songwriting, every performance evolves organically and dynamically.
          </p>
        </div>
      </div>
    </section>
  )
}
