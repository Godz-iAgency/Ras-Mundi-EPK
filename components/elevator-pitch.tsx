import Image from "next/image"

export function ElevatorPitch() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2061%20copy%202-mSmRghhubCtpSbhqYRwCMKmIe7UxD7.jpeg"
          alt="Ras Mundi frontman performing live with guitar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
        <div className="w-20 h-1 rounded-full" style={{ backgroundColor: "#FFD700" }} />
        <h2
          className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-wide text-center"
          style={{
            color: "#FFD700",
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          The Sound
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed text-center max-w-3xl"
          style={{
            color: "#FFFFFF",
            textShadow: "0 1px 4px rgba(0,0,0,0.7)",
          }}
        >
          Ras Mundi is a nine-piece international reggae fusion band out of Austin blending reggae, hip-hop, and funk into a massive, conscious vibe. A tribal percussion pulse drives the heartbeat of the music — raw African-Jamaican rhythms layered with thick basslines, harmonies, keys, and trumpet — while Rasta Rhymes deliver revolutionary messages of legalization and enlightenment.
        </p>
        <p
          className="text-xl md:text-2xl font-serif font-bold italic text-center"
          style={{
            color: "#FFD700",
            textShadow: "0 2px 6px rgba(0,0,0,0.8)",
          }}
        >
          {"It's more than music \u2014 it's a movement. One love."}
        </p>
      </div>
    </section>
  )
}
