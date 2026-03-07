import Image from "next/image"
import { Play, ExternalLink, Globe } from "lucide-react"

const links = [
  {
    label: "YouTube",
    description: "Watch Live Videos",
    href: "https://www.youtube.com/playlist?list=PLf2ubYUKiqntZOYjM-wOAYsPOAURVt3VT",
    icon: Play,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2579.JPG-NZGoCpQfENtqNRbKcKFk1Nescol87r.jpeg",
    imageAlt: "Ras Mundi banner with lion art and genre description",
  },
  {
    label: "SXSW 2026",
    description: "Official Booking Profile",
    href: "https://schedule.sxsw.com/2026/artists/2242989",
    icon: ExternalLink,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2590.JPG-8CqPaaxG8qyX5nV3mlIvrboatME6cu.jpeg",
    imageAlt: "SXSW 2026 Nourishing the Soul showcase flyer",
  },
  {
    label: "Website",
    description: "Booking Inquiries",
    href: "#booking",
    icon: Globe,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1505.JPG-tHVKj3emymS9Lihph0TdXEp9gDTCIN.jpeg",
    imageAlt: "Ras Mundi lion artwork close-up",
  },
]

export function MediaSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#FFD700" }} />
          <h2
            className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide"
            style={{ color: "#FFD700" }}
          >
            Media & Links
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
              style={{ border: "2px solid rgba(255,215,0,0.3)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={link.image}
                  alt={link.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(255,215,0,0.9)" }}
                  >
                    <link.icon className="w-7 h-7" style={{ color: "#1a1a1a" }} />
                  </div>
                </div>
              </div>
              <div className="p-5" style={{ backgroundColor: "#1a1a1a" }}>
                <span
                  className="font-serif text-xl font-bold uppercase tracking-wide block"
                  style={{ color: "#FFD700" }}
                >
                  {link.label}
                </span>
                <span className="text-sm mt-1 block" style={{ color: "#F5F0E8" }}>
                  {link.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
