import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-2 md:flex md:justify-between items-start py-lg px-margin-mobile md:px-xl max-w-container-max mx-auto">
        <div className="col-span-2 md:col-span-1 mb-lg md:mb-0">
          <div className="font-headline-md text-headline-md text-on-surface mb-sm">PRAISE GEORGEWILL</div>
          <div className="font-technical-sm text-technical-sm text-surface-tint">
            &copy; 2024 PRAISE GEORGEWILL. ARCHITECTURAL INTEGRITY GUARANTEED.
          </div>
        </div>
        <div className="flex flex-col gap-xs">
          <div className="font-code-label text-code-label text-on-surface mb-sm">Protocol</div>
          <Link className="text-on-surface-variant font-technical-sm text-technical-sm hover:text-primary underline decoration-primary/30 transition-all" to="/">Infrastructure</Link>
          <Link className="text-on-surface-variant font-technical-sm text-technical-sm hover:text-primary underline decoration-primary/30 transition-all" to="/services">Security</Link>
          <Link className="text-on-surface-variant font-technical-sm text-technical-sm hover:text-primary underline decoration-primary/30 transition-all" to="/about">Risk Management</Link>
        </div>
        {/* <div className="flex flex-col gap-xs">
          <div className="font-code-label text-code-label text-on-surface mb-sm">Governance</div>
          <span className="text-on-surface-variant font-technical-sm text-technical-sm hover:text-primary underline decoration-primary/30 transition-all cursor-pointer">Privacy</span>
          <span className="text-on-surface-variant font-technical-sm text-technical-sm hover:text-primary underline decoration-primary/30 transition-all cursor-pointer">Terms</span> */}
        {/* </div> */}
      </div>
    </footer>
  )
}
