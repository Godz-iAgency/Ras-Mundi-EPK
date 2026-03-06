export function SiteFooter() {
  return (
    <footer className="py-10 px-6" style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid rgba(255,215,0,0.2)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-2xl font-bold uppercase tracking-wider" style={{ color: "#FFD700" }}>
          Ras Mundi
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
          {'International Reggae Fusion Band | Austin, TX | \u00A9 2026 Ras Mundi. All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}
