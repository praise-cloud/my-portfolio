import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getCalApi } from '@calcom/embed-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'

export default function App() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#b9c7e4' } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary selection:text-primary-container min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
