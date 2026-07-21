import { PRACTICE_AREAS } from '../../data/constants';
import { BookingForm } from '../../types';

interface PracticeAreasProps {
  activeTab: string;
  onSetActiveTab: (id: string) => void;
  onSetBookingForm: (updater: (prev: BookingForm) => BookingForm) => void;
  onTriggerToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export default function PracticeAreas({ activeTab, onSetActiveTab, onSetBookingForm, onTriggerToast }: PracticeAreasProps) {
  const active = PRACTICE_AREAS.find(pa => pa.id === activeTab)!;

  return (
    <section id="practice-areas" className="py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Core Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Practices Anchored in Excellence</h2>
          <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
          <p className="text-sm text-gray-500 dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
            We focus our high-caliber litigation capability and structuring insight across four foundational sectors, ensuring our client mandates receive precision care.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 mb-8 font-sans text-xs tracking-wider uppercase font-bold">
          {PRACTICE_AREAS.map((pa) => (
            <button
              key={pa.id}
              onClick={() => { onSetActiveTab(pa.id); onTriggerToast(`Selected practice division: ${pa.title}`, 'info'); }}
              className={`px-5 py-3 rounded-none transition-all whitespace-nowrap ${activeTab === pa.id ? 'bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white shadow-lg' : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-300 border border-gray-150 dark:border-slate-800'}`}
            >
              <span className="mr-2">{pa.icon}</span>{pa.title}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 text-3xl">
                <span>{active.icon}</span>
                <h3 className="font-serif font-bold text-slate-900 dark:text-slate-100">{active.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-slate-300 font-sans leading-relaxed">{active.description}</p>
              <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                <p className="text-[10px] font-sans font-black uppercase text-gray-400 tracking-wider">Representative Segments Covered:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center space-x-2 text-xs font-sans text-gray-700 dark:text-slate-300">
                      <span className="text-[#C59B27] text-sm">✦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 dark:bg-[#0B0F19] p-6 border-l-4 border-[#C59B27] space-y-4">
              <p className="text-[9px] font-sans font-black text-amber-600 dark:text-[#C59B27] uppercase tracking-widest">DIVISION LEAD ATTENTION</p>
              <p className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100">{active.leadAttorney}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                Personally oversees file routing, strategy optimization, and is responsible for client liaison for this division.
              </p>
              <a
                href="#priority-booking"
                onClick={() => onSetBookingForm(prev => ({ ...prev, practiceArea: active.id }))}
                className="inline-block bg-[#0F141F] dark:bg-slate-900 hover:bg-[#C59B27] hover:text-white text-slate-200 text-[10px] font-sans font-black uppercase tracking-widest py-3 px-5 transition-colors border border-gray-700 dark:border-slate-800"
              >
                Discuss Case with Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
