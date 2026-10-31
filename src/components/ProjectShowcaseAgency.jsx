import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'
import { getAllProjects } from '../data/projects'
import { playTechClick, playTechHover } from '../utils/sound'

export default function ProjectShowcaseAgency({ onOpenDrawer }) {
  const projects = getAllProjects()
  const [viewMode, setViewMode] = useState('reel') // 'reel' | 'matrix' | 'index'
  const [activeReelIndex, setActiveReelIndex] = useState(0)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const currentReel = projects[activeReelIndex]

  const nextReel = () => {
    playTechClick(700)
    setActiveReelIndex((prev) => (prev + 1) % projects.length)
  }

  const prevReel = () => {
    playTechClick(550)
    setActiveReelIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleTableMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="relative space-y-xl">
      {/* Agency Mode Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md border-b border-outline-variant/15 pb-md">
        <div>
          <span className="font-code-label text-xs text-primary uppercase tracking-[0.25em] block">
            SELECTED_WORKS // {projects.length} CASE_STUDIES
          </span>
          <h2 className="font-headline-lg text-2xl md:text-4xl text-on-surface mt-1">
            Engineered Deployments
          </h2>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-xs p-1 rounded-xl bg-surface-container border border-outline-variant/30 self-start sm:self-auto">
          <button
            onClick={() => {
              playTechClick(600)
              setViewMode('reel')
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-code-label text-xs transition-all cursor-pointer ${
              viewMode === 'reel'
                ? 'bg-primary text-on-primary font-bold shadow'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">view_carousel</span>
            <span className="hidden md:inline">Cinematic Reel</span>
          </button>

          <button
            onClick={() => {
              playTechClick(600)
              setViewMode('matrix')
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-code-label text-xs transition-all cursor-pointer ${
              viewMode === 'matrix'
                ? 'bg-primary text-on-primary font-bold shadow'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">grid_view</span>
            <span className="hidden md:inline">Matrix</span>
          </button>

          <button
            onClick={() => {
              playTechClick(600)
              setViewMode('index')
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-code-label text-xs transition-all cursor-pointer ${
              viewMode === 'index'
                ? 'bg-primary text-on-primary font-bold shadow'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
            <span className="hidden md:inline">Editorial Index</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: CINEMATIC REEL (Interactive 3D Agency Showcase) */}
      {/* ======================================================== */}
      {viewMode === 'reel' && (
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReel.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <SpotlightCard className="p-lg md:p-2xl shadow-2xl overflow-hidden relative border-primary/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
                  {/* Left: Project Narrative */}
                  <div className="lg:col-span-7 space-y-lg">
                    <div className="flex items-center gap-sm">
                      <span className="font-technical-sm text-xs text-primary uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                        CASE_STUDY {String(activeReelIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                      </span>
                      <span className="font-technical-sm text-xs text-outline uppercase">{currentReel.sector}</span>
                    </div>

                    <h3 className="font-display-xl text-3xl md:text-5xl text-on-surface tracking-tight font-extrabold leading-tight">
                      {currentReel.title}
                    </h3>

                    <p className="font-body-lg text-on-surface-variant text-base md:text-lg leading-relaxed opacity-85">
                      {currentReel.shortDesc}
                    </p>

                    {/* Key Benchmarks Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-md pt-sm">
                      {currentReel.impact?.slice(0, 3).map((im, i) => (
                        <div key={i} className="p-md rounded-xl bg-surface-container border border-outline-variant/20">
                          <span className="font-technical-sm text-[10px] text-outline uppercase block truncate">
                            {im.label}
                          </span>
                          <div className="font-display-xl text-2xl md:text-3xl font-extrabold text-primary mt-1">
                            {im.value}
                            {im.suffix || ''}
                          </div>
                          <span className="font-technical-sm text-[10px] text-on-surface-variant/80 block mt-1 truncate">
                            {im.sub}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-md pt-md items-center">
                      <Link
                        to={`/project/${currentReel.slug}`}
                        className="bg-primary text-on-primary px-xl py-md rounded-xl font-headline-md text-sm font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                      >
                        <span>Inspect Full Blueprint</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>

                      <button
                        onClick={() => {
                          playTechClick(650)
                          onOpenDrawer(currentReel)
                        }}
                        className="border border-outline-variant/30 text-on-surface px-lg py-md rounded-xl font-code-label text-sm hover:border-primary/50 hover:bg-surface-variant transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-sm text-primary">visibility</span>
                        <span>Quick Spec Drawer</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Interactive Graphic / Topology Visualizer Card */}
                  <div className="lg:col-span-5 relative">
                    <div className="w-full aspect-[4/3] rounded-2xl bg-surface-container-highest/80 border border-primary/20 p-lg relative overflow-hidden flex flex-col justify-between shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-surface-container-highest/90"></div>
                      <span className="material-symbols-outlined text-primary/10 text-9xl absolute right-4 bottom-4 pointer-events-none">
                        deployed_code
                      </span>

                      {/* Header status */}
                      <div className="relative z-10 flex justify-between items-center text-xs font-technical-sm">
                        <span className="text-primary font-bold">{currentReel.id} // ACTIVE</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          PROD LIVE
                        </span>
                      </div>

                      {/* Schematic Graphic */}
                      <div className="relative z-10 my-auto text-center py-md space-y-sm">
                        <div className="w-16 h-16 rounded-2xl border border-primary/40 bg-primary/10 flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                          <span className="material-symbols-outlined text-3xl text-primary">
                            {currentReel.slug.includes('auth')
                              ? 'lock'
                              : currentReel.slug.includes('quantum')
                              ? 'database'
                              : currentReel.slug.includes('edge')
                              ? 'hub'
                              : 'dns'}
                          </span>
                        </div>
                        <div className="font-code-label text-sm text-on-surface font-semibold">
                          {currentReel.uptime} Commitment
                        </div>
                        <p className="font-technical-sm text-xs text-outline">
                          Multi-Region Fault Isolation &bull; Zero Trust
                        </p>
                      </div>

                      {/* Bottom Tech Pills */}
                      <div className="relative z-10 flex flex-wrap gap-xs">
                        {currentReel.tags?.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-surface/80 border border-outline-variant/30 text-on-surface text-[10px] font-technical-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-md px-xs">
            {/* Progress Indicators */}
            <div className="flex items-center gap-xs">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playTechClick(500)
                    setActiveReelIndex(idx)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeReelIndex ? 'w-10 bg-primary' : 'w-2 bg-outline-variant/30 hover:bg-outline-variant'
                  }`}
                  aria-label={`Jump to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-sm">
              <button
                onClick={prevReel}
                onMouseEnter={() => playTechHover()}
                className="w-11 h-11 rounded-xl border border-outline-variant/30 hover:border-primary/50 text-on-surface flex items-center justify-center hover:bg-surface-variant transition-all cursor-pointer"
                aria-label="Previous Project"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>
              <button
                onClick={nextReel}
                onMouseEnter={() => playTechHover()}
                className="w-11 h-11 rounded-xl border border-outline-variant/30 hover:border-primary/50 text-on-surface flex items-center justify-center hover:bg-surface-variant transition-all cursor-pointer"
                aria-label="Next Project"
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: BLUEPRINT MATRIX (Interactive Bento Grid)       */}
      {/* ======================================================== */}
      {viewMode === 'matrix' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {projects.map((p) => (
            <SpotlightCard key={p.id} className="p-lg flex flex-col justify-between group h-full">
              <div>
                <div className="flex justify-between items-start mb-md">
                  <span className="font-technical-sm text-xs text-primary font-bold uppercase tracking-wider">
                    {p.id}
                  </span>
                  <button
                    onClick={() => {
                      playTechClick(600)
                      onOpenDrawer(p)
                    }}
                    className="w-7 h-7 rounded-lg border border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary hover:border-primary/50 transition-colors"
                    title="Quick Spec"
                  >
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </button>
                </div>

                <h3 className="font-headline-md text-xl text-on-surface mb-xs group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <span className="font-technical-sm text-xs text-outline uppercase block mb-md">{p.sector}</span>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-lg opacity-80">
                  {p.shortDesc}
                </p>
              </div>

              <div>
                <div className="pt-md border-t border-outline-variant/15 flex items-center justify-between">
                  <span className="font-code-label text-xs text-primary font-bold">
                    {p.impact?.[0]?.value ? `${p.impact[0].value}${p.impact[0].suffix || ''} Impact` : p.uptime}
                  </span>
                  <Link
                    to={`/project/${p.slug}`}
                    className="font-code-label text-xs text-on-surface hover:text-primary flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Blueprint</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 3: EDITORIAL INDEX (Agency Table with Floating Image)*/}
      {/* ======================================================== */}
      {viewMode === 'index' && (
        <div
          className="relative rounded-2xl border border-outline-variant/20 bg-surface-container-low overflow-hidden shadow-2xl"
          onMouseMove={handleTableMouseMove}
        >
          {/* Floating Cursor Preview Frame */}
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="fixed pointer-events-none z-50 w-72 p-md rounded-2xl bg-surface-container-high/95 border border-primary/40 backdrop-blur-xl shadow-2xl hidden md:block"
              style={{
                left: mousePos.x + 24,
                top: mousePos.y - 120,
              }}
            >
              <div className="flex justify-between items-center font-technical-sm text-[10px] text-primary uppercase mb-xs">
                <span>{hoveredProject.id}</span>
                <span>{hoveredProject.timeline}</span>
              </div>
              <div className="font-headline-md text-sm text-on-surface font-bold">{hoveredProject.title}</div>
              <div className="font-body-md text-xs text-on-surface-variant mt-1 line-clamp-2">
                {hoveredProject.shortDesc}
              </div>
              <div className="mt-sm pt-xs border-t border-outline-variant/20 flex justify-between items-center text-[11px] font-technical-sm text-emerald-400">
                <span>SLA: {hoveredProject.uptime}</span>
                <span className="text-primary font-bold">CLICK TO INSPECT &rarr;</span>
              </div>
            </motion.div>
          )}

          <div className="divide-y divide-outline-variant/15">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-md p-md font-technical-sm text-[11px] text-outline uppercase tracking-wider bg-surface-container">
              <div className="col-span-2">ID</div>
              <div className="col-span-4">System / Project</div>
              <div className="col-span-2 hidden sm:block">Sector</div>
              <div className="col-span-2 hidden md:block">SLA</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {/* Table Rows */}
            {projects.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => {
                  playTechHover()
                  setHoveredProject(p)
                }}
                onMouseLeave={() => setHoveredProject(null)}
                className="grid grid-cols-12 gap-md p-md items-center hover:bg-primary/5 transition-colors group cursor-pointer"
                onClick={() => {
                  playTechClick(650)
                  onOpenDrawer(p)
                }}
              >
                <div className="col-span-2 font-technical-sm text-xs text-primary font-bold">{p.id}</div>
                <div className="col-span-4 min-w-0">
                  <div className="font-headline-md text-sm text-on-surface font-semibold truncate group-hover:text-primary transition-colors">
                    {p.title}
                  </div>
                  <div className="font-technical-sm text-[11px] text-outline truncate">{p.tags?.join(' &bull; ')}</div>
                </div>
                <div className="col-span-2 hidden sm:block font-body-md text-xs text-on-surface-variant truncate">
                  {p.sector}
                </div>
                <div className="col-span-2 hidden md:block font-technical-sm text-xs text-emerald-400 font-mono">
                  {p.uptime}
                </div>
                <div className="col-span-2 text-right flex items-center justify-end gap-sm">
                  <Link
                    to={`/project/${p.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary/50 transition-colors"
                    title="Full Page"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      playTechClick(600)
                      onOpenDrawer(p)
                    }}
                    className="px-2.5 py-1 rounded-lg bg-surface border border-outline-variant/30 text-xs font-code-label text-outline group-hover:text-primary group-hover:border-primary/50 transition-colors hidden sm:block"
                  >
                    Spec
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
