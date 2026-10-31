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
    <div className="rounded-2xl border border-hairline-dark bg-navy-950/80 backdrop-blur-xl p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="font-mono text-xs text-blue-400 uppercase tracking-mono">
              FINANCIAL ENGINEERING // OPEX OPTIMIZER
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl text-white">
            Infrastructure Cost &amp; Waste Elimination Model
          </h3>
          <p className="font-body text-sm text-muted-on-dark max-w-xl mt-1">
            Compute unmonitored egress, over-provisioned idle clusters, and architectural bloat recoverable via automated right-sizing and spot bin-packing.
          </p>
        </div>

        <div className="md:text-right">
          <span className="font-mono text-xs text-muted-on-dark uppercase block">Current Monthly Spend</span>
          <span className="font-display font-extrabold text-2xl md:text-3xl text-white">
            ${monthlySpend.toLocaleString()}{' '}
            <span className="font-mono text-xs font-normal text-muted-on-dark">/mo</span>
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
          className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
          aria-label="Current Monthly Cloud Spend Slider"
        />
        <div className="flex justify-between font-mono text-[10px] text-muted-on-dark uppercase">
          <span>$5k/mo</span>
          <span>$50k/mo</span>
          <span>$100k/mo</span>
          <span>$150k+/mo</span>
        </div>
      </div>

      {/* Results Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-navy-900 border border-blue-500/20 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] text-muted-on-dark uppercase tracking-mono">
              Projected Annual Savings
            </span>
            <div className="font-display font-black text-2xl md:text-3xl text-blue-400 mt-1">
              ${annualSavings.toLocaleString()}
            </div>
          </div>
          <span className="font-mono text-xs text-emerald-400 mt-2 font-medium">
            &darr; ~{estimatedSavingsPercent}% OPEX reduction
          </span>
        </div>

        <div className="p-5 rounded-xl bg-navy-900 border border-hairline-dark flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] text-muted-on-dark uppercase tracking-mono">
              Monthly Waste Recovered
            </span>
            <div className="font-display font-black text-2xl md:text-3xl text-white mt-1">
              ${monthlySavings.toLocaleString()}
            </div>
          </div>
          <span className="font-mono text-xs text-muted-on-dark mt-2">
            Direct EBITDA reinvestment
          </span>
        </div>

        <div className="p-5 rounded-xl bg-navy-900 border border-hairline-dark flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] text-muted-on-dark uppercase tracking-mono">
              Audit Payback Window
            </span>
            <div className="font-display font-black text-2xl md:text-3xl text-white mt-1">
              &lt; 30 Days
            </div>
          </div>
          <span className="font-mono text-xs text-blue-400 mt-2">
            Self-funding optimization
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-hairline-dark flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-on-dark">
        <span>Modelled from verified AWS Compute Optimizer and FinOps foundation principles.</span>
        <a
          href={CAL_AUDIT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playTechClick}
          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-mono font-semibold transition-colors flex items-center gap-2"
        >
          <span>Schedule Infrastructure Audit</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  )
}
