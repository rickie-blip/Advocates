
interface HeaderProps {
  darkTheme: boolean;
  onToggleTheme: () => void;
}

export default function Header({ darkTheme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/95 dark:bg-[#0F141F]/95 border-b border-gray-150 dark:border-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="border-2 border-[#C59B27] p-3 rounded-full flex items-center justify-center transition-all group-hover:bg-[#C59B27]/10">
            <span className="text-2xl font-serif text-[#C59B27] font-semibold tracking-widest">MC</span>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 dark:text-slate-100 block">MERCY & CO</span>
            <span className="text-[9px] tracking-[0.3em] font-sans font-extrabold uppercase text-amber-600 dark:text-[#C59B27] block -mt-1">ADVOCATES</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-sans font-bold uppercase tracking-wider">
          <a href="#about" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Our Ethos</a>
          <a href="#practice-areas" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Specialties</a>
          <a href="#attorneys" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Counsel</a>
          <a href="#insights" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Legal Insights</a>
          {/* <a href="#calculator" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Estimator</a> */}
          {/* <a href="#client-portal" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Secure Portal</a> */}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            title="Toggle system aesthetic"
          >
            {darkTheme ? <span className="text-lg">☀️</span> : <span className="text-lg">🌙</span>}
          </button>
          <a
            href="#priority-booking"
            className="hidden lg:inline-block bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] hover:from-[#735817] hover:to-[#B08920] text-slate-100 py-3 px-6 rounded-none font-sans font-extrabold text-[10px] tracking-widest uppercase border border-amber-400"
          >
            Request Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
}
