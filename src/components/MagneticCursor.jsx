import { useEffect, useState } from 'react'

export default function MagneticCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [cursorState, setCursorState] = useState({
    active: false,
    text: '',
    variant: 'default', // 'default' | 'hover' | 'project'
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = -100
    let mouseY = -100
    let trailX = -100
    let trailY = -100
    let animId

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setPosition({ x: mouseX, y: mouseY })
      if (!isVisible) setIsVisible(true)

      // Detect interactive targets
      const target = e.target.closest('[data-cursor]') || e.target.closest('a, button, [role="button"]')
      if (target) {
        const customText = target.getAttribute('data-cursor') || ''
        const customVariant = target.getAttribute('data-cursor-variant') || 'hover'
        setCursorState({ active: true, text: customText, variant: customVariant })
      } else {
        setCursorState({ active: false, text: '', variant: 'default' })
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const animateTrail = () => {
      // Smooth lerp trailing position
      trailX += (mouseX - trailX) * 0.18
      trailY += (mouseY - trailY) * 0.18
      setTrailingPos({ x: trailX, y: trailY })
      animId = requestAnimationFrame(animateTrail)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    animId = requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [isVisible])

  if (!isVisible) return null

  const isHovered = cursorState.active
  const hasText = Boolean(cursorState.text)

  return (
    <>
      {/* Center Precise Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[150] transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          opacity: isHovered && hasText ? 0 : 0.9,
        }}
      />

      {/* Trailing Fluid Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[149] transition-all duration-200 flex items-center justify-center ${
          hasText
            ? 'bg-primary text-on-primary font-code-label text-[10px] tracking-widest uppercase font-bold shadow-2xl px-3 py-1.5'
            : isHovered
            ? 'w-12 h-12 border-2 border-primary bg-primary/10 backdrop-blur-[2px]'
            : 'w-8 h-8 border border-primary/40 bg-transparent'
        }`}
        style={{
          transform: hasText
            ? `translate3d(${trailingPos.x - 40}px, ${trailingPos.y - 18}px, 0)`
            : isHovered
            ? `translate3d(${trailingPos.x - 24}px, ${trailingPos.y - 24}px, 0)`
            : `translate3d(${trailingPos.x - 16}px, ${trailingPos.y - 16}px, 0)`,
        }}
      >
        {hasText && <span>{cursorState.text}</span>}
      </div>
    </>
  )
}
