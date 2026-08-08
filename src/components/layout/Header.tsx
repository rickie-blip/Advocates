
import { useState } from 'react';

interface HeaderProps {
  darkTheme: boolean;
  onToggleTheme: () => void;
}

export default function Header({ darkTheme, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { href: '#about', label: 'Our Ethos' },
    { href: '#practice-areas', label: 'Specialties' },
    { href: '#attorneys', label: 'Counsel' },
    { href: '#insights', label: 'Legal Insights' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-[#0F141F]/95 border-b border-gray-150 dark:border-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="border-2 border-[#C59B27] p-2 sm:p-3 rounded-full flex items-center justify-center transition-all group-hover:bg-[#C59B27]/10">
            <span className="text-xl sm:text-2xl font-serif text-[#C59B27] font-semibold tracking-widest">MC</span>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 dark:text-slate-100 block">MERCY & CO</span>
            <span className="text-[9px] tracking-[0.3em] font-sans font-extrabold uppercase text-amber-600 dark:text-[#C59B27] block -mt-1">ADVOCATES</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center space-x-6 text-[10px] font-sans font-bold uppercase tracking-wider">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">{item.label}</a>)}
          {/* <a href="#calculator" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Estimator</a> */}
          {/* <a href="#client-portal" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Secure Portal</a> */}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
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
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="xl:hidden min-h-[44px] min-w-[44px] p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <span className="text-xl leading-none" aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="xl:hidden border-t border-gray-150 dark:border-slate-800 bg-white dark:bg-[#0F141F] px-4 py-3 font-sans" aria-label="Mobile navigation">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-2">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="min-h-[44px] flex items-center px-3 text-[10px] font-bold uppercase tracking-wider text-gray-700 dark:text-slate-200 hover:bg-amber-500/10 hover:text-[#C59B27]">
                {item.label}
              </a>
            ))}
            <a href="#priority-booking" onClick={() => setIsMenuOpen(false)} className="col-span-2 min-h-[44px] flex items-center justify-center bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white text-[10px] font-extrabold uppercase tracking-widest">
              Request Strategy Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
