import React from 'react';
import { BookingForm } from '../../types';

interface BookingProps {
  bookingForm: BookingForm;
  onSetBookingForm: (updater: (prev: BookingForm) => BookingForm) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Booking({ bookingForm, onSetBookingForm, onSubmit }: BookingProps) {
  const update = (field: keyof BookingForm, value: string) =>
    onSetBookingForm(prev => ({ ...prev, [field]: value }));

  return (
    <section id="priority-booking" className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#101625] text-slate-100 rounded-none p-6 sm:p-10 border border-amber-500/30 shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-3xl">🏛️</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#C59B27] font-semibold">Initiate Priority Strategy Call</h2>
            <p className="text-xs text-slate-400 font-sans max-w-md mx-auto">
              File details below to reserve priority legal advisory routing. All details are kept in strict lawyer-client confidence.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6 text-left font-sans text-xs text-slate-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Your Full Name *</label>
                <input type="text" required placeholder="e.g., Andrew Kimani, Managing Director" value={bookingForm.clientName}
                  onChange={(e) => update('clientName', e.target.value)}
                  className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]" />
              </div>
              <div>
                <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Contact Email Address *</label>
                <input type="email" required placeholder="e.g., andrew@ventures.com" value={bookingForm.clientEmail}
                  onChange={(e) => update('clientEmail', e.target.value)}
                  className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Secure WhatsApp / Phone Mobile *</label>
                <input type="tel" required placeholder="e.g., +254 712 345678" value={bookingForm.clientPhone}
                  onChange={(e) => update('clientPhone', e.target.value)}
                  className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]" />
              </div>
              <div>
                <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Division Interest *</label>
                <select value={bookingForm.practiceArea} onChange={(e) => update('practiceArea', e.target.value)}
                  className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]">
                  <option value="corporate">Corporate & Venture restructures</option>
                  <option value="litigation">Antitrust & Courtroom Litigation</option>
                  <option value="estate">Generational Trusts & Wealth Defense</option>
                  <option value="tech">IP Shielding & AI Advisory</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Urgency Matrix</label>
                <select value={bookingForm.priority} onChange={(e) => update('priority', e.target.value)}
                  className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]">
                  <option value="low">Corporate Restructuring Planning (Advisory)</option>
                  <option value="medium">Standard Dispute Resolution Defense</option>
                  <option value="high">Urgent Injunction / Active Cease-and-Desist</option>
                </select>
              </div>
              <div>
                <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Preferred Strategic Date Target</label>
                <input type="date" value={bookingForm.prefDate} onChange={(e) => update('prefDate', e.target.value)}
                  className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]" />
              </div>
            </div>

            <div>
              <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Strategic Case Overview & Facts</label>
              <textarea placeholder="Identify opposing entity or strategic assets, documentation status, and immediate objectives..." value={bookingForm.summaryText}
                onChange={(e) => update('summaryText', e.target.value)}
                className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]" rows={3} />
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] hover:from-[#735817] hover:to-[#B08920] text-slate-100 font-extrabold py-4 px-8 rounded-none transition-all tracking-wider uppercase border border-amber-300">
                🚀 Dispatch Strategy Call Ticket Securely
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-3 leading-relaxed">
                🔒 By submitting, you acknowledge that this initial strategy request does not establish a formal attorney-client relationship until conflict checks are fully resolved.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
