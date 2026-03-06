import Image from "next/image"
import { Award, Target } from "lucide-react"

export function BandCredentials() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender.JPG-Xt9aTADxzGjKhk9avOmOS2Ogg44QQu.jpeg"
          alt="Ras Mundi band group photo backstage"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#c0392b" }} />
          <h2
            className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: "#FFD700", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            Band Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="flex items-start gap-5 p-8 rounded-xl backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,215,0,0.3)" }}
          >
            <div
              className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,215,0,0.15)" }}
            >
              <Award className="w-7 h-7" style={{ color: "#FFD700" }} />
            </div>
            <div>
              <h3
                className="font-serif text-xl font-bold mb-2 uppercase"
                style={{ color: "#FFD700" }}
              >
                Shared the Stage
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                The Wailers featuring Junior Marvin, Third World, and Michael Black
              </p>
            </div>
          </div>

          <div
            className="flex items-start gap-5 p-8 rounded-xl backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,215,0,0.3)" }}
          >
            <div
              className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(26,122,58,0.2)" }}
            >
              <Target className="w-7 h-7" style={{ color: "#2ecc71" }} />
            </div>
            <div>
              <h3
                className="font-serif text-xl font-bold mb-2 uppercase"
                style={{ color: "#FFD700" }}
              >
                Goals for 2026
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                SXSW Music Festival and full-length album release
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
