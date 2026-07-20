import React from 'react';
import { ATTORNEYS } from '../../data/constants';
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
          <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Elite Advisors</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Distinguished Legal Minds</h2>
          <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
          <p className="text-sm text-gray-500 dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
            We are defined by the analytical genius of our advocates, fusing rigorous Ivy League academic backgrounds with stellar trial track records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ATTORNEYS.map((attorney) => (
            <div key={attorney.id} className="bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-850 shadow-md group overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-950">
                  <img src={attorney.image} alt={attorney.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F141F] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[9px] font-sans font-black uppercase tracking-widest text-[#C59B27]">{attorney.role}</p>
                    <h4 className="text-base font-serif font-bold text-white mt-1">{attorney.name}</h4>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="space-y-1 text-[11px] font-sans">
                    <p className="text-gray-400"><strong className="text-slate-700 dark:text-slate-300">Edu:</strong> {attorney.education}</p>
                    <p className="text-gray-400"><strong className="text-slate-700 dark:text-slate-300">Exp:</strong> {attorney.experience}</p>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400 font-sans leading-relaxed">{attorney.bio}</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a
                  href="#priority-booking"
                  onClick={() => {
                    onSetBookingForm(prev => ({ ...prev, summaryText: `Preferred counsel: Partner ${attorney.name}. Corporate / Private strategic inquiry.` }));
                    onTriggerToast(`Routing strategy direct to ${attorney.name}'s chamber administrative clerk.`, 'success');
                  }}
                  className="w-full text-center block bg-[#0F141F] dark:bg-slate-900 hover:bg-[#C59B27] hover:text-white text-slate-100 text-[10px] font-sans font-black uppercase tracking-widest py-2.5 transition-colors border border-gray-700 dark:border-slate-800"
                >
                  Direct Inquiry
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
