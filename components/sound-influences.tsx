import Image from "next/image"

const influences = [
  "Bob Marley",
  "Steel Pulse",
  "Third World",
  "Digable Planets",
  "A Tribe Called Quest",
  "Beastie Boys",
  "Jimi Hendrix",
  "The Grateful Dead",
  "Red Hot Chili Peppers",
  "Sublime",
]

export function SoundInfluences() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2579.JPG-NZGoCpQfENtqNRbKcKFk1Nescol87r.jpeg"
          alt="Ras Mundi banner with lion art and genre description"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#1a7a3a" }} />
          <h2
            className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: "#FFD700", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            Sound & Influences
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {influences.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center p-5 rounded-xl backdrop-blur-sm transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,215,0,0.25)",
              }}
            >
              <span
                className="font-serif text-lg font-semibold text-center uppercase tracking-wide"
                style={{ color: "#FFFFFF" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <p
          className="mt-12 text-center text-lg italic max-w-2xl mx-auto"
          style={{ color: "#FFD700", textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
        >
          A bridge between golden-age reggae, 90s conscious hip-hop, and psychedelic funk energy.
        </p>
      </div>
    </section>
  )
}
