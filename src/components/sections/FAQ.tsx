import { useState } from 'react';
import { FAQS } from '../../data/constants';

interface FAQProps {
  onTriggerToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export default function FAQ({ onTriggerToast }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    onTriggerToast(`Browsed instruction framework: Q${index + 1}`, 'info');
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Legal Guidelines FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Dispute & Restructure FAQs</h2>
          <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
        </div>

        <div className="space-y-4 font-sans text-xs">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 shadow-sm transition-all">
              <button
                onClick={() => toggle(index)}
                className="w-full p-5 text-left font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between text-xs tracking-wide uppercase focus:outline-none border-b border-gray-100 dark:border-slate-800"
              >
                <span>{faq.question}</span>
                <span className={`text-lg font-light transform transition-transform duration-200 ${openIndex === index ? 'rotate-45 text-[#C59B27]' : 'text-gray-400'}`}>+</span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-56' : 'max-h-0'}`}>
                <p className="p-6 text-gray-500 dark:text-slate-400 leading-relaxed bg-gray-50/50 dark:bg-[#0B0F19]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
