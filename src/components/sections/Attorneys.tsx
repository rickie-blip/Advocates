import { BookingForm } from '../../types';

interface AttorneysProps {
  onSetBookingForm: (updater: (prev: BookingForm) => BookingForm) => void;
  onTriggerToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export default function Attorneys({ onSetBookingForm, onTriggerToast }: AttorneysProps) {
  return (
    <section id="attorneys" className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Our Counsel</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Distinguished Legal Minds</h2>
          <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-800 shadow-md w-72 flex flex-col items-center overflow-hidden">
            {/* Avatar with M */}
            <div className="w-full h-72 bg-gradient-to-br from-[#0F141F] to-[#1A2335] flex items-center justify-center relative">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#8C6D1F] to-[#C59B27] flex items-center justify-center shadow-2xl border-4 border-amber-300/30">
                <span className="text-6xl font-serif font-bold text-white">M</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-[9px] font-sans font-black uppercase tracking-widest text-[#C59B27]">Lead Advocate</p>
                <h4 className="text-base font-serif font-bold text-white mt-1">Mercy</h4>
              </div>
            </div>

            {/* Info placeholder */}
            <div className="p-5 w-full space-y-3 text-center">
              <p className="text-[11px] text-gray-400 dark:text-slate-500 font-sans italic">Profile details coming soon.</p>
            </div>

            <div className="p-5 pt-0 w-full">
              <a
                href="#priority-booking"
                onClick={() => {
                  onSetBookingForm(prev => ({ ...prev, summaryText: 'Preferred counsel: Mercy. Direct inquiry.' }));
                  onTriggerToast("Routing your inquiry to Mercy's office.", 'success');
                }}
                className="w-full text-center block bg-[#0F141F] dark:bg-slate-900 hover:bg-[#C59B27] hover:text-white text-slate-100 text-[10px] font-sans font-black uppercase tracking-widest py-2.5 transition-colors border border-gray-700 dark:border-slate-800"
              >
                Direct Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
