import React, { useState, useMemo } from 'react';
import { BookingForm } from '../../types';

interface CalculatorProps {
  onSetBookingForm: (updater: (prev: BookingForm) => BookingForm) => void;
  onTriggerToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export default function Calculator({ onSetBookingForm, onTriggerToast }: CalculatorProps) {
  const [calcType, setCalcType] = useState('contract');
  const [directDamages, setDirectDamages] = useState(150000);
  const [multiplier, setMultiplier] = useState(2);
  const [feePercentage, setFeePercentage] = useState(33);

  const calculatedSettlement = useMemo(() => {
    const directNum = Number(directDamages) || 0;
    const multNum = Number(multiplier) || 1;
    const feePct = Number(feePercentage) || 33;
    let gross = 0;
    if (calcType === 'contract') gross = directNum * (1 + (multNum - 1) * 0.4);
    else if (calcType === 'ip') gross = directNum * (1.5 * multNum);
    else gross = directNum * multNum;
    const attorneyFees = gross * (feePct / 100);
    return { gross: Math.round(gross), fees: Math.round(attorneyFees), net: Math.round(gross - attorneyFees) };
  }, [calcType, directDamages, multiplier, feePercentage]);

  const typeButtons = [
    { id: 'contract', label: 'Contract Breach' },
    { id: 'ip', label: 'IP Infringement' },
    { id: 'civil', label: 'Civil Damages' },
  ];

  return (
    <section id="calculator" className="py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Interactive Planning Tool</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Dispute Recoveries Estimator</h2>
          <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
          <p className="text-sm text-gray-500 dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
            Calculate structured gross recovery estimates and net client outcomes based on financial contract damage thresholds or intellectual property infringements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-2">
              <label className="block text-[11px] font-sans font-black text-gray-400 uppercase tracking-wider">Select Litigation Type</label>
              <div className="grid grid-cols-3 gap-3 font-sans text-xs">
                {typeButtons.map(btn => (
                  <button key={btn.id} onClick={() => setCalcType(btn.id)}
                    className={`py-3 text-center rounded-none font-bold uppercase transition-all ${calcType === btn.id ? 'bg-[#C59B27] text-white' : 'bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-300'}`}>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {[
              { label: 'Direct Financial Damages', value: directDamages, setter: setDirectDamages, min: 50000, max: 1000000, step: 25000, display: `$${Number(directDamages).toLocaleString()}`, marks: ['$50k', '$500k', '$1M+'] },
              { label: 'Harm Multiplier', value: multiplier, setter: setMultiplier, min: 1, max: 5, step: 1, display: `${multiplier}x`, marks: ['1x (Base)', '3x (Standard)', '5x (Aggravated)'] },
              { label: 'Contingency Arrangement Fee', value: feePercentage, setter: setFeePercentage, min: 20, max: 40, step: 1, display: `${feePercentage}%`, marks: ['20% (Low risk)', '33% (Standard)', '40% (High risk)'] },
            ].map(slider => (
              <div key={slider.label} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="font-bold text-gray-400 uppercase tracking-wider">{slider.label}</span>
                  <span className="text-base font-serif font-black text-[#C59B27]">{slider.display}</span>
                </div>
                <input type="range" min={slider.min} max={slider.max} step={slider.step} value={slider.value}
                  onChange={(e) => slider.setter(Number(e.target.value))}
                  className="w-full accent-[#C59B27] h-1.5 bg-gray-200 rounded-lg cursor-pointer" />
                <div className="flex justify-between text-[10px] text-gray-400 font-sans">
                  {slider.marks.map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F141F] to-[#1A2335] border border-[#C59B27]/30 text-slate-100 p-8 shadow-2xl space-y-6">
            <div className="text-center pb-4 border-b border-slate-800">
              <p className="text-[10px] font-sans font-black uppercase text-amber-500 tracking-[0.25em]">PRELIMINARY ESTIMATE METRICS</p>
              <h3 className="text-2xl font-serif font-bold text-slate-100 mt-2">Projection Ledger</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="text-slate-400">Projected Gross Settlement:</span>
                <span className="font-serif font-semibold text-slate-100 text-lg">${calculatedSettlement.gross.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="text-slate-400">Contingency Fee ({feePercentage}%):</span>
                <span className="font-serif font-semibold text-rose-400">-${calculatedSettlement.fees.toLocaleString()}</span>
              </div>
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-sans font-black text-amber-500 tracking-wider uppercase block">NET CLIENT DISBURSEMENT ESTIMATE</span>
                  <span className="text-2xl font-serif font-black text-emerald-400">${calculatedSettlement.net.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 border-l-2 border-amber-500 text-[10px] text-slate-400 leading-relaxed font-sans">
              ⚠️ Estimates compiled using baseline statutory limits and trial average outcomes. They do not represent a guaranteed legal outcome or binding contract.
            </div>
            <a
              href="#priority-booking"
              onClick={() => {
                onSetBookingForm(prev => ({ ...prev, summaryText: `Litigation category: ${calcType.toUpperCase()} with estimated direct value of $${Number(directDamages).toLocaleString()}.` }));
                onTriggerToast('Prefilled target case estimates to your secure booking form.', 'success');
              }}
              className="w-full text-center block bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white py-3.5 font-sans font-black uppercase tracking-wider text-xs border border-amber-300"
            >
              Secure Priority Evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
