import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { getCalApi } from '@calcom/embed-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import ScrollProgressHUD from './components/ScrollProgressHUD'
import ParticleBackground from './components/ParticleBackground'
import MagneticCursor from './components/MagneticCursor'
import ProjectDrawer from './components/ProjectDrawer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import OperationalNotes from './pages/OperationalNotes'

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [activeDrawerProject, setActiveDrawerProject] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const el = document.getElementById(targetId)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    (async () => {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#b9c7e4' } },
        hideEventTypeDetails: false,
      })
    })()

    // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandPaletteOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleOpenDrawer = (project) => {
    setActiveDrawerProject(project)
  }

  const handleCloseDrawer = () => {
    setActiveDrawerProject(null)
  }

  return (
    <div className="bg-paper text-navy-900 font-body-md selection:bg-blue-600 selection:text-white min-h-screen relative overflow-x-hidden">
      {/* Interactive Agency Visual Canvas */}
      <ParticleBackground />

      {/* Fluid Trailing Magnetic Agency Cursor */}
      <MagneticCursor />

      {/* Tactical HUD & Navbar */}
      <ScrollProgressHUD onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      <main className="pt-20 relative z-10">
        <Routes>
          <Route path="/" element={<Home onOpenDrawer={handleOpenDrawer} />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<OperationalNotes />} />
          <Route path="/build-log" element={<OperationalNotes />} />
          <Route path="/projects" element={<Projects onOpenDrawer={handleOpenDrawer} />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Interactive Overlays */}
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
      <ProjectDrawer
        project={activeDrawerProject}
        isOpen={Boolean(activeDrawerProject)}
        onClose={handleCloseDrawer}
      />
    </div>
  )
}
