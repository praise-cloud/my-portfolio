import { useState } from 'react'
import { CAL_AUDIT } from '../data/cal'
import { playTechClick } from '../utils/sound'

export default function RoiCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(25000)

  // Calculations based on 38% typical cloud waste elimination
  const estimatedSavingsPercent = 38
  const monthlySavings = Math.round(monthlySpend * (estimatedSavingsPercent / 100))
  const annualSavings = monthlySavings * 12

  return (
    <div className="bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] p-6 md:p-8 space-y-6 text-navy-900 select-none relative">
      {/* Corner Crosshairs */}
      <span className="absolute top-1 left-2 font-mono text-navy-900 font-black text-xs select-none">+</span>
      <span className="absolute top-1 right-2 font-mono text-navy-900 font-black text-xs select-none">+</span>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-navy-900/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 bg-[#FF4D00] border border-navy-900 animate-pulse"></span>
            <span className="font-mono text-xs text-blue-600 font-black uppercase tracking-mono">
              FINANCIAL ENGINEERING // OPEX OPTIMIZER
            </span>
          </div>
          <h3 className="font-display font-black text-2xl md:text-3xl text-navy-900 uppercase tracking-tight">
            Infrastructure Cost &amp; Waste Elimination Model
          </h3>
          <p className="font-body text-sm text-slate-700 font-medium max-w-xl mt-1">
            Compute unmonitored egress, over-provisioned idle clusters, and architectural bloat recoverable via automated right-sizing and spot bin-packing.
          </p>
        </div>

        <div className="md:text-right">
          <span className="font-mono text-xs text-slate-600 font-bold uppercase block">Current Monthly Spend</span>
          <span className="font-display font-black text-2xl md:text-3xl text-navy-900">
            ${monthlySpend.toLocaleString()}{' '}
            <span className="font-mono text-xs font-normal text-slate-600">/mo</span>
          </span>
        </div>
      </div>

      {/* Slider Input */}
      <div className="space-y-2">
        <input
          type="range"
          min="5000"
          max="150000"
          step="5000"
          value={monthlySpend}
          onChange={(e) => setMonthlySpend(+e.target.value)}
          className="w-full h-3 bg-slate-200 border-2 border-navy-900 appearance-none cursor-pointer accent-[#FF4D00]"
          aria-label="Current Monthly Cloud Spend Slider"
        />
        <div className="flex justify-between font-mono text-[10px] text-slate-700 font-bold uppercase">
          <span>$5k/mo</span>
          <span>$50k/mo</span>
          <span>$100k/mo</span>
          <span>$150k+/mo</span>
        </div>
      </div>

      {/* Results Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-blue-50 border-2 border-navy-900 shadow-[3px_3px_0px_#2563EB] flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] text-blue-900 font-black uppercase tracking-mono">
              Projected Annual Savings
            </span>
            <div className="font-display font-black text-2xl md:text-3xl text-blue-600 mt-1">
              ${annualSavings.toLocaleString()}
            </div>
          </div>
          <span className="font-mono text-xs text-emerald-700 mt-2 font-bold">
            &darr; ~{estimatedSavingsPercent}% OPEX reduction
          </span>
        </div>

        <div className="p-5 bg-paper border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] text-slate-700 font-black uppercase tracking-mono">
              Monthly Waste Recovered
            </span>
            <div className="font-display font-black text-2xl md:text-3xl text-navy-900 mt-1">
              ${monthlySavings.toLocaleString()}
            </div>
          </div>
          <span className="font-mono text-xs text-slate-600 mt-2 font-bold">
            Direct EBITDA reinvestment
          </span>
        </div>

        <div className="p-5 bg-emerald-50 border-2 border-navy-900 shadow-[3px_3px_0px_#10B981] flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] text-emerald-900 font-black uppercase tracking-mono">
              Audit Payback Window
            </span>
            <div className="font-display font-black text-2xl md:text-3xl text-emerald-700 mt-1">
              &lt; 30 Days
            </div>
          </div>
          <span className="font-mono text-xs text-emerald-800 mt-2 font-bold">
            Self-funding optimization
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t-2 border-navy-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-700 font-bold">
        <span>Modelled from verified AWS Compute Optimizer and FinOps foundation principles.</span>
        <a
          href={CAL_AUDIT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playTechClick}
          className="px-6 py-2.5 bg-[#FF4D00] hover:bg-[#E04400] text-white font-mono text-xs uppercase tracking-mono font-black border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-2"
        >
          <span>Schedule Infrastructure Audit</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  )
}
