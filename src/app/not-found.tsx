import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#080808] text-center">
      <span className="text-xs uppercase tracking-widest text-[#e50920] font-mono px-3 py-1 rounded border border-[#e50920]/30 bg-[#e50920]/10 mb-6">
        ERROR 404
      </span>
      <h1 className="font-display text-8xl md:text-9xl tracking-tight text-white mb-2">
        OUT OF BOUNDS
      </h1>
      <p className="text-gray-400 max-w-md mb-8 text-sm md:text-base">
        The requested waypoint does not exist in the navigation map. Return to the main telemetry console.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e50920] hover:bg-[#ff1e35] text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,32,0.4)]"
      >
        <Home className="w-4 h-4" />
        Return to Portfolio
      </Link>
    </div>
  );
}

