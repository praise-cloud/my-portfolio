import { useState } from 'react'
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
    <div className="relative space-y-8 select-none">
      {/* Agency Mode Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-navy-900 pb-4">
        <div>
          <span className="font-mono text-xs text-blue-600 font-black uppercase tracking-mono block">
            SELECTED_WORKS // {projects.length} PRODUCTION BLUEPRINTS
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 uppercase tracking-tight mt-1">
            Engineered Deployments
          </h2>
        </div>

        {/* View Mode Switcher with Brutalist Buttons */}
        <div className="flex items-center gap-2 p-1 bg-white border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] self-start sm:self-auto">
          <button
            onClick={() => {
              playTechClick(600)
              setViewMode('reel')
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
              viewMode === 'reel'
                ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#0A192F]'
                : 'text-navy-900 hover:bg-slate-100'
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
            className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
              viewMode === 'matrix'
                ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#0A192F]'
                : 'text-navy-900 hover:bg-slate-100'
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
            className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
              viewMode === 'index'
                ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#0A192F]'
                : 'text-navy-900 hover:bg-slate-100'
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <SpotlightCard className="p-6 md:p-10 shadow-[8px_8px_0px_#0A192F] overflow-hidden relative border-2 border-navy-900 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Project Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white bg-blue-600 uppercase font-black tracking-mono px-2.5 py-1 border border-navy-900 shadow-[2px_2px_0px_#0A192F]">
                        CASE_STUDY {String(activeReelIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-xs text-slate-700 font-bold uppercase tracking-mono">
                        {currentReel.sector}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-navy-900 tracking-[-0.03em] uppercase leading-tight">
                      {currentReel.title}
                    </h3>

                    <p className="font-body text-slate-800 text-sm md:text-base leading-relaxed font-medium">
                      {currentReel.shortDesc}
                    </p>

                    {/* Key Benchmarks Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {currentReel.impact?.slice(0, 3).map((im, i) => (
                        <div key={i} className="p-4 bg-paper border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F]">
                          <span className="font-mono text-[10px] text-slate-600 font-bold uppercase block truncate">
                            {im.label}
                          </span>
                          <div className="font-display font-black text-xl md:text-2xl text-blue-600 mt-1">
                            {im.value}
                            {im.suffix || ''}
                          </div>
                          <span className="font-mono text-[10px] text-slate-600 font-medium block mt-1 truncate">
                            {im.sub}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-2 items-center">
                      <Link
                        to={`/project/${currentReel.slug}`}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-mono text-xs font-black uppercase tracking-mono border-2 border-navy-900 shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2"
                      >
                        <span>INSPECT BLUEPRINT</span>
                        <span className="font-mono text-sm">&rarr;</span>
                      </Link>

                      <button
                        onClick={() => {
                          playTechClick(650)
                          onOpenDrawer(currentReel)
                        }}
                        className="border-2 border-navy-900 text-navy-900 bg-white hover:bg-slate-100 px-6 py-3 font-mono text-xs font-black uppercase tracking-mono shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-sm text-blue-600">visibility</span>
                        <span>QUICK SPEC</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Interactive Graphic / Topology Visualizer Card */}
                  <div className="lg:col-span-5 relative">
                    <div className="w-full aspect-[4/3] bg-paper border-2 border-navy-900 p-6 relative overflow-hidden flex flex-col justify-between shadow-[6px_6px_0px_#0A192F]">
                      {/* Header status */}
                      <div className="relative z-10 flex justify-between items-center text-xs font-mono">
                        <span className="text-navy-900 font-black">{currentReel.id} // ACTIVE</span>
                        <span className="text-emerald-700 font-black flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 border border-emerald-500">
                          <span className="w-2 h-2 bg-emerald-500 animate-pulse border border-navy-900"></span>
                          PROD LIVE
                        </span>
                      </div>

                      {/* Schematic Graphic */}
                      <div className="relative z-10 my-auto text-center py-4 space-y-2">
                        <div className="w-16 h-16 border-2 border-navy-900 bg-white flex items-center justify-center mx-auto shadow-[3px_3px_0px_#0A192F]">
                          <span className="material-symbols-outlined text-3xl text-blue-600">
                            {currentReel.slug.includes('auth')
                              ? 'lock'
                              : currentReel.slug.includes('quantum')
                              ? 'database'
                              : currentReel.slug.includes('edge')
                              ? 'hub'
                              : 'dns'}
                          </span>
                        </div>
                        <div className="font-mono text-sm text-navy-900 font-black uppercase">
                          {currentReel.uptime} Commitment
                        </div>
                        <p className="font-mono text-xs text-slate-600 font-bold">
                          Multi-Region Fault Isolation &bull; Zero Trust
                        </p>
                      </div>

                      {/* Bottom Tech Pills */}
                      <div className="relative z-10 flex flex-wrap gap-1.5">
                        {currentReel.tags?.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-white border border-navy-900 text-navy-900 text-[10px] font-mono font-bold uppercase shadow-[1px_1px_0px_#0A192F]"
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
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Progress Indicators */}
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playTechClick(500)
                    setActiveReelIndex(idx)
                  }}
                  className={`h-2 transition-all duration-200 border border-navy-900 cursor-pointer ${
                    idx === activeReelIndex
                      ? 'w-10 bg-blue-600 shadow-[2px_2px_0px_#0A192F]'
                      : 'w-3 bg-white hover:bg-slate-200'
                  }`}
                  aria-label={`Jump to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevReel}
                onMouseEnter={() => playTechHover()}
                className="w-10 h-10 border-2 border-navy-900 bg-white hover:bg-slate-100 text-navy-900 flex items-center justify-center shadow-[3px_3px_0px_#0A192F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                aria-label="Previous Project"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>
              <button
                onClick={nextReel}
                onMouseEnter={() => playTechHover()}
                className="w-10 h-10 border-2 border-navy-900 bg-white hover:bg-slate-100 text-navy-900 flex items-center justify-center shadow-[3px_3px_0px_#0A192F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] p-6 flex flex-col justify-between group hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[8px_8px_0px_#0A192F] transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-white bg-blue-600 px-2 py-0.5 border border-navy-900 font-black uppercase shadow-[2px_2px_0px_#0A192F]">
                    {p.id}
                  </span>
                  <button
                    onClick={() => {
                      playTechClick(600)
                      onOpenDrawer(p)
                    }}
                    className="w-7 h-7 border border-navy-900 bg-paper flex items-center justify-center text-navy-900 hover:bg-blue-600 hover:text-white transition-colors shadow-[1px_1px_0px_#0A192F] cursor-pointer"
                    title="Quick Spec"
                  >
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </button>
                </div>

                <h3 className="font-display font-black text-xl text-navy-900 mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {p.title}
                </h3>
                <span className="font-mono text-xs text-slate-600 uppercase font-bold block mb-3">
                  {p.sector}
                </span>

                <p className="font-body text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                  {p.shortDesc}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t-2 border-navy-900/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-blue-600 font-black">
                    {p.impact?.[0]?.value ? `${p.impact[0].value}${p.impact[0].suffix || ''} Impact` : p.uptime}
                  </span>
                  <Link
                    to={`/project/${p.slug}`}
                    className="font-mono text-xs font-black uppercase text-navy-900 hover:text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Blueprint</span>
                    <span className="font-mono">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 3: EDITORIAL INDEX (Agency Table with Floating Image)*/}
      {/* ======================================================== */}
      {viewMode === 'index' && (
        <div
          className="relative border-2 border-navy-900 bg-white shadow-[6px_6px_0px_#0A192F] overflow-hidden"
          onMouseMove={handleTableMouseMove}
        >
          {/* Floating Cursor Preview Frame */}
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.12 }}
              className="fixed pointer-events-none z-50 w-80 p-5 bg-white border-2 border-navy-900 shadow-[8px_8px_0px_#0A192F] hidden md:block"
              style={{
                left: mousePos.x + 24,
                top: mousePos.y - 120,
              }}
            >
              <div className="flex justify-between items-center font-mono text-[10px] text-blue-600 font-black uppercase mb-1">
                <span>{hoveredProject.id}</span>
                <span>{hoveredProject.timeline}</span>
              </div>
              <div className="font-display font-black text-sm text-navy-900 uppercase">{hoveredProject.title}</div>
              <div className="font-body text-xs text-slate-700 mt-1 line-clamp-2 font-medium">
                {hoveredProject.shortDesc}
              </div>
              <div className="mt-3 pt-2 border-t border-navy-900/10 flex justify-between items-center text-[10px] font-mono text-emerald-700 font-black">
                <span>SLA: {hoveredProject.uptime}</span>
                <span className="text-blue-600 font-black">CLICK TO INSPECT &rarr;</span>
              </div>
            </motion.div>
          )}

          <div className="divide-y-2 border-navy-900/10">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 font-mono text-xs text-navy-900 uppercase font-black tracking-mono bg-paper border-b-2 border-navy-900">
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
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-blue-50/70 transition-colors group cursor-pointer"
                onClick={() => {
                  playTechClick(650)
                  onOpenDrawer(p)
                }}
              >
                <div className="col-span-2 font-mono text-xs text-blue-600 font-black">{p.id}</div>
                <div className="col-span-4 min-w-0">
                  <div className="font-display font-black text-sm text-navy-900 uppercase truncate group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </div>
                  <div className="font-mono text-[11px] text-slate-600 truncate">{p.tags?.join(' • ')}</div>
                </div>
                <div className="col-span-2 hidden sm:block font-body text-xs text-slate-700 truncate font-medium">
                  {p.sector}
                </div>
                <div className="col-span-2 hidden md:block font-mono text-xs text-emerald-700 font-bold">
                  {p.uptime}
                </div>
                <div className="col-span-2 text-right flex items-center justify-end gap-2">
                  <Link
                    to={`/project/${p.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 border border-navy-900 bg-white hover:bg-blue-600 hover:text-white transition-colors shadow-[1px_1px_0px_#0A192F]"
                    title="Full Blueprint"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      playTechClick(600)
                      onOpenDrawer(p)
                    }}
                    className="px-2.5 py-1 bg-paper border border-navy-900 text-xs font-mono font-bold text-navy-900 hover:bg-blue-600 hover:text-white transition-colors hidden sm:block shadow-[1px_1px_0px_#0A192F]"
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
