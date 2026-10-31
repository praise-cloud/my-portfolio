import HeroSection from '../components/HeroSection'
import MarqueeBand from '../components/MarqueeBand'
import PositioningSection from '../components/PositioningSection'
import CurrentFocusSection from '../components/CurrentFocusSection'
import ProofOfWorkSection from '../components/ProofOfWorkSection'
import BuildLogSection from '../components/BuildLogSection'
import DirectionSection from '../components/DirectionSection'
import ContactSection from '../components/ContactSection'

export default function Home({ onOpenDrawer }) {
  const marqueeInterlude = [
    'INFRASTRUCTURE DETERMINES OUTCOMES',
    'DETERMINISTIC IAC',
    'CONTINUOUS FEEDBACK',
    'REPRODUCIBLE BUILDS',
    'ZERO-TRUST SECURITY',
    'SYSTEMS THINKING',
    'FAULT ISOLATION',
    'ELEGANT RESILIENCE',
  ]

  return (
    <div className="w-full flex flex-col">
      {/* 001 // HERO (Navy-900 with oversized cropped wordmark) */}
      <HeroSection />

      {/* Marquee Band (Vibrant International Orange Ribbon) */}
      <MarqueeBand variant="orange" />

      {/* 002 // POSITIONING (Paper background) */}
      <PositioningSection />

      {/* 003 // CURRENT FOCUS (Paper background, 4 staggered bento cards) */}
      <CurrentFocusSection />

      {/* Editorial Marquee Interlude (Radiant Acid Yellow Ribbon) */}
      <MarqueeBand items={marqueeInterlude} variant="yellow" />

      {/* 004 // PROOF OF WORK (Navy-900, 3-mode showcase, cluster simulator, interactive diff, ROI model) */}
      <ProofOfWorkSection onOpenDrawer={onOpenDrawer} />

      {/* 005 // BUILD LOG (Paper background, 4-block editorial notes) */}
      <BuildLogSection />

      {/* 006 // DIRECTION (Paper background, systems trajectory) */}
      <DirectionSection />

      {/* 007 // CONTACT (Navy-950, technical intake & direct booking) */}
      <ContactSection />
    </div>
  )
}
