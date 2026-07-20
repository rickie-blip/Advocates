import React from 'react';
import { useQuiz } from '../../hooks/useQuiz';
import { BookingForm } from '../../types';

interface CaseQuizProps {
  onSetBookingForm: (updater: (prev: BookingForm) => BookingForm) => void;
  onTriggerToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

const STEP_LABELS = ['Category', 'Timeline', 'Proof', 'Value', 'Report'];

export default function CaseQuiz({ onSetBookingForm, onTriggerToast }: CaseQuizProps) {
  const { quizStep, quizAnswers, quizResult, handleQuizAnswer, resetQuiz } = useQuiz();

  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-6 sm:p-10 shadow-xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-3xl">⚖️</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-slate-100">Case Viability Assessor</h2>
            <p className="text-xs text-gray-500 dark:text-slate-400 font-sans max-w-md mx-auto">
              Discover if your legal dispute meets documentation thresholds and timeline frameworks within 60 seconds.
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-between items-center text-xs font-sans mb-8">
              {STEP_LABELS.map((label, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border ${quizStep >= idx ? 'bg-[#C59B27] text-white border-amber-500 shadow-md' : 'bg-white dark:bg-slate-900 text-gray-400 border-gray-300 dark:border-slate-800'}`}>
                    {idx + 1}
                  </span>
                  <span className="hidden sm:inline text-[9px] font-black uppercase tracking-wider mt-1 text-gray-400">{label}</span>
                </div>
              ))}
            </div>

            {quizStep === 0 && (
              <div className="space-y-4">
                <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 1: Choose the litigation or advisory category</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: 'corporate', label: 'Venture/Corporate restructure Dispute' },
                    { value: 'patent', label: 'IP Piracy / Patent Infringement' },
                    { value: 'contract', label: 'Commercial Breach of Contract' },
                    { value: 'trust', label: 'Trust / Generational Asset Allocation' },
                  ].map(opt => (
                    <button key={opt.value} onClick={() => handleQuizAnswer('category', opt.value)}
                      className="p-5 text-left border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] transition-all flex justify-between items-center font-sans font-bold">
                      <span>{opt.label}</span><span className="text-amber-500">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 1 && (
              <div className="space-y-4">
                <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 2: When did the incident or breach occur?</p>
                <div className="grid grid-cols-1 gap-3 font-sans font-bold">
                  {[
                    { value: 'recent', label: 'Within the last 12 Months', sub: 'Statute window fully active', color: 'text-emerald-500' },
                    { value: 'mid', label: 'Between 1 and 3 Years ago', sub: 'Needs immediate review of statute deadlines', color: 'text-amber-500' },
                    { value: 'old', label: 'More than 3 Years ago', sub: 'May have statutory complications', color: 'text-rose-500' },
                  ].map(opt => (
                    <button key={opt.value} onClick={() => handleQuizAnswer('timeframe', opt.value)}
                      className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between items-center">
                      <div><p>{opt.label}</p><p className={`text-[10px] font-normal uppercase tracking-wider mt-0.5 ${opt.color}`}>{opt.sub}</p></div>
                      <span className="text-amber-500">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="space-y-4">
                <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 3: What evidentiary support is available?</p>
                <div className="grid grid-cols-1 gap-3 font-sans font-bold">
                  {[
                    { value: 'strong', label: 'Strong: Fully Executed written agreements & logs', sub: 'Includes signed contracts, bank records, formal emails' },
                    { value: 'partial', label: 'Partial: Verbal/text validation and receipts', sub: 'Written communications exist but formal contracts do not' },
                    { value: 'none', label: 'None: Verbal commitment and unrecorded claims', sub: 'Requires extensive discovery process' },
                  ].map(opt => (
                    <button key={opt.value} onClick={() => handleQuizAnswer('evidence', opt.value)}
                      className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between">
                      <div><p>{opt.label}</p><p className="text-[10px] text-gray-400 font-normal mt-0.5">{opt.sub}</p></div>
                      <span className="text-amber-500">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="space-y-4">
                <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 4: Estimate the financial losses involved</p>
                <div className="grid grid-cols-3 gap-3 font-sans text-xs">
                  {[
                    { value: 'high', icon: '💰', label: 'Above $250k' },
                    { value: 'medium', icon: '💼', label: '$50k - $250k' },
                    { value: 'low', icon: '📉', label: 'Below $50k' },
                  ].map(opt => (
                    <button key={opt.value} onClick={() => handleQuizAnswer('lossValue', opt.value)}
                      className="p-5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] text-center flex flex-col items-center space-y-2 font-bold">
                      <span className="text-2xl">{opt.icon}</span><span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 4 && quizResult && (
              <div className="space-y-6 text-center">
                <div className={`inline-block border px-6 py-2 uppercase font-sans text-xs tracking-widest font-black ${quizResult.badgeColor}`}>
                  {quizResult.title}
                </div>
                <p className="text-sm font-sans text-gray-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">{quizResult.recommendation}</p>
                <div className="flex justify-center space-x-3 pt-4">
                  <button onClick={resetQuiz} className="border border-gray-300 dark:border-slate-700 font-sans text-xs uppercase tracking-wider font-bold py-3 px-6 text-slate-800 dark:text-slate-200">
                    Reset Evaluation
                  </button>
                  <a
                    href="#priority-booking"
                    onClick={() => {
                      onSetBookingForm(prev => ({ ...prev, summaryText: `Auto Evaluation: ${quizResult.title}. Evidence: ${quizAnswers.evidence.toUpperCase()}. Timeframe: ${quizAnswers.timeframe.toUpperCase()}.` }));
                      onTriggerToast('Auto Assessment report attached to priorities consultation ticket.', 'success');
                    }}
                    className="bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white font-sans text-xs uppercase tracking-wider font-bold py-3 px-6 border border-amber-300"
                  >
                    Route Report to Advocate
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
